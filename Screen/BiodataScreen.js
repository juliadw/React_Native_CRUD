import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, KeyboardAvoidingView,Button,StatusBar,TextInput,TouchableOpacity} from 'react-native';
import { StackNavigator } from 'react-navigation';

class BiodataScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content"/>
        <Text style={styles.biodata} >BIODATA</Text>
          <View style={styles.logoContainer}>
            <Text style={styles.identitas}>Nama      : Julia Dwiana</Text>
            <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.buttonText} onPress={()=>this.props.navigation.navigate('WelcomeScreen')}>Exit</Text>
            </TouchableOpacity>
          </View>
        </View>
    );
  }
} 

export default BiodataScreen;


const styles = StyleSheet.create({
  biodata:{
    fontSize: 30,
    fontWeight:"700",
    paddingVertical:15
  },
  tararam:{
    fontSize: 25,
    paddingVertical:15,
    fontWeight:"300"
  },
  identitas:{
    fontSize:20,
    paddingVertical:7
  },
  container: {
    padding: 30,
    backgroundColor:'#009688',
    flex: 1,
    alignItems: 'center',
  },
  buttonContainer:{
    backgroundColor:'#00695c',
    paddingVertical:15,
    marginBottom:10,
    width: 300,
    justifyContent: 'flex-end',
    fontSize:20
  },
  buttonText:{
    textAlign:'center',
    color: '#FFFFFF',
    fontWeight: '700', 
  },
  logo:{
    width:150,
    height:150,
    paddingVertical:15 
  },  
  logoContainer:{
    alignItems: 'center',
    justifyContent: 'center'
  },
});
