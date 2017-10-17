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
import arrData from './../data'
var { width, height, scale } = Dimensions.get('window');
var size = width/750
import _ from 'lodash';
var arr = _.cloneDeep(arrData)
export default class Mseek extends Component{
	static navigationOptions = {
		header:null,
		tabBarLabel:'觅觅寻',
	}
	constructor(){
		super()
		this.state ={
		bol:false
		}
		
	}

	separator(){
		return <View style ={{height:2,backgroundColor:'#ccc'}}></View>
	}

	freshfun(){
		this.setState({
			bol:true
		})
		setTimeout(()=>this.setState({
			bol:false
		}),2000)
	}
	rollfun(){//回到底部
		this.flatlist.scrollToEnd()
	}
	clickfun(item){
		console.log(item)
		const {navigate} = this.props.navigation
		 navigate('Divpage',{title:item,
		 	secondimg:item.myid})
	}
	selectcityfun(){
		const {navigate} = this.props.navigation
		navigate('Selectcity')
	}

	render(){
		
		return(
			<View style ={{flex:1}}>
				<View>
					<Image style = {styles.imgsize}source = {require('./../../reactimg/ind1.png')}>
						<Text onPress = {this.selectcityfun.bind(this)} style ={{textAlign:'right',color:"white",marginRight:5,marginTop:10}}>选择城市</Text>
						<Text style ={{color:"white",fontSize:46*size}}>2016.11 第五期</Text>
						<Text style ={{color:"white",fontSize:70*size}}>封面女郎</Text>
					</Image>
				</View>
				<View style = {{flex:1}}>
					<FlatList 
					ref ={(flatlist)=>this.flatlist = flatlist}
					refreshing = {this.state.bol}
					onRefresh = {this.freshfun.bind(this)}
					
					ItemSeparatorComponent = {()=> <View style ={{height:1,backgroundColor:'#ccc',marginLeft:20*size,marginRight:20*size,}}></View>}
					data = {arr}
					renderItem = {({item}) => 
					   <TouchableNativeFeedback onPress ={this.clickfun.bind(this,item)}>
					<View style={{flexDirection:'row',marginLeft:20*size,marginRight:20*size,height:173*size}}>
						<View style = {{alignSelf :"center"}}>
							<Image style = {styles.iconsize}source = {item.headimg}/>
						</View>
						<View style={{marginLeft:16*size,alignSelf :"center"}}>
							<Text style={{fontSize:36*size,color:'#222222'}}>{item.name}</Text>
							<Text style={{fontSize:24*size,color:'#222222'}}>{item.age} | {item.city} | {item.distance}</Text>
							<Text style={{fontSize:24*size,color:'#222222'}}>{item.content}</Text>
						</View>
					</View> 
					</TouchableNativeFeedback>} />
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
	}

})