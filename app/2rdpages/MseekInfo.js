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

var { width, height, scale } = Dimensions.get('window');
var size = width/750
var hsize = height/1334
export default class Info extends Component{
	static navigationOptions = {
		header:null,
	}
	componentWillMount(){
		this.item = this.props.navigation.state.params.title;
		console.log(this.item.label)
	}
	clickfun(){
		const {navigate} = this.props.navigation;
		navigate('Mconversationinfo',{title:this.item})
	}
	
	render(){
		const {goBack} = this.props.navigation
		return(
			<View style={{flex:1}}>
				<View>
					<Image style = {styles.imgsize} source = {require('./../../reactimg/ind1.png')}>
						<Text style ={{color:"white",textAlign:'center'}}>我的主页</Text>
						<Text style = {{marginLeft:10,color:'white'}} onPress = {()=>goBack()}> 返回</Text>
					</Image>
				</View>
			<View style={{flexDirection:'row',marginTop:-77*size}}>		
				<View style={{marginLeft:40*size}}>
					<Image style = {styles.iconsize} source ={this.item.headimg}/>
				</View>
				<View style={{marginLeft:16*size,alignSelf :"center"}}>
					<Text style={{fontSize:42*size,color:'white'}}>{this.item.name}</Text>
					<Text style={{fontSize:28*size,color:'#222222',marginTop:15*size}}>{this.item.age}     |     {this.item.city} </Text>
					<Text style={{fontSize:28*size,color:'#222222'}}>{this.item.distance}</Text>
				</View>
				
			</View>
			<Text style={{fontSize:30*size,color:'#222222',marginLeft:40*size,marginTop:10*size}}>{this.item.content}</Text>
			<View style = {{flexDirection:'row',marginTop:40*size}}>
				<View style={{marginLeft:22*size}}>
					<Image style = {styles.likeimgsize} source = {require('./../../reactimg/infoimg/banner1.png')}/>
					<Text style = {{fontSize:12,color:'white',backgroundColor:'#77428d',textAlign:'center'}}>相册(8张)</Text> 
				</View>
				<View style={{marginLeft:22*size}}>
					<Image style = {styles.likeimgsize} source = {require('./../../reactimg/infoimg/banner2.png')}/>
					<Text style = {{fontSize:12,color:'white',backgroundColor:'#77428d',textAlign:'center'}}>喜欢(10件)</Text> 
				</View>
				<View style={{marginLeft:22*size}} >
					<Image style = {styles.likeimgsize} source = {require('./../../reactimg/infoimg/banner3.png')}/>
					<Text style = {{fontSize:12,color:'white',backgroundColor:'#77428d',textAlign:'center'}}>想买(24件)</Text> 
				</View>
				<View style={{marginLeft:22*size}}>
					<Image style = {styles.likeimgsize} source = {require('./../../reactimg/infoimg/banner4.png')}/>
					<Text style = {{fontSize:12,color:'white',backgroundColor:'#77428d',textAlign:'center'}}>礼物(107个)</Text> 
				</View>
			</View>
			<View style={{flexDirection:'row',height:60*size,backgroundColor:'#eeeeee',marginTop:35*size}}>
				<Text style={{color:'#222222',alignSelf:'center',marginLeft:20*size}}>她的资料</Text>
				<Text style={{color:'#45007f',alignSelf:'center',marginLeft:500*size}}>more...</Text>
			</View>
			<View style = {{flex:1,marginLeft:20*size,marginRight:20*size,marginTop:20*size}}>
				<FlatList 
				keyExtractor={(item, index) => index}

				horizontal = {true}
				data = {this.item.label}
				renderItem = {({item})=><View style = {{marginRight:58*size}}>
					<Text style = {{fontSize:12,color:'#77428d',borderColor:'#77428d',borderRadius:16,borderWidth:1,paddingLeft:30*size,paddingRight:30*size,paddingTop:15*size,paddingBottom:15*size,}}>{item.key}</Text>
					</View>}
				/>
			</View>
			<View style = {styles.bottom}>
				<Text style= {styles.bottom_text} onPress = {this.clickfun.bind(this)}>
					和她聊天
				</Text>
				<Text style= {styles.bottom_text}>
					加为好友
				</Text>
				<Text style= {styles.bottom_text}>
					赠送礼物
				</Text>
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
		width:150*size,
		height:150*size,
	},
	likeimgsize:{
		width:161*size,
		height:160*size,
	},
	bottom:{
		flexDirection:'row'
	},
	bottom_text:{
		width: 250*size,
		height:80*size,
		backgroundColor:'#45007f',
		color:"white",
		textAlign:'center',
		textAlignVertical :'center',
		marginRight:5*size,

	}

})