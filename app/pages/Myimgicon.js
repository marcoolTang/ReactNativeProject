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

export default class Myimgicon extends Component{
	static navigationOptions = {
		header:null,
		tabBarLabel:'觅会话',
		tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('./../../reactimg/nirrow.png')}
      />
    ),
  };
	}
	render(){
		return(
			<Text>觅时尚</Text>
			)
	}
}