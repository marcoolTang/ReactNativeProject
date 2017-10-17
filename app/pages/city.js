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
	SectionList,
	Header,
} from 'react-native';
import Dimensions from 'Dimensions';
import CityData from './cityData';
var { width, height, scale } = Dimensions.get('window');
var size = width/750
export default class Mrank extends Component{
	static navigationOptions = {
		header:null
	}
	clickfun(){
		const {goBack} = this.props.navigation
		goBack()
	}
	render(){
		return(
			<View style={{flex:1}}>
				<View style={{flexDirection:'row',height:88*size,backgroundColor:'#77428d'}}>
					<Text onPress = {this.clickfun.bind(this)}style ={{flex:1,alignSelf:'center',marginLeft:10,color:"white"}}> 返回 </Text>
					<Text style={{flex:3,alignSelf:'center',textAlign:'center',color:"white"}}>城市选择</Text>
					<Text style ={{flex:1}}></Text>
				</View>	
				<SectionList
					sections = {CityData}
					keyExtractor ={(item,index)=> index }
					ItemSeparatorComponent = {()=> <View style ={{height:1,backgroundColor:'#ccc'}}></View>}
  					renderItem={({item}) => <View>
  					<Text style = {{padding:20*size}}>{item.title}</Text>
  					</View>}
 					renderSectionHeader={({section}) => <Text style = {{padding:20*size,color:'#222222',backgroundColor:'#eeeeee'}}>{section.key}</Text>}
  					
					/>
		
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