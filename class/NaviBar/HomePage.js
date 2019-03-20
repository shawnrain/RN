import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button} from 'react-native';
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer,
  createMaterialTopTabNavigator,
} from 'react-navigation';
import WebScreen from './WebScreen';
export default class HomePage extends Component<Props> {

  static navigationOptions = {
    headerTitle: '墨级',
    title:'MOJI',
  };
  _bindPus = () => {
    this.props.navigation.navigate('webSc');
    /* 抽屉导航*/
    /*this.props.navigation.openDrawer('webSc');*/
  }
  render() {
    return (
      <View style={styles.container}>
        <Button onPress = {this._bindPus}
        title = "dianji"/>
        <Text style={styles.instructions}>Home Page View</Text>
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
