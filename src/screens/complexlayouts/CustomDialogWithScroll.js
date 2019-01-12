import React, { PureComponent } from 'react'; 
import { View, Alert, Platform, ScrollView, StyleSheet }  from 'react-native'; 
//import { Navigation } from 'react-native-navigation';
 
//import testIDs from '../../constants';

class CustomDialogWithScroll extends PureComponent {
  static options() {
    return {
      statusBarBackgroundColor: 'green'
    };
  }

  render() {
    return (
      <View style={styles.root}>
        <View style={{ height: 200, width: '80%', alignSelf: 'center', flexDirection: 'row' }}>
          <ScrollView style={styles.scrollView} contentContainerStyle={styles.content}>
            <View style={{ height: 60, backgroundColor: 'red' }} />
            <View style={{ height: 60, backgroundColor: 'green' }} />
            <View style={{ height: 60, backgroundColor: 'red' }} />
            <View style={{ height: 60, backgroundColor: 'green' }} />
            <View style={{ height: 60, backgroundColor: 'red' }} />
            <View style={{ height: 60, backgroundColor: 'green' }} />
          </ScrollView>
        </View>
      </View>
    );
  }

  didDisappear() {
    if (Platform.OS === 'android') {
      Alert.alert('Overlay disappeared');
    }
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'blue'
  },
  root: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end'
  },
  content: {
    backgroundColor: 'blue'
  },
  h1: {
    fontSize: 24,
    textAlign: 'center',
    margin: 10
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
});

export default CustomDialogWithScroll;
