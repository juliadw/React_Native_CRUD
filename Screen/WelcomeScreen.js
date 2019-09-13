import React, {Component} from 'react';
import {
  Platform, 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  KeyboardAvoidingView, 
  Button, 
  StatusBar, 
  TextInput, 
  TouchableOpacity 
} from 'react-native';
import {StackNavigator} from 'react-navigation'

class WelcomeScreen extends Component{
  render() {
    return (
     <View style={styles.container}>
      <View style={styles.logoContainer}>
      <StatusBar
              backgroundColor="#00695c"
              barStyle="light-content"
            />
       
       <Image
       style={styles.logo}
       source={require('E:/Telkom_Scools/XI_RPL_3/KK4-B_pak_AIC\RN\project_login/Images/Logo.png')}
       />

        <Text style={styles.title}>Welcome to Julia App</Text>
        </View>
        <View style={styles.formConatiner}>
        
        </View>     
      
     <TouchableOpacity style={styles.buttonContainer}>


          <Text  onPress={()=>this.props.navigation.navigate('LoginScreen')} style={styles.buttonText}> Login</Text>

          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonCont}>


          <Text  onPress={()=>this.props.navigation.navigate('SignUpScreen')} style={styles.buttonText} > SignUp</Text>

          </TouchableOpacity>


        </View> 
    	
    );
  }
} 

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#009688',
  },
  logoContainer:{
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'

  },
  logo:{
    width:220,
    height:220
  },  
  title:{
    fontSize:20,
    fontWeight:'bold',  
    color: '#FFF',
    marginTop: 10,
    width:160,
    textAlign: 'center',
    opacity: 0.9
  },
  instructions: {
    textAlign: 'center',
    marginBottom: 5,
  },
  buttonContainer:{
    backgroundColor:'#00695c',
    paddingVertical:15,
    height:50,
    width:300,
    marginBottom:30,
    borderRadius: 10,
  },
  buttonCont: {
    backgroundColor:'#00695c',
    paddingVertical:15,
    height:50,
    width:300,
    marginBottom:80,
    borderRadius: 10,
  },
  buttonText:{
    textAlign:'center',
    color: '#FFFFFF',
    fontWeight: '700'
  },
});