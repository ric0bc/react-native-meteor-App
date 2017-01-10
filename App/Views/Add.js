import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
} from 'react-native';

import Meteor from 'react-native-meteor';

export default class Add extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
    }
  }

  addItem(){
    const name = this.state.name;
    Meteor.call('Items.addOne', { name }, (err, res) => {
      console.log('Items.addOne', err, res)
    });
    this.props.navigator.pop();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Add Item View</Text>
        <TextInput
          style={styles.textInput}
          onChange={(text) => { this.setState({ name: text.nativeEvent.text })}}
          value={this.state.name}
        />
        <TouchableHighlight
          style={styles.button}
          onPress={this.addItem.bind(this)}
        >
          <Text>SAVE</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  text: {
    fontSize: 24,
  },
  button: {
    height: 40,
    borderWidth: 1,
    borderColor: 'red'
  },
  textInput: {
    height: 40,
    borderWidth: 1,
    borderColor: 'red'
  }
});
