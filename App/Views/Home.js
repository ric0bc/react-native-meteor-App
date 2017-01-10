import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';

import Meteor, { createContainer, MeteorListView } from 'react-native-meteor';

import Add from './Add';
import DetailView from './DetailView';
import Header from './Partials/Header';

const SERVER_URL = 'ws://localhost:3000/websocket';

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      lng: '',
      lat: '',
      location: '',
    }
  }

  componentWillMount(){
    Meteor.connect(SERVER_URL);


    // Geolocation data
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({lng: JSON.stringify(position.coords.longitude)});
        this.setState({lat: JSON.stringify(position.coords.latitude)});
        let url = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + this.state.lat + ',' + this.state.lng;
        //Fetch City Location
        fetch(url)
          .then((response) => response.json())
          .then((responseJson) => {
            this.setState({location: responseJson.results[2].formatted_address});
            console.log(this.state.location);
          })
          .catch((error) => {
            console.error(error);
        });
      },
      (error) => {alert(error.message)},
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    ); 
  }

  // Button to change scene to CREATE page
  handleAddItem(){
    this.props.navigator.push({
      title: 'Add Item',
      component: Add,
    });
  }

  //Goto DetailView
  handlePost(item){
    this.props.navigator.push({
      title: 'Details',
      component: DetailView,
      passProps: { 
        items: item,
        id: item._id,
        name: item.name,
      },
    });
  }

  // Render row for MeteorListView
  renderRow(item){
    return (
      <TouchableOpacity style={styles.item} onPress={this.handlePost.bind(this, item)}>
        <Text style={styles.itemText}>{item.name}</Text>
      </TouchableOpacity>
    );
  }

  render() {

    const { ready, items } = this.props;

    if (!ready) {
      return (
        <View style={styles.container}>
          <Text style={styles.text}>No Items ready</Text>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <Header />
          <MeteorListView
            style={styles.listView}
            collection='items'
            renderRow={this.renderRow.bind(this)}
          />
          <TouchableHighlight
            style={styles.button}
            onPress={this.handleAddItem.bind(this)}
          >
            <Text style={styles.buttonText}>+</Text>            
          </TouchableHighlight>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  button: {
    height: 60,
    width: 60,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: 'red',
    position: 'absolute',
    right: 35,
    bottom: 35,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF4081',
  },
  buttonText: {
    color: 'white',
    fontSize: 30
  },
  listView: {
    flex: 1,
  },
  item: {
    minHeight: 100,
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginTop: 10,
    marginRight: 10,
    marginLeft: 10,
    backgroundColor: '#0097A7',
  },
  itemText: {
    marginLeft: 5,
    color: 'white',
  }
});

export default createContainer(() => {
  Meteor.subscribe('items');
  // return props
  return {
    ready: Meteor.subscribe('items').ready(),
    items: Meteor.collection('items').find(),
  };
}, Home)
