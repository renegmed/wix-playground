import _  from 'lodash';
import React from 'react';
import {Component} from 'react';
import {View, Text, Platform} from 'react-native';
import {Navigation} from 'react-native-navigation';
import Button from './Button';
import testIDs from '../constants';

class PushedScreen extends Component {
  static options() {
    return {
      _statusBar: {
        visible: false,
        drawBehind: true
      },
      topBar: {
        testID: testIDs.TOP_BAR_ELEMENT,
        rightButtons: {
          id: 'singleBtn',
          text: 'single',
          testID: testIDs.TOP_BAR_BUTTON
        },
        rightButtonColor: 'red',
       noBorder: true
      },
      bottomTabs: {
        visible: false
      }
    };
  }

  constructor(props) {
    super(props);
    if (this.props.simulateLongRunningTask) {
      this.simulateLongRunningTask();
    }
    this.onClickPush = this.onClickPush.bind(this);
    this.onClickPushBottomTabs = this.onClickPushBottomTabs.bind(this);
    this.onClickPop = this.onClickPop.bind(this);
    this.onClickPopPrevious = this.onClickPopPrevious.bind(this);
    this.onClickPopToFirstPosition = this.onClickPopToFirstPosition.bind(this);
    this.onClickPopToRoot = this.onClickPopToRoot.bind(this);
    this.onClickSetStackRoot = this.onClickSetStackRoot.bind(this);
    this.state = {disabled: false};
  }

  simulateLongRunningTask() {
    // tslint:disable-next-line
    for (let i = 0; i < Math.pow(2, 25); i++);
  }

  listeners = [];

  componentDidMount() {
    this.listeners.push(
      Navigation.events().registerComponentDidAppearListener((event) => {
        if (this.state.previewComponentId === event.componentId) {
          this.setState({disabled: event.type === 'ComponentDidAppear'});
        }
      })
    );
    if (Platform.OS === 'ios') {
      // this.listeners.push(
      //   Navigation.events().registerNativeEventListener((name, params) => {
      //     if (name === 'previewContext') {
      //       const { previewComponentId } = params;
      //       this.setState({ previewComponentId });
      //     }
      //   })
      // );
    }
  }

  componentWillUnmount() {
    this.listeners.forEach(listener => listener.remove && listener.remove());
  }

  render() {
    const stackPosition = this.getStackPosition();
    return (
      <View style={styles.root}>
        <Text testID={testIDs.PUSHED_SCREEN_HEADER} style={styles.h1}>{`Pushed Screen`}</Text>
        <Text style={styles.h2}>{`Stack Position: ${stackPosition}`}</Text>
        <Button title='Push' testID={testIDs.PUSH_BUTTON} onPress={this.onClickPush} />
        <Button title='Push bottomTabs' testID={testIDs.PUSH_BOTTOM_TABS_BUTTON} onPress={this.onClickPushBottomTabs} />
        {Platform.OS === 'ios' && <Button testID={testIDs.SHOW_PREVIEW_BUTTON} onPress={this.onClickPush} onPressIn={this.onClickShowPreview} title='Push Preview' />}
        <Button title='Pop' testID={testIDs.POP_BUTTON} onPress={this.onClickPop} />
        <Button title='Pop Previous' testID={testIDs.POP_PREVIOUS_BUTTON} onPress={this.onClickPopPrevious} />
        <Button title='Pop To Root' testID={testIDs.POP_TO_ROOT} onPress={this.onClickPopToRoot} />
        <Button title='Set Stack Root' testID={testIDs.SET_STACK_ROOT_BUTTON} onPress={this.onClickSetStackRoot} />
        <Button title='Push and Wait for Render' testID={testIDs.PUSH_BUTTON_WAIT_FOR_RENDER} onPress={this.onClickPushWaitForRender} />
        {stackPosition > 2 && <Button title='Pop To Stack Position 1' testID={testIDs.POP_STACK_POSITION_ONE_BUTTON} onPress={this.onClickPopToFirstPosition} />}
        <Text style={styles.footer}>{`this.props.componentId = ${this.props.componentId}`}</Text>
      </View>
    );
  }

  onClickShowPreview = async ({reactTag}) => {
    await Navigation.push(this.props.componentId, {
      component: {
        name: 'navigation.playground.PushedScreen',
        passProps: {
          stackPosition: this.getStackPosition() + 1,
          previousScreenIds: _.concat([], this.props.previousScreenIds || [], this.props.componentId)
        },
        options: {
          topBar: {
            title: {
              text: `Pushed ${this.getStackPosition() + 1}`
            }
          },
          animations: {
            push: {
              enabled: false
            }
          },
          preview: {
            reactTag,
            height: 400,
            commit: true,
            actions: [{
              id: 'action-cancel',
              title: 'Cancel'
            }]
          }
        }
      }
    });
  }

  async onClickPush() {
    if (this.state.disabled) {
      return;
    }

    await Navigation.push(this.props.componentId, {
      component: {
        name: 'navigation.playground.PushedScreen',
        passProps: {
          stackPosition: this.getStackPosition() + 1,
          previousScreenIds: _.concat([], this.props.previousScreenIds || [], this.props.componentId)
        },
        options: {
          topBar: {
            title: {
              text: `Pushed ${this.getStackPosition() + 1}`
            }
          }
        }
      }
    });
  }

  async onClickPop() {
    await Navigation.pop(this.props.componentId);
  }

  async onClickPopPrevious() {
    await Navigation.pop(_.last(this.props.previousScreenIds));
  }

  async onClickPopToFirstPosition() {
    await Navigation.popTo(this.props.previousScreenIds[0]);
  }

  async onClickPopToRoot() {
    await Navigation.popToRoot(this.props.componentId);
  }

  async onClickSetStackRoot() {
    await Navigation.setStackRoot(this.props.componentId, [
      {
        component: {
          name: 'navigation.playground.PushedScreen',
          passProps: {
            stackPosition: this.getStackPosition() + 1,
            previousScreenIds: _.concat([], this.props.previousScreenIds || [], this.props.componentId)
          },
          options: {
            animations: {
              setStackRoot: {
                enabled: false
              }
            },
            topBar: {
              title: {
                text: `Pushed ${this.getStackPosition() + 1} a`
              }
            }
          }
        }
      },
      {
        component: {
          name: 'navigation.playground.PushedScreen',
          passProps: {
            stackPosition: this.getStackPosition() + 1,
            previousScreenIds: _.concat([], this.props.previousScreenIds || [], this.props.componentId)
          },
          options: {
            animations: {
              setStackRoot: {
                enabled: false
              }
            },
            topBar: {
              title: {
                text: `Pushed ${this.getStackPosition() + 1} b`
              }
            }
          }
        }
      }
    ]);
  }

  onClickPushWaitForRender = async () => {
    await Navigation.push(this.props.componentId, {
      component: {
        name: 'navigation.playground.PushedScreen',
        passProps: {
          stackPosition: this.getStackPosition() + 1,
          previousScreenIds: _.concat([], this.props.previousScreenIds || [], this.props.componentId),
          simulateLongRunningTask: true
        },
        options: {
          layout: {
            backgroundColor: 'transparent'
          },
          topBar: {
            title: {
              text: `Pushed ${this.getStackPosition() + 1}`
            }
          },
          animations: {
            push: {
              waitForRender: true
            }
          }
        }
      }
    });
  }

  async onClickPushBottomTabs() {
    await Navigation.push(this.props.componentId, {
      bottomTabs: {
        id: 'BottomTabs',
        children: [
          {
            stack: {
              id: 'TAB1_ID',
              children: [
                {
                  component: {
                    name: 'navigation.playground.TextScreen',
                    passProps: {
                      text: 'This is tab 1',
                      myFunction: () => 'Hello from a function!'
                    },
                    options: {
                      topBar: {
                        visible: true,
                        animate: false,
                        title: {
                          text: 'React Native Navigation!'
                        }
                      },
                      bottomTab: {
                        text: 'Tab 1',
                        icon: require('../images/one.png'),
                        selectedIcon: require('../images/one.png'),
                        testID: testIDs.FIRST_TAB_BAR_BUTTON
                      }
                    }
                  }
                }
              ],
              options: {
                topBar: {
                  visible: false
                }
              }
            }
          },
          {
            stack: {
              children: [
                {
                  component: {
                    name: 'navigation.playground.TextScreen',
                    passProps: {
                      text: 'This is tab 2'
                    }
                  }
                }
              ],
              options: {
                bottomTab: {
                  text: 'Tab 2',
                  icon: require('../images/two.png'),
                  testID: testIDs.SECOND_TAB_BAR_BUTTON
                }
              }
            }
          },
          {
            component: {
              name: 'navigation.playground.TextScreen',
              passProps: {
                text: 'This is tab 3',
                myFunction: () => 'Hello from a function!'
              },
              options: {
                topBar: {
                  visible: true,
                  animate: false
                },
                bottomTab: {
                  text: 'Tab 3',
                  icon: require('../images/one.png'),
                  selectedIcon: require('../images/one.png')
                }
              }
            }
          }
        ],
        options: {
          bottomTabs: {
            titleDisplayMode: 'alwaysShow',
            testID: testIDs.BOTTOM_TABS_ELEMENT
          }
        }
      }
    });
  }

  getStackPosition() {
    return this.props.stackPosition || 1;
  }
}

const styles = {
  root: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff'
  },
  h1: {
    fontSize: 24,
    textAlign: 'center',
    margin: 10
  },
  h2: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  footer: {
    fontSize: 18,
    color: '#888',
    marginTop: 10
  }
};

export default PushedScreen;
