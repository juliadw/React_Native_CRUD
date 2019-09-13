import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TouchableOpacity,StatusBar,TextInput} from 'react-native';
import {StackNavigator} from 'react-navigation'


class SignUpScreen extends Component{
  render() {
    return (
     <View style={styles.container}>
        <Text style={styles.title}>Sign Up</Text>
          <StatusBar
          barStyle="light-content"
          />
          <View style={styles.logoContainer}>
          <TextInput
          placeholder="Email"
          placeholderTextColor= "rgba(255,255,255,0.5)"
          returnKeyType="next"
          OnSubmitEditing={() => this.passwordInput.focus()}
          KeyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.input}
          />

           <TextInput
          placeholder="Username"
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
          <Text style={styles.buttonText} onPress={()=>this.props.navigation.navigate('LoginScreen')}>Submit</Text>
          </TouchableOpacity>
      
          </View>
          </View>
    );
  }
} 

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#00695c'
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
    backgroundColor:'#009688',
    paddingVertical:15,
    height:50,
    width:300,
    borderRadius: 10,
    marginBottom:80,

  },
  buttonCont: {

  },

  buttonText:{
    textAlign:'center',
    color: '#FFFFFF',
    fontWeight: '700'
  },
  input:{
    height:40,
    width:300,
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginBottom:20,
    color: '#ffffff',
    textAlign: 'center',
    paddingHorizontal:50,
    borderRadius: 5,
  } 
  
});