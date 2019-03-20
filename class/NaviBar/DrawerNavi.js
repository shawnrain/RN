import React from 'react';
import { Button, Image, View, Text } from 'react-native';
import { createStackNavigator, createAppContainer,createDrawerNavigator } from 'react-navigation';

import HomePage from './HomePage';
import WebScreen from './WebScreen';
import FindMe from './FindMe';
/* 抽屉导航*/
const DrawerNavi = createDrawerNavigator(
  {
  Home :{
    screen : HomePage,
  },
  webSc : {
    screen : WebScreen,
  },
  Find :{
    screen : FindMe,
  },
  }
);

const MyApp = createAppContainer(DrawerNavi);
export default class App extends React.Component {
  render(){
    return (
      <MyApp />
    );
  }
}
