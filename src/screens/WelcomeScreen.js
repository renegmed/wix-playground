import React, { Component } from 'react'; 
import { View, Text  }  from 'react-native';

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
                visible: true,
                animate: false
            }
        };
    }
    
    render() {
        return (
            <View>
                <Text>Welcome to Playground</Text>
            </View>
        );
    }
}  

export default WelcomeScreen;
 