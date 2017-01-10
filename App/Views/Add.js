import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Image
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

  goBack(){
    this.props.navigator.pop();
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
            <TouchableHighlight
              onPress={this.goBack.bind(this)}
            >
              <Image
                source={require('../Images/left-arrow.png')}
                style={{ height: 35, width: 35, marginLeft: 15}}
              />
            </TouchableHighlight>
            <TouchableHighlight
              onPress={this.addItem.bind(this)}
            >
              <Image
                source={require('../Images/send-button.png')}
                style={{ height: 35, width: 35, marginRight: 15}}
              />
            </TouchableHighlight>
          </View>
        </View>
        <View style={styles.inputBackground}>
          <TextInput
            style={styles.textInput}
            multiline={true}
            numberOfLines={10}
            maxLength={256}
            onChange={(text) => { this.setState({ name: text.nativeEvent.text })}}
            value={this.state.name}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    minHeight: 60,
    backgroundColor: '#2196F3',
    justifyContent: 'center'
  },
  inputBackground: {
    backgroundColor: '#E57373',
    margin: 10,
    flex: 2,
    padding: 10
  },
  textInput: {
    marginLeft: 10,
    marginRight: 10,
    height: 100,
    borderBottomWidth: 1,
    borderColor: 'grey'
  }
});
