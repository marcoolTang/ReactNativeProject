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
} from 'react-native';
import Dimensions from 'Dimensions';
import arrData from './../data';
import personData from './../secondimgdata';
var { width, height, scale } = Dimensions.get('window');
var size = width/750
var hsize = height/1334
export default class MconversationInfo extends Component{
	constructor(){
		super()
		this.state ={
			arr:[]
		}
	}
	sendfun(){
		this.textinput.clear()
		this.setState((state)=>
			({arr:state.arr.concat([this.textinput._lastNativeText])}))
		console.log(this.state.arr)
			
		
	}
	static navigationOptions = {
		header:null,
	}
	componentWillMount(){
		this.item = this.props.navigation.state.params.title;
		
		
	}
	goback(){
		const {goBack} = this.props.navigation
		goBack()
	}
	
	render(){
		
		return(

			<View style = {{flex:1}}>
				<View style={{height:88*size,backgroundColor:'#77428d',flexDirection:'row',paddingLeft:20*size,paddingRight:20*size,justifyContent:'space-between'}}>
					<TouchableNativeFeedback onPress={this.goback.bind(this)} >
						<View style={{flexDirection:'row',alignSelf:'center'}}>
							<Image style={{width:19*size,height:36*size}} source={require('./../../reactimg/smallicon/arrow.png')}/>
							<Text style = {{color:'white'}} >返回</Text>
						</View>
					</TouchableNativeFeedback>
					<Text style={{color:'white',fontSize:36*size,alignSelf:'center',textAlign:'center'}}>{this.item.name}</Text>
					<View style={{alignSelf:'center'}}>
						<Image style={{width:50*size,height:37*size}} source={require('./../../reactimg/smallicon/userfileimg.png')}/>
					</View>
				</View>
				<View style={{flex:1}}>
						<FlatList 
						data = {this.state.arr}
						ketExtractor = {(item,index)=>index}
						renderItem = {({item}) => 
						<View style = {{flexDirection:'row',justifyContent:'flex-end',marginTop:10*size}}>
							<Text style = {{marginRight:10,padding:20*size,backgroundColor:'#e0e0e0',color:'black',borderTopLeftRadius:10,
							borderBottomLeftRadius:10,borderBottomRightRadius:10,maxWidth:(width-100*size-20)}}>{item}</Text>
							<Image style = {styles.iconsize} source = {require('./../../reactimg/person1.png')}/>
						</View>}
						/>
				</View>
				<View style ={{flexDirection:'row',height:88*size,width:width,backgroundColor:'aqua'}}>
						<TextInput 
						ref = {(textinput) => this.textinput = textinput}
						keyExtractor = {(item,index)=>index}
						underlineColorAndroid="transparent"
						style ={{width:500*size,borderRadius:5,borderWidth:1}}
						/>
					<Text onPress = {this.sendfun.bind(this)} style={{alignSelf:'center',textAlign:'center',width:158*size,height:70*size,backgroundColor:'#77428d',color:'white',borderRadius:5}}>发送</Text>
				</View>
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
		width:100*size,
		height:100*size,
		marginRight:10,
	},
	likeimgsize:{
		width:161*size,
		height:160*size,
	}

})