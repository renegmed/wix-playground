import React, { Component } from 'react'; 
import { View, Text, Button, BackHandler }  from 'react-native'; 
import { Navigation } from 'react-native-navigation'; 

class BackHandlerScreen extends Component {
  static options() {
    return {
      topBar: {
        title: {
          text: 'Back Handler',
          color: 'black',
          fontSize: 16
        }
      }
    };
  }

  constructor(props) {
    super(props);
    this.backHandler = () => {
      this.setState({
        backPress: 'Back button pressed!'
      });
      return true;
    };
    this.state = {
      backPress: ''
    };
  }

  render() {
    return (
      <View style={styles.root}>
        <Text style={styles.h1}>{`Back Handler Screen`}</Text>
        <Text style={styles.h2}>{this.state.backPress}</Text>
        <Button title='add back handler' onPress={() => this.addBackHandler()} />
        <Button title='remove back handler' onPress={() => this.removeBackHandler()} />
        <Button title='show single component modal' onPress={() => this.showModal()} />
        <Button title='show modal with stack' onPress={() => this.showModalWitchStack()} />
      </View>
    );
  }

  addBackHandler() {
    BackHandler.addEventListener('hardwareBackPress', this.backHandler);
  }

  removeBackHandler() {
    BackHandler.removeEventListener('hardwareBackPress', this.backHandler);
  }

  showModal() {
    Navigation.showModal({
      component: {
        name: 'navigation.playground.BackHandlerModalScreen'
      }
    });
  }

  showModalWitchStack() {
    Navigation.showModal({
      stack: {
        children: [
          {
            component: {
              name: 'navigation.playground.BackHandlerModalScreen'
            }
          },
          {
            component: {
              name: 'navigation.playground.BackHandlerModalScreen'
            }
          }
        ]
      }
    });
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.backHandler);
  }
}

const styles = {
  root: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
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
};

export default BackHandlerScreen;
