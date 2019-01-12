import React, { Component } from 'react' 

import {
  StyleSheet,
  FlatList,
  View,
  Button,
  Text,
  TouchableOpacity,
  Platform
} from 'react-native';

import { Navigation } from 'react-native-navigation'
 
const testIDs = require('../constants');

const ITEMS = [];
for(let i = 0; i < 200; i++) {
  ITEMS.push({key: `Item ${i}`});
}

class SearchControllerScreen extends Component {
  static options() {
    return {
      topBar: {
        title: {
          text: 'Search'
        },
        largeTitle: {
          visible: true
        },
        searchBar: true,
        background: {
          translucent: true
        },
        searchBarPlaceholder: 'Start Typing'
      }
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      query: ''
    };
    Navigation.events().bindComponent(this);
  }

  filteredData() {
    return ITEMS.filter(
      item =>
        this.state.query.length === 0 || item.key.indexOf(this.state.query) > -1
    );
  }

  highlight(text, query) {
    if (query.length > 0 && text.indexOf(query) > -1) {
      const before = text.split(query)[0];
      const after = text.split(query)[1];
      return (
        <Text>
          <Text>{before}</Text>
          <Text style={{ backgroundColor: 'yellow' }}>{query}</Text>
          <Text>{after}</Text>
        </Text>
      );
    }
    return text;
  }

  onItemPressed = () => {
    Navigation.push(this.props.componentId, {
      component: {
        name: 'navigation.playground.PushedScreen',
        options: {
          topBar: {
            title: {
              text: 'PushedScreen'
            },
            largeTitle: {
              visible: true
            },
            background: {
              translucent: true
            }
          }
        }
      },
    });
  }

  render() {
    return (
      <FlatList
        testID={testIDs.SCROLLVIEW_ELEMENT}
        data={this.filteredData()}
        contentContainerStyle={styles.contentContainer}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.row} onPress={this.onItemPressed}>
            <Text style={styles.rowText} testID={testIDs.SEARCH_RESULT_ITEM}>
              {this.highlight(item.key, this.state.query)}
            </Text>
          </TouchableOpacity>
        )}
      />
    );
  }

  searchBarUpdated({text, isFocused}) {
    this.setState({ query: text, isFocused });
  }
}

export default SearchControllerScreen;

const styles = StyleSheet.create({
  contentContainer: {},
  row: {
    height: 60,
    padding: 15,
    justifyContent: 'center'
  },
  rowText: {
    fontSize: 18
  }
});
