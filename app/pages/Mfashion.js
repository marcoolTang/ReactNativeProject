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
import Imglink from './fashionimglink'
var { width, height, scale } = Dimensions.get('window');
var size = width/750
export default class Mfashion extends Component{
	static navigationOptions = {
		header:null,
		tabBarLabel:'觅时尚'
	}
	render(){
		return(
			<View style = {{flex:1}}>
				<View>
					<Image  style={styles.imgsize} source = {require('./../../reactimg/fashionimg/top.png')}/>
				</View>
				<View style={{flexDirection:'row',height:60*size,backgroundColor:'#eeeeee'}}>
					<Text style={{color:'#222222',alignSelf:'center',marginLeft:20*size}}>衣橱</Text>
					<Text style={{color:'#45007f',alignSelf:'center',marginLeft:560*size}}>more...</Text>
				</View>
				<View>
					<FlatList horizontal ={true}
						data ={Imglink}
						style ={{marginLeft:20*size,marginTop:20*size,marginRight:20*size}}
						renderItem = {({item}) => <View style={{marginRight:24*size}}>
						<View>
							<Image style = {styles.bansize} source = {item.imglink}/>
							<Text style ={{color:"#222222",textAlign:'center'}}>{item.imgcontent}</Text>
						</View>
						</View>}

					/>
				</View>
				<View style={{flexDirection:'row',height:60*size,backgroundColor:'#eeeeee',marginTop:40*size}}>
					<Text style={{color:'#222222',alignSelf:'center',marginLeft:20*size}}>鞋柜</Text>
					<Text style={{color:'#45007f',alignSelf:'center',marginLeft:560*size}}>more...</Text>
				</View>
				<View>
					<FlatList horizontal ={true}
						data ={Imglink}
						style ={{marginLeft:20*size,marginTop:20*size,marginRight:20*size}}
						renderItem = {({item}) => <View style={{marginRight:24*size}}>
						<View>
							<Image style = {styles.bansize} source = {item.shoelin}/>
							<Text style ={{color:"#222222",textAlign:'center'}}>{item.shoescon}</Text>
						</View>
						</View>}

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
		width:125*size,
		height:125*size,
	},
	bansize:{
		width:160*size,
		height:160*size,
	}

})