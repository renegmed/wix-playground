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
                </View>
                
                <View style={{ width: 2, height: 2, borderRadius: 1, backgroundColor: 'red', alignSelf: 'center' }} />
            </View>
        );
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
 