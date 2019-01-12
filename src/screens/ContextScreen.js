import React, { Component } from 'react'; 
import { View, Text, Button, StyleSheet }  from 'react-native'; 
import { GlobalContext, Context } from '../context';

import testIDs from '../constants'

class ContextScreen extends Component {
  static contextType = Context;

  static options() {
    return {
      topBar: {
        title: {
          text: 'My Screen'
        },
        background: {
          color: 'red'
        }
      }
    };
  }

  render() {
    return (
      <View style={styles.root}>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
          <Text style={styles.h2}>Default value: </Text>
          <Text style={styles.h2} testID={testIDs.CENTERED_TEXT_HEADER}>{this.context}</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={styles.h2}>Provider value: </Text>
          <GlobalContext.Consumer>
            {ctx => (
              <Text style={styles.h2} testID={testIDs.CENTERED_TEXT_HEADER}>{ctx.title}</Text>
            )}
          </GlobalContext.Consumer>
        </View>
        <View>
          <GlobalContext.Consumer>
            {ctx => (
              <Button title={`clicked ${ctx.count}`} onPress={() => ctx.count++}/>
            )}
          </GlobalContext.Consumer>
        </View>
      </View>
    );
  }
}

export default ContextScreen;

const styles = StyleSheet.create({
  root: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff'
  },
  h1: {
    fontSize: 24,
    textAlign: 'center'
  },
  h2: {
    fontSize: 18,
    textAlign: 'center',
  },
});
