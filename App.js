/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button} from 'react-native';
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer,
  createMaterialTopTabNavigator,
} from 'react-navigation';
import HomePage from './class/NaviBar/HomePage';
import FindMe from './class/NaviBar/FindMe';
import WebScreen from './class/NaviBar/WebScreen';

const CreateTab = createBottomTabNavigator({
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
// 设置 title
CreateTab.navigationOptions = ({navigation}) => {
  const { routeName } = navigation.state.routes[navigation.state.index];
  const headerTitle = routeName;
  return {
      headerTitle,
  };
};

const StacksOverTabs = createStackNavigator(
  {
    Root : CreateTab,
    webSc : WebScreen,
    Home : HomePage,
    presentL : FindMe,
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
        headerRight:(
            <Button onPress = {() => alert('HKJKJD')} title = "Btn" color = '#FF0000'/>
        ),
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
