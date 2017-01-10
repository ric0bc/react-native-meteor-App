import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image
} from 'react-native';

export default class Header extends Component {

	render(){
		return (
			<View style={styles.headerContainer}>
				<View style={styles.nav}>
					<View>
						<Image
							style={styles.navImage}
							source={require('../../Images/clock.png')} 
						/>
						<View style={styles.navBar}></View>
					</View>
					<View>
						<Image
							style={styles.navImage}
							source={require('../../Images/chat.png')} 
						/>
						<View style={styles.navBar}></View>
					</View>
					<View>
						<Image
							style={styles.navImage}
							source={require('../../Images/up-arrow.png')} 
						/>
						<View style={styles.navBar}></View>
					</View>
					<View>
						<Image
							style={styles.navImage}
							source={require('../../Images/gear-option.png')} 
						/>
						<View style={styles.navBar}></View>
					</View>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	headerContainer: {
		height: 100,
		backgroundColor: '#2196F3',
	},
	nav: {
		flex: 1,
		bottom: 5,
		marginRight: 20,
		marginLeft:  20,
		flexDirection: 'row',
		alignItems: 'flex-end',
		justifyContent: 'space-between',
	},
	navImage: {
		height: 35,
		width: 35,
	},
	navBar: {
		height: 5,
		bottom: -5,
		backgroundColor: 'black',
	}
});