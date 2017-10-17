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
import _ from 'lodash';
import arrData from "./../../data";
var arr1 = _.cloneDeep(arrData)
var { width, height, scale } = Dimensions.get('window');
var size = width/750
export default class Mdaily extends Component{
	static navigationOptions = {
		headerLeft:null,
		headerTitle:'觅排行',
		tabBarLabel:'每日排行',
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
		var num = 0 
		for(var i = 0;i<arr1.length-1;i++){
			for(var j=0;j<arr1.length-i-1;j++){
				if(arr1[j].charm<=arr1[j+1].charm){
					num = arr1[j]
					arr1[j] = arr1[j+1]
					arr1[j+1] = num
				}
			}
		}
		for(var i =0;i<arr1.length;i++){
			arr1[i].ranknum = i+1

		}
		
	

		return(
			<View style={{flex:1}}>
				<View>
					<FlatList 

						data = {arr1}
						renderItem ={({item})=><View style = {{flexDirection:'row',padding:20*size}}>
							{item.ranknum<=3?<Image style = {styles.guan} source ={require('./../../../reactimg/smallicon/guan.png')} >
								<Text style = {styles.numposition}>{item.ranknum}</Text>
							</Image>:<Image style={styles.circlestyle} source = {require('./../../../reactimg/smallicon/circle.png')}>
									<Text style={styles.circletextstyle}>{item.ranknum}</Text>
							</Image>}
							
							<View>
								<Image style ={styles.iconsize} source ={item.headimg}/>
							</View>
							<View style={{marginLeft:20*size}}>
								<Text>{item.name}</Text>
								<Text>{item.age}  |  {item.city}</Text>
								<Text>{item.content}</Text>
							</View>
							<View style = {{flexDirection:'row',position:'absolute',marginTop:40*size,right:20*size}}>
								<Text>{item.charm}</Text>
								<Image style ={styles.firesize} source ={require('./../../../reactimg/smallicon/fire.png')}/>
							</View>
						</View> }
					/>
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
		width:120*size,
		height:120*size,
	},
	likeimgsize:{
		width:161*size,
		height:160*size,
	},
	firesize:{
		width:31*size,
		height:36*size,
	},
	guan:{
		width:54*size,
		height:43*size,
		alignSelf:'center',
		marginRight:16*size,
	},
	numposition:{
		alignSelf:'center',
		marginTop:8*size,
		color:'white',
	},
	circlestyle:{
		width:50*size,
		height:50*size,
		alignSelf:'center',
		marginRight:20*size,
		
	},
	circletextstyle:{
		color:'white',
		textAlign:'center',
		marginTop:2,
	},


})