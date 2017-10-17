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
import Mdaily from './ranktopnav/Mdaily';
import Mmonthly from './ranktopnav/Mmonthly';
import Mweekly from './ranktopnav/Mweekly';
import Mtotal from './ranktopnav/Mtotal';
var { width, height, scale } = Dimensions.get('window');
var size = width/750;

const Topnav = TabNavigator({
  Mdaily: {
    screen: Mdaily,
  },
  Mmonthly: {
    screen: Mmonthly,
  },
  Mweekly: {
    screen: Mweekly,
  },
  Mtotal: {
    screen:Mtotal,
  },
}, {
  tabBarPosition: 'top',
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: '#e91e63',
    labelStyle:{
      fontSize:25*size,
    },
    style:{
    height:100*size,
    backgroundColor:'#77428d',

  },
  iconStyle:{
    position:'absolute',
    height:98*size,
  },
  },

});

export default Topnav;

