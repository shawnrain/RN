import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer,
  createMaterialTopTabNavigator,
} from 'react-navigation';

export default class WebScreen extends Component<Props> {
  static navigationOptions = {
    headerTitle:'KJL',
    headerTintColor:'#FFFFFF',
    headerTitleStyle:{
      fontWeight:'bold',
      fontSize:23,
    },
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.instructions} onPress = {() => this.props.navigation.goBack()} >WebScreen </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
