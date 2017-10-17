/**
 * author Zhenzhong Tang
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Image,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
  Picker,
  ProgressBarAndroid,
  Slider,
} from 'react-native';
import {StackNavigator,TabNavigator,NavigationActions} from 'react-navigation';
//引入一级页面
import Main from './app/main';
import Mseek from './app/pages/Mseek';
import Mconversation from './app/pages/Mconversation';
import Mfashion from './app/pages/Mfashion';
import Mrank from './app/pages/Mrank';
import Mmanage from './app/pages/Mmanage';
import Cities from './app/pages/city';
import Initial from './app/initialpic';
import Mdaily from './app/pages/ranktopnav/Mdaily';
import Mmonthly from './app/pages/ranktopnav/Mmonthly';
import Mweekly from './app/pages/ranktopnav/Mweekly';
import Mtotal from './app/pages/ranktopnav/Mtotal';


//引入二级页面
import Info from './app/2rdpages/MseekInfo';
import Talkinfo from  './app/2rdpages/MconversatInfo';


//引入尺寸
import Dimensions from 'Dimensions';
var { width, height, scale } = Dimensions.get('window');
var size = width/750

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
    height:66*size,
    backgroundColor:'#77428d',

  },
 
  },

});


const BottomNav = TabNavigator({
  Mseek: {
    screen: Mseek,
  },
  Mconversation: {
    screen: Mconversation,
  },
  Mfashion: {
    screen: Mfashion,
  },
  Topnav: {
    screen:Topnav,
  },
  Mmanage: {
    screen: Mmanage,
  },
 
}, {
  tabBarPosition: 'bottom',
  animationEnabled: false,
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


const reactNativeApp = StackNavigator({
  Initial:{screen:Initial},
  Main:{screen:Main},
  Index :{screen:BottomNav},
  Divpage :{screen:Info},
  Selectcity:{screen:Cities},
  Mconversationinfo:{screen:Talkinfo},
  
  
})

//全页面继承点击两次BACK退出程序,源生方面在Main.js
const defaultGetStateForAction = reactNativeApp.router.getStateForAction;
reactNativeApp.router.getStateForAction = (action, state) => {
  if (state && action.type === NavigationActions.BACK ) {
    if(action.key){
      return defaultGetStateForAction(action, state);
    }
    return null;
 }
  return defaultGetStateForAction(action, state);
};

AppRegistry.registerComponent('reactNativeApp', () => reactNativeApp);


