import React,{Component} from 'react';
import {StackNavigator,TabNavigator} from 'react-native';
import{
	View,
	Text,
	TextInput,
	Image,
	StyleSheet,
	Button,
	FlatList,
} from 'react-native';
import Dimensions from 'Dimensions';
var { width, height, scale } = Dimensions.get('window');
var size = width/750
export default class Mmonthly extends Component{
	static navigationOptions = {
			headerLeft:null,
		headerTitle:'觅排行',
		tabBarLabel:'总排行',
		headerStyle:{
			backgroundColor:"#77428d",
			height:66*size,
		},
		headerTitleStyle:{
			fontSize:16,
			color:'white',
			alignSelf:'center',
		}
	}
	render(){
		return(
			<View style={{flex:1}}>
				<Text>sfsf1241412</Text>
			</View>
			)
	}
}

const styles = StyleSheet.create({
	imgsize:{
		height:561*size,
		width:750*size,
	},
	iconsize:{
		width:150*size,
		height:150*size,
	},
	likeimgsize:{
		width:161*size,
		height:160*size,
	}

})