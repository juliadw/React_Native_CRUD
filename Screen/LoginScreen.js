import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, KeyboardAvoidingView,Button,StatusBar,TextInput,TouchableOpacity} from 'react-native';
import { StackNavigator } from 'react-navigation'



class LoginScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
          <StatusBar
          barStyle="light-content"
          />
          <View style={styles.logoContainer}>
          <TextInput
          placeholder="Username or Email"
          placeholderTextColor= "rgba(255,255,255,0.5)"
          returnKeyType="next"
          OnSubmitEditing={() => this.passwordInput.focus()}
          KeyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.input}
          />

          <TextInput
          placeholder="Password"
          placeholderTextColor= "rgba(255,255,255,0.5)"
          returnKeyType="go"
          secureTextEntry
          style={styles.input}
          ref={(input) =>this.passwordInput = input}
          />
          

          <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.buttonText} onPress={()=>this.props.navigation.navigate('BiodataScreen')}> Login</Text>
          </TouchableOpacity>
          </View>
          </View>
    );
  }
} 

export default LoginScreen;


const styles = StyleSheet.create({
 
  container: {
      alignItems: 'center',
      padding: 30,
      backgroundColor:'#009688',
      flex:1,
  },
  input: {
    height:40,
    width:320,
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginBottom:20,
    color: '#ffffff',
    textAlign: 'center',
    paddingHorizontal:50,
    borderRadius: 5,
  },
  title:{
    fontSize:30,
    fontWeight:'bold',  
    color: '#FFF',
    marginTop: 100,
    width:160,
    textAlign: 'center',
    opacity: 0.9,
    marginVertical: 25
  },
  buttonContainer:{
    width:320,
    backgroundColor:'#00695c',
    paddingVertical:15,
    height:50,
    borderRadius: 10,
  },

  buttonText:{
    textAlign:'center',
    color: '#FFFFFF',
    fontWeight: '700',
  }
 
});
