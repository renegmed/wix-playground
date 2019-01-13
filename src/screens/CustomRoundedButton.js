import React, { Component } from 'react'; 
import { StyleSheet,
    View,
    TouchableOpacity,
    Text,
    Alert,
    Platform }  from 'react-native';
import { Navigation } from 'react-native-navigation'; 

class CustomRoundedButton extends Component {

  constructor(props) {
    super(props);
    this.subscription = Navigation.events().bindComponent(this);
    this.state = {};
  }

  componentDidAppear() {
    console.log('RNN', 'CRB.componentDidAppear');
  }

  componentDidDisappear() {
    console.log('RNN', `CRB.componentDidDisappear`);
  }

  componentDidMount() {
    console.log('RNN', `CRB.componentDidMount`);
  }

  componentWillUnmount() {
    this.subscription.remove();
    console.log('RNN', `CRB.componentWillUnmount`);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.button}>
          <TouchableOpacity onPress={() => Alert.alert(this.props.title, 'Thanks for that :)')}>
            <Text style={styles.text}>{this.props.title}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default CustomRoundedButton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'red',
    justifyContent: 'center',
  },
  text: {
    color: 'black',
    alignSelf: 'center'
  }
});
