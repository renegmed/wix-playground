import React, { PureComponent } from 'react'; 
import { Text, Button, View, Alert, Platform, StyleSheet  }  from 'react-native';
import { Navigation } from 'react-native-navigation';

const testIDs = require('../constants');

class CustomDialog extends PureComponent {
  static options() {
    return {
      statusBarBackgroundColor: 'green'
    };
  }

  render() {
    return (
      <View style={styles.root}>
        <Text style={styles.h1} testID={testIDs.DIALOG_HEADER}>Test view</Text>
        <Button title='OK' testID={testIDs.OK_BUTTON} onPress={() => this.onCLickOk()} />
        <Button title='Set Root' testID={testIDs.SET_ROOT_BUTTON} onPress={() => this.onCLickSetRoot()} />
        <Button title='Set Intercept touch' testID={testIDs.SET_INTERCEPT_TOUCH} onPress={() => this.onCLickSetInterceptTouch()} />
      </View>
    );
  }

  didDisappear() {
    if (Platform.OS === 'android') {
      Alert.alert('Overlay disappeared');
    }
  }

  onCLickOk() {
    Navigation.dismissOverlay(this.props.componentId);
  }

  onCLickSetRoot() {
    Navigation.setRoot({
      root: {
        component: {
          name: 'navigation.playground.TextScreen'
        }
      }
    });
  }

  onCLickSetInterceptTouch() {
    Navigation.mergeOptions(this.props.componentId, {
      overlay: {
        interceptTouchOutside: false
      }
    });
  }
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    height: 140,
    bottom: 0,
    position: 'absolute',
    left: 0,
    right: 0
  },
  h1: {
    fontSize: 24,
    textAlign: 'center',
    margin: 10
  },
  h2: {
    fontSize: 12,
    textAlign: 'center',
    margin: 10
  },
  footer: {
    fontSize: 10,
    color: '#888',
    marginTop: 10
  }
});

export default CustomDialog;
