import React, { Component } from 'react'; 
import { View, Text, Button, StyleSheet }  from 'react-native'; 
import { Navigation } from 'react-native-navigation';

import testIDs from '../constants';

class ComplexLayout extends Component {
  render() {
    return (
      <View style={styles.root}>
        <Text style={styles.h1} testID={testIDs.CENTERED_TEXT_HEADER}>{this.props.text || 'Complex layout screen'}</Text>
        <Button title={'External component in stack'} testID={testIDs.EXTERNAL_COMPONENT_IN_STACK} onPress={this.onExternalComponentInStackPressed} />
        <Button title={'External component in deep stack'} testID={testIDs.EXTERNAL_COMPONENT_IN_DEEP_STACK} onPress={this.onExternalComponentInDeepStackPressed} />
        <Button title={'SideMenu layout inside a bottomTab'} testID={testIDs.SIDE_MENU_LAYOUT_INSIDE_BOTTOM_TAB} onPress={this.onSideMenuLayoutInsideBottomTabPressed} />
        <Button title='Show touch through overlay with scroll' testID={testIDs.SHOW_TOUCH_THROUGH_OVERLAY_SCROLLER} onPress={() => this.onClickShowOverlayWithScroll(true)} />
      </View>
    );
  }

  onExternalComponentInStackPressed = () => {
    Navigation.showModal({
      stack: {
        children: [{
          externalComponent: {
            name: 'RNNCustomComponent',
            passProps: {
              text: 'External component in stack'
            }
          }
        }]
      }
    });
  }

  onExternalComponentInDeepStackPressed = () => {
    Navigation.showModal({
      stack: {
        children: [{
          component: {
            name: 'navigation.playground.TextScreen'
          }
        },
        {
          externalComponent: {
            name: 'RNNCustomComponent',
            passProps: {
              text: 'External component in deep stack'
            }
          }
        }]
      }
    });
  }

  onSideMenuLayoutInsideBottomTabPressed = () => {
    Navigation.dismissAllModals();
    Navigation.setRoot({
      root: {
        bottomTabs: {
          children: [
            {
              stack: {
                children: [
                  {
                    component: {
                      name: 'navigation.playground.TextScreen',
                      options: {
                        topBar: {
                          animate: false
                        }
                      }
                    }
                  }
                ],
                options: {
                  bottomTab: {
                    text: 'Stack',
                    icon: require('../images/one.png')
                  }
                }
              }
            },
            {
              sideMenu: {
                left: {
                  component: {
                    name: 'navigation.playground.SideMenuScreen',
                    options: {
                      topBar: {
                        animate: false
                      }
                    },
                    passProps: {
                      side: 'left'
                    }
                  }
                },
                center: {
                  stack: {
                    children: [
                      {
                        component: {
                          name: 'complexLayout.bottomTabThatOpensSideMenu'
                        }
                      }
                    ]
                  }
                },
                options: {
                  bottomTab: {
                    text: 'SideMenu',
                    icon: require('../images/two.png'),
                    testID: testIDs.SECOND_TAB_BAR_BUTTON
                  }
                }
              }
            },
            {
              sideMenu: {
                left: {
                  component: {
                    name: 'navigation.playground.SideMenuScreen',
                    passProps: {
                      side: 'left'
                    }
                  }
                },
                center: {
                  stack: {
                    children: [
                      {
                        component: {
                          name: 'navigation.playground.FlatListScreen',
                        }
                      }
                    ]
                  }
                },
                options: {
                  bottomTab: {
                    text: 'FlatList',
                    icon: require('../images/three.png'),
                    testID: testIDs.THIRD_TAB_BAR_BUTTON,
                  }
                }
              }
            }
           ]
        }
      }
    });
  }

  onClickShowOverlayWithScroll = async (interceptTouchOutside) => {
    await Navigation.showOverlay({
      component: {
        name: 'navigation.playground.CustomDialogWithScroll',
        options: {
          layout: {
            componentBackgroundColor: 'transparent'
          },
          overlay: {
            interceptTouchOutside
          }
        }
      }
    });
  }
}

export default ComplexLayout;

const styles = StyleSheet.create({
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
    fontSize: 18,
    textAlign: 'center',
    margin: 10
  },
  footer: {
    fontSize: 14,
    color: '#888',
    marginTop: 10
  }
});
