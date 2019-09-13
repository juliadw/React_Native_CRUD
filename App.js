/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
/*
import React, {Component} from'react';
import {StyleSheet, Text, View, StatusBar} from 'react-native';

import Login from './Pages/Login';

export default class App extends Component{
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
        backgroundColor="#00695c"
        barStyle="light-content"
        />
        <Login/>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container :{
    flex: 1,
    backgroundColor:'#009688',
    alignItems:'center',
    justifyContent:'center',
}
});
*/
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, KeyboardAvoidingView} from 'react-native';
import LoginScreen from './Screen/LoginScreen'
import WelcomeScreen from './Screen/WelcomeScreen'
import SignUpScreen from './Screen/SignUpScreen'
import BiodataScreen from './Screen/BiodataScreen'
import {StackNavigator} from 'react-navigation'




export default class App extends React.Component {
  render() {
    return (
      <AppStackNavigator/>
        
    );
  }
} 

const AppStackNavigator = new StackNavigator({
 WelcomeScreen :{screen: WelcomeScreen},
  LoginScreen:{screen: LoginScreen},
  SignUpScreen:{screen: SignUpScreen},
  BiodataScreen:{screen: BiodataScreen},
})


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
 
  },
 
});