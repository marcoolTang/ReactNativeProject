import React,{Component} from 'react';
import {StackNavigator} from 'react-native';
import{
	View,
	Text,
	TextInput,
	Image,
	StyleSheet,
	Button,
	BackHandler,
	ToastAndroid,
	AsyncStorage,
} from 'react-native'
import Dimensions from 'Dimensions';
import arrData from './data'
var { width, height, scale } = Dimensions.get('window');
var size = width/750
var now = this.lastBackPressed

export default class Main extends Component{
	
	static navigationOptions ={
		headerLeft:null,
		headerTitle:'用户登录',
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
	login(){

		let len = arrData.length
			for(var i = 0;i <len;i++){
				if(this._user._lastNativeText == arrData[i].username){
					if(this._pwd._lastNativeText == arrData[i].userpwd){
						AsyncStorage.setItem('user','this._pwd._lastNativeText',(error)=>{
           					 if (error) {
                				alert('存储失败');
           					 } else  {
           					 	const {navigate} = this.props.navigation
								navigate ('Index')
           					 }
       					 });
					
					}
					else{
						alert('密码错误')
					}
				}
				
			}	
	}
	
	componentWillMount(){
    	BackHandler.addEventListener('hardwareBackPress',this._onBackAndroid);    
  	}
  	componentWillUnmount(){
    	BackHandler.addEventListener('hardwareBackPress',this._onBackAndroid);
  	}
  _onBackAndroid=()=>{
   
    let timer = new Date().getTime();
    if(timer-now <2000){
      return false;
    }
    now = timer;
    ToastAndroid.show('再点击一次退出应用',ToastAndroid.SHORT);
    return true

  }
	render(){
		
		return(
			<View>
				<View  style = {styles.banner}>
					<Image style={styles.imgsize} source = {require('.././reactimg/banner.png')}/>
				</View>
				<View style ={styles.bottom}>
					<Text style={{alignSelf:'center',color:'black'}}>账号</Text>
					<TextInput ref ={(user)=>this._user = user} style ={styles.inputstyle} placeholder={'手机号/用户名/邮箱'} underlineColorAndroid="transparent"/>
				</View>
				<View style ={styles.bottom}>
					<Text style={{alignSelf:'center',color:'black'}}>密码</Text>
					<TextInput ref ={(pwd)=>this._pwd = pwd} style ={styles.inputstyle} placeholder={'输入您的密码'} underlineColorAndroid="transparent" secureTextEntry = {true}/>
				</View>
				<Text style={{color:'#77428d',textAlign:'right'}}>忘记密码？</Text>
				<View  style={{marginTop:106*size,marginLeft:20*size,marginRight:20*size}}>
					<Button onPress = {this.login.bind(this)} style = {styles.button} title="登录" color="#77428d" />
					
				</View>
				<View style={{marginTop:20*size,marginLeft:20*size,marginRight:20*size	}}>
					
					<Button onPress = {this.login.bind(this)} style = {styles.button} title="注册" color="#77428d" />
				</View>
				<View style={{marginTop:98*size}}>
					<Text style={{alignSelf:'center'}}>第三方合作</Text>
				</View>
				<View style={{flexDirection:'row',justifyContent:'center',marginTop:28*size}}>
					<Image style={styles.footimg} source = {require('.././reactimg/wechat.png')}/>
					<Image style={{width:100*size,height:100*size,marginLeft:95*size,marginRight:95*size}} source = {require('.././reactimg/QQ.png')}/>
					<Image style={styles.footimg} source = {require('.././reactimg/Webo.png')}/>
				</View>

			</View>
			)
	}
}

const styles = StyleSheet.create({
	banner:{
		height:385*size,
		backgroundColor:'aqua'
	},
	imgsize:{
		height:270*size,
		width:270*size,
		marginLeft:240*size,
		marginTop:65*size
	},
	fatherinput:{
		borderStyle:"solid",
		backgroundColor:'red',
		
	},
	inputstyle:{
		textAlign:'center',
		alignSelf:'center',
		width:644*size,
		marginTop:5

	},
	button:{
		marginBottom:20,
	},
	footimg:{
		width:100*size,
		height:100*size
	},
	bottom:{
		marginTop:10,
		borderStyle:'solid',
		borderColor:'#ccc',
		borderBottomWidth:1,
		flexDirection:'row',
		marginLeft:20*size,
		marginRight:20*size,
	}
	
})