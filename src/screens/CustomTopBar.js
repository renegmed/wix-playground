import React, { Component } from 'react'; 
import { StyleSheet,
    View,
    TouchableOpacity,
    Text,
    Alert,
    Platform  }  from 'react-native';
import { Navigation } from 'react-native-navigation';

class CustomTopBar extends Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.subscription = Navigation.events().bindComponent(this);
  }

  componentDidAppear() {
    console.log('RNN', 'CTB.componentDidAppear');
  }

  componentDidDisappear() {
    console.log('RNN', `CTB.componentDidDisappear`);
  }

  componentDidMount() {
    console.log('RNN', `CTB.componentDidMount`);
  }

  componentWillUnmount() {
    console.log('RNN', `CTB.componentWillUnmount`);
    this.subscription.remove();
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => Alert.alert(this.props.title, 'Thanks for that :)')}>
          <Text style={styles.text}>Press Me</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default CustomTopBar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignSelf: 'center'
  },
  text: {
    alignSelf: 'center',
    color: 'black',
  }
});
