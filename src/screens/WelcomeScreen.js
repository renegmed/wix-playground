import React, { Component } from 'react'; 
import { View, Text, StyleSheet, Platform  }  from 'react-native'; 
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
                    {Platform.OS === 'android' && <Button title='Push Top Tabs screen' 
                        testID={testIDs.PUSH_TOP_TABS_BUTTON} onPress={this.onClickPushTopTabsScreen} />}
                </View>
                
                <View style={{ width: 2, height: 2, borderRadius: 1, backgroundColor: 'red', alignSelf: 'center' }} />
            </View>
        );
    }

    // Slide to left to go to Tab 2 and Tab 3
    onClickPushTopTabsScreen = () => {
        Navigation.push(this.props.componentId, {
          topTabs: {
            children: [
              {
                component: {
                  name: 'navigation.playground.TopTabOptionsScreen',
                  passProps: {
                    title: 'Tab 1',
                    text: 'This is top tab 1'
                  },
                  options: {
                    topTab: {
                      title: 'Tab 1'
                    },
                    topBar: {
                      title: {
                        text: 'One'
                      }
                    }
                  }
                }
              },
              {
                component: {
                  name: 'navigation.playground.TopTabScreen',
                  passProps: {
                    title: 'Tab 2',
                    text: 'This is top tab 2'
                  },
                  options: {
                    topTab: {
                      title: 'Tab 2',
                      titleFontFamily: 'HelveticaNeue-Italic'
                    },
                    topBar: {
                      title: {
                        text: 'Two'
                      }
                    }
                  }
                }
              },
              {
                component: {
                  name: 'navigation.playground.TopTabScreen',
                  passProps: {
                    title: 'Tab 3',
                    text: 'This is top tab 3'
                  },
                  options: {
                    topTab: {
                      title: 'Tab 3'
                    },
                    topBar: {
                      title: {
                        text: 'Three'
                      }
                    }
                  }
                }
              }
            ],
            options: {
              topTabs: {
                selectedTabColor: '#12766b',
                unselectedTabColor: 'red',
                fontSize: 8
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
      fontSize: 14,
      color: '#888',
      marginTop: 10
    }
});

export default WelcomeScreen;
 