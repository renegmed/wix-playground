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
                    <Button title='Push' testID={testIDs.PUSH_BUTTON} onPress={this.onClickPush} /> 
                </View>
                
                <View style={{ width: 2, height: 2, borderRadius: 1, backgroundColor: 'red', alignSelf: 'center' }} />
            </View>
        );
    }

    onClickPush = () => {
        Navigation.push(this.props.componentId, {
          component: {
            name: 'navigation.playground.PushedScreen',
            options: {
              layout: {
                
              },
              topBar: {
                title: {
                  text: 'pushed',
                  color: '#0000ff',
                  fontSize: 14
                },
                subtitle: {
                  text: 'subtitle',
                  fontSize: 10,
                  color: '#00ff00'
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
 