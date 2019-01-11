import React, { Component } from 'react'; 
import { View, Text, StyleSheet } from 'react-native'; 
 
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
        </View>
      </Bounds>
    );
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
