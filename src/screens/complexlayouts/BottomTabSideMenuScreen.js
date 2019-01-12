import React, { Component } from 'react'; 
import { View, Button, StyleSheet }  from 'react-native'; 
import { Navigation } from 'react-native-navigation';
 
import testIDs from '../../constants';

class BottomTabSideMenuScreen extends Component {
  static options() {
    return {
      topBar: {
        title: {
          text: 'test',
        }
      }
    }
  }

  onOpenSideMenuPress = () => {
    Navigation.mergeOptions(this.props.componentId, {
      sideMenu: {
        left: {
          visible: true
        }
      }
    });
  }

  render() {
    return (
      <View style={styles.root}>
        <Button
          title="Open SideMenu"
          color="blue"
          onPress={this.onOpenSideMenuPress}
          testID={testIDs.OPEN_SIDE_MENU}
        />
      </View>
    );
  }
}
export default BottomTabSideMenuScreen;

const styles = StyleSheet.create({
  root: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff'
  }
});
