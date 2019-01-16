 
import React, { Component } from 'react'; 
import { View, Text, StyleSheet  }  from 'react-native';  
import { Navigation } from 'react-native-navigation';
import Button from './Button'; 

const testIDs = require('../constants.js'); 

class WelcomeScreen extends Component { 
  static options() {
      return {
          _statusBar: {
              backgroundColor: 'transparent',
              style: 'dark',
              drawBehind: true
          },
          topBar: {
              title: {
                  text: 'My Screen'
              },
              largeTitle: {
                  visible: false,
              },
              drawBehind: true,
              visible: false,
              animate: false
          }
      };
  }
    
  render() {
    return (
        <View style={styles.bar}>
            <View style={{ width: 2, height: 2, borderRadius: 1, backgroundColor: 'red', alignSelf: 'center' }} /> 
            <View style={styles.root} key={'root'}> 
                <Text testID={testIDs.WELCOME_SCREEN_HEADER} style={styles.h1}>{`React Native Navigation!`}</Text>
                <Button title='Switch to tab based app' testID={testIDs.TAB_BASED_APP_BUTTON} onPress={this.onClickSwitchToTabs} /> 
                <Button title='Switch to app with side menus' testID={testIDs.TAB_BASED_APP_SIDE_BUTTON} onPress={this.onClickSwitchToSideMenus} />

                <Button title='Push Lifecycle Screen' testID={testIDs.PUSH_LIFECYCLE_BUTTON} onPress={this.onClickLifecycleScreen} />

                <Button title='Static Lifecycle Events' 
                        testID={testIDs.PUSH_STATIC_LIFECYCLE_BUTTON} onPress={this.onClickShowStaticLifecycleOverlay} />
            </View>
            
            <View style={{ width: 2, height: 2, borderRadius: 1, backgroundColor: 'red', alignSelf: 'center' }} />
        </View>
    ); 
  }
  
  onClickSwitchToSideMenus = () => { 
    Navigation.setRoot({
      root: {
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
            bottomTabs: {
              children: [
                {
                  stack: {
                    id: 'tab1Stack',
                    children: [
                      {
                        component: {
                          name: 'navigation.playground.TextScreen',
                          passProps: {
                            text: 'This is a side menu center screen tab 1'
                          },
                          // options: {
                          //   bottomTab: {
                          //     iconColor: 'red',
                          //     textColor: 'red',
                          //     selectedIconColor: 'purple',
                          //     selectedTextColor: 'purple',
                          //   }
                          // }
                        }
                      }
                    ],
                    options: {
                      bottomTab: {
                        iconColor: 'red',
                        textColor: 'red',
                        selectedIconColor: 'purple',
                        selectedTextColor: 'purple',
                        text: 'Tab 1',
                        icon: require('../images/one.png'),
                        testID: testIDs.FIRST_TAB_BAR_BUTTON
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
                            text: 'This is a side menu center screen tab 2'
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
                  stack: {
                    children: [
                      {
                        component: {
                          name: 'navigation.playground.TextScreen',
                          passProps: {
                            text: 'This is a side menu center screen tab 3'
                          }
                        }
                      }
                    ],
                    options: {
                      bottomTab: {
                        text: 'Tab 3',
                        icon: require('../images/three.png'),
                        testID: testIDs.SECOND_TAB_BAR_BUTTON
                      }
                    }
                  }
                }
              ],
              options: {
                bottomTab: {
                  textColor: '#AED581',
                  iconColor: '#AED581',
                  selectedTextColor: '#90CAF9',
                  selectedIconColor: '#90CAF9',
                  fontFamily: 'HelveticaNeue-Italic',
                  fontSize: 13
                }
              }
            } 
          },
          right: {
            component: {
              name: 'navigation.playground.SideMenuScreen',
              passProps: {
                side: 'right'
              }
            }
          }
        }
      }
    });
  }
 
  onClickSwitchToTabs = () => { 
    Navigation.setRoot({
      root: {
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
      }        
    }) 
  }
 
   

  onClickShowStaticLifecycleOverlay =  () => {
      Navigation.showOverlay({
          component: {
            name: 'navigation.playground.StaticLifecycleOverlay',
            options: {
              overlay: {
                interceptTouchOutside: true
              }
            }
          }
      }); 
  }
 

  onClickLifecycleScreen = () => {
      Navigation.push(this.props.componentId, {
        component: {
          name: 'navigation.playground.LifecycleScreen'
        }
      });
  }
  
}
 
const styles = StyleSheet.create({
    root: {
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    bar: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-between'
    },
    h1: {
      fontSize: 24,
      textAlign: 'center',
      margin: 30
    },
    footer: {
      fontSize: 10,
      color: '#888',
      marginTop: 10
    }
});

export default WelcomeScreen;
 