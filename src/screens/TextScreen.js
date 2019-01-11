import React, { Component } from 'react'; 
import { View, Text, StyleSheet, Button } from 'react-native'; 
import { Navigation } from 'react-native-navigation'; 
import testIDs from '../constants';
import Bounds from '../components/Bounds';

class TextScreen extends Component {
  static options() {
    return {
      bottomTabs: {
        drawBehind: true,
        testID: testIDs.BOTTOM_TABS_ELEMENT
      },
      topBar: {
        testID: testIDs.TOP_BAR_ELEMENT
      }
    };
  }

  render() {
    return (
      <Bounds>
        <View style={styles.root}>
          <Text style={styles.h1} testID={testIDs.CENTERED_TEXT_HEADER}>{this.props.text || 'Text Screen'}</Text> 
          {this.renderTextFromFunctionInProps()}
          <Text style={styles.footer}>{`this.props.componentId = ${this.props.componentId}`}</Text> 
          <Button title={'Set Tab Badge'} testID={testIDs.SET_TAB_BADGE_BUTTON} onPress={() => this.onClickSetBadge()} />
          <Button title={'Set empty Tab Badge'} testID={testIDs.SET_TAB_BADGE_BUTTON_NULL} onPress={() => this.onClickSetNullBadge()} />        
        </View>
      </Bounds>
    );
  } 

  onClickSetBadge() {
    Navigation.mergeOptions(this.props.componentId, {
      bottomTab: {
        badge: `TeSt`
      }
    });
  }

  onClickSetNullBadge() {
    Navigation.mergeOptions(this.props.componentId, {
      bottomTab: {
        badge: ''
      }
    });
  }

  renderTextFromFunctionInProps() {
    if (!this.props.myFunction) {
        return undefined;
    }
    return (
        <Text style={styles.h1}>{this.props.myFunction()}</Text>
    );
  }


}

export default TextScreen;

const styles = StyleSheet.create({
  root: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E3DCC3'
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
