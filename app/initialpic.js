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
	TouchableNativeFeedback,
	AsyncStorage,
} from 'react-native';
import Dimensions from 'Dimensions';
var { width, height, scale } = Dimensions.get('window');
var size = width/750

export default class Initialpic extends Component{
	static navigationOptions ={
		header:null,
	}
	componentDidMount(){
		const {navigate} = this.props.navigation
		 
		AsyncStorage.getItem('user').then(function(user){
			if(user){
				
				navigate('Index')
			}
			else{
				alert(1)
				this.timer = setTimeout(()=>{navigate('Main')},1000)
			}
		})
		

	}
	componentWillMount(){
		
	}
	componentWillUnmount(){
		this.timer && clearTimeout(this.timer);
	}
	render(){
		return(
			<Image style={{width:width,height:height}} source = {require('./../reactimg/timg.png')}/>
			)
	}

}