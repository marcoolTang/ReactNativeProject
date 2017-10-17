import React, { Component } from 'react';
import {StackNavigator} from "react-navigation";
import {AsyncStorage} from "react-native"
import Dimensions from 'Dimensions';
var { width, height, scale } = Dimensions.get('window');
const size = width/750
const sizeY = height/1300
import {
	View,
	Text,
	TextInput,
	StyleSheet,
	Image,
	Button,
	FlatList,
	TouchableNativeFeedback,
} from "react-native";
const styles = StyleSheet.create({
	top:{
		height:88*sizeY,
		paddingLeft:20*size,
		paddingRight:20*size,
		flexDirection:"row",
		backgroundColor:"#77428d",
	},
	})
class List extends Component{
	render(){
		return (
			<TouchableNativeFeedback onPress={this.props.click.bind(this)}>
				<View style={{height:100*sizeY,flexDirection:"row",borderTopWidth:1,borderColor:"#ccc",borderStyle:"solid"}}>
					<Image source={this.props.img} style={{marginLeft:20*size,marginRight:20*size,alignSelf:"center",width:50*size,height:50*size,borderRadius:5*size}} />
					<Text style={{fontSize:36*size,alignSelf:"center",color:"black",height:50*size,width:620*size}}>{this.props.title}</Text>
					<Image source={require("./../../reactimg/smallicon/jiantou1.png")} style={{width:20*size,height:36*sizeY,alignSelf:"center"}} />
				</View>
			</TouchableNativeFeedback>
			)
	}
}


export default class Part4 extends Component{
	static navigationOptions = (
		{
			header:null,
			tabBarLabel:"觅管理",
		}
	)
	me(){
		this.props.navigation.navigate("MyMsg")
	}
	render(){
		return(
				<View>
					<View style={styles.top}>
						<Text onPress={()=>this.props.navigation.goBack()} style={{flex:1}}></Text>
						<Text style={{color:"white",flex:3,textAlign:"center",alignSelf:"center"}}>觅管理</Text>
						<Text style={{flex:1,alignSelf:"center"}}></Text>
					</View>
					<View style={{height:112*sizeY,padding:20*size}}>
						<TextInput underlineColorAndroid="transparent"  style={{fontSize:24*size,textAlign:"center",borderRadius:5*size,backgroundColor:"white"}} placeholder="输入搜索关键字" />
					</View>
					<View style={{backgroundColor:"white",borderBottomWidth:1,borderColor:"#ccc",borderStyle:"solid"}}>
						<List click={this.me.bind(this)} img={require("./../../reactimg/smallicon/1.png")} title="我的首页" />
						<List click={function(){}} img={require("./../../reactimg/smallicon/2.png")} title="谁看过我" />
						<List click={function(){}} img={require("./../../reactimg/smallicon/3.png")} title="账号切换" />
					</View>
					<View style={{marginTop:20*size,backgroundColor:"white",borderBottomWidth:1,borderColor:"#ccc",borderStyle:"solid"}}>
						<List click={function(){}} img={require("./../../reactimg/smallicon/4.png")} title="官方活动" />
						<List click={function(){}} img={require("./../../reactimg/smallicon/5.png")} title="充值银豆" />
						<List click={function(){}} img={require("./../../reactimg/smallicon/6.png")} title="道具商城" />
						<List click={function(){}} img={require("./../../reactimg/smallicon/7.png")} title="礼物通知" />
					</View>
					<View style={{marginTop:20*size,backgroundColor:"white",borderBottomWidth:1,borderColor:"#ccc",borderStyle:"solid"}}>
						<List click={function(){}} img={require("./../../reactimg/smallicon/8.png")} title="系统设置" />
					</View>
					<Text onPress={()=>{AsyncStorage.removeItem("user");this.props.navigation.navigate("Main");}} style={{marginTop:30*sizeY,textAlign:"center",fontSize:36*size,color:"#ccc"}}>退出登录</Text>
				</View>
			)
	}
}