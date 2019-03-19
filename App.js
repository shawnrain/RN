/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer,
  createMaterialTopTabNavigator,
} from 'react-navigation';
import HomePage from './HomePage';
import FindMe from './FindMe';
import WebScreen from './WebScreen';

const CreateTab = createMaterialTopTabNavigator({
  Home: {
    screen: HomePage,
    navigationOptions: () => ({
      tabBarLabel: '首页',
      headerTitle:'HomePage class',
    })
  },
  Find: {
    screen: FindMe,
    navigationOptions: () => ({
      tabBarLabel: '发现',
    })
  }
}, {
  initialRouteName: 'Home',
  tabBarPosition: 'bottom',
  lazy: true,
  swipeEnabled: false,
  tabBarOptions: {
    activeTintColor: 'red',
    inactiveTintColor: '#999999',
    style: {
      backgroundColor: '#fff',
    },
  }
})

const StacksOverTabs = createStackNavigator(
  {
    Root : CreateTab,
    webSc : WebScreen,
    Home : HomePage,
  },
  {
      initialRouteName:'Root',
       defaultNavigationOptions:{
        headerStyle:{
          backgroundColor:'#658415',
        },
        headerTintColor:'#FF0000',
        headerTitleStyle:{
          fontWeight : 'bold',
        },
      }
  },
);

const StacksOverTab = createAppContainer(StacksOverTabs)

export default class App extends Component {
  render() {
    return (
      <StacksOverTab />
    );
  }
}
