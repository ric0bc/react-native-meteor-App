import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';

export default class DetailView extends Component {

	render(){

		return(
			<View style={styles.container}>
				<Text style={styles.text}>DetailView</Text>
				<Text>{this.props.name}</Text>
			</View>
		)
	}

}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignSelf: 'center'
	},
	text: {
		fontSize: 24
	}, 
	subText: {

	}
});