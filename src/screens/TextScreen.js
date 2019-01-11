import React, { Component } from 'react'; 
import { View, Text, StyleSheet, Button, Platform } from 'react-native'; 
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
          <Button title={'Switch To Tab 2'} testID={testIDs.SWITCH_SECOND_TAB_BUTTON} onPress={() => this.onClickSwitchToTab()} />
          <Button title={'Switch To Tab 1 by componentID'} testID={testIDs.SWITCH_FIRST_TAB_BUTTON} onPress={() => this.onClickSwitchToTabByComponentID()} />              
          {/* tslint:disable-next-line:max-line-length */}
          { Platform.OS === 'android' && <Button title='Hide Tab Bar' testID={testIDs.HIDE_BOTTOM_TABS_BUTTON} onPress={() => this.toggleTabBarVisibility(this.props.componentId, false)} /> }
          { Platform.OS === 'android' && <Button title='Show Tab Bar' testID={testIDs.SHOW_BOTTOM_TABS_BUTTON} onPress={() => this.toggleTabBarVisibility('BottomTabs', true)} /> }
          <Button title='Show Left Side Menu' testID={testIDs.SHOW_LEFT_SIDE_MENU_BUTTON} onPress={() => this.showSideMenu('left')} />
          <Button title='Show Right Side Menu' testID={testIDs.SHOW_RIGHT_SIDE_MENU_BUTTON} onPress={() => this.showSideMenu('right')} />  
          <Button title='Dismiss modal' testID={testIDs.DISMISS_MODAL_BUTTON} onPress={this.onClickDismissModal} />
        </View>
      </Bounds>
    );
  } 
  
  onClickDismissModal = () => {
    Navigation.dismissModal(this.props.componentId);
  }
 

  showSideMenu(side) { 
    Navigation.mergeOptions(this.props.componentId, {
      sideMenu: {
        [side]: {
          visible: true
        }
      }
    });
  }
 

  toggleTabBarVisibility(componentId, visible) {
    Navigation.mergeOptions(componentId, {
      bottomTabs: {
        visible,
        drawBehind: true,
        animate: true
      }
    });
  }
  
  onClickSwitchToTab() {
    Navigation.mergeOptions(this.props.componentId, {
      bottomTabs: {
        currentTabIndex: 1,
        visible: true,
        drawBehind: true,
        animate: true
      }
    });
  }
  
  onClickSwitchToTabByComponentID() {
    Navigation.mergeOptions(this.props.componentId, {
      bottomTabs: {
        currentTabId: 'TAB1_ID'
      }
    });
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
