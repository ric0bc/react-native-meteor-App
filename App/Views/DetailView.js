import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image
} from 'react-native';

export default class DetailView extends Component {

	goBack(){
	    this.props.navigator.pop();
  	}


	render(){

		return(
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
		              
		            >
		              <Image
		                source={require('../Images/send-button.png')}
		                style={{ height: 35, width: 35, marginRight: 15}}
		              />
		            </TouchableHighlight>
		          </View>
		        </View>
				<View style={styles.detailPost}>
					<Text style={styles.text}>{this.props.name}</Text>
				</View>
			</View>
		)
	}

}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	text: {
		color: 'white',
		marginLeft: 15,
	}, 
	header: {
	   minHeight: 60,
	   backgroundColor: '#2196F3',
	   justifyContent: 'center'
	},
	detailPost: {
		backgroundColor: '#0097A7',
		minHeight: 100,
		margin: 10,
		justifyContent: 'center',
	},
});
