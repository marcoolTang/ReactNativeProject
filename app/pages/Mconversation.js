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
import Conversationdata from './Mconversationdata'
var { width, height, scale } = Dimensions.get('window');
var size = width/750
export default class Mmanage extends Component{
	static navigationOptions = {
		headerLeft :null,
		tabBarLabel:'觅会话',
		headerTitle:'觅会话',
		headerStyle:{
			backgroundColor:"#77428d",
			height:88*size
		},
		headerTitleStyle:{
			fontSize:16,
			color:'white',
			alignSelf:'center'
		}

	}
	clickfun(item){
		
		const {navigate} = this.props.navigation;
		navigate('Mconversationinfo',{title:item})
	}
	render(){
		return(
			<View style={{flex:1}}>
				<FlatList 
						keyExtractor={(item, index) => index}
						data ={Conversationdata}
						ItemSeparatorComponent = {()=><View style ={{height:1,backgroundColor:'#ccc',marginLeft:20*size,marginRight:20*size,}}></View>}
							renderItem = {({item}) => 
								 <TouchableNativeFeedback onPress ={this.clickfun.bind(this,item)}>
									<View style= {{flexDirection:'row',height:175*size,}}>
										<View style={{alignSelf:'center',marginLeft:20*size}}>
											<Image style = {styles.iconsize} source = {item.headimg} />
										</View>
										<View style= {{alignSelf:'center',marginLeft:20*size,}}>
											<Text>{item.name}</Text>
											<Text>{item.status}   {item.age}  |  {item.city}</Text>
											<Text>{item.content}</Text>
										</View>
									</View>
								</TouchableNativeFeedback>
					}
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
		width:125*size,
		height:125*size,
	},
	likeimgsize:{
		width:161*size,
		height:160*size,
	}

})