import React, {Component} from 'react';
import {StyleSheet, Text,View, TouchableOpacity} from 'react-native';
import Logo from '../Components/Logo';
import Form from '../Components/Form';
export default class Login extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Logo/>
                <Text style={styles.textLogin}>Login</Text>
                <Form/>
                <View style={styles.textSup}>
                    <Text style={styles.textContainer}>Don't have any account</Text>
                    <TouchableOpacity>
                    <Text style={styles.buttonSup}> Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    textSup:{
        flexGrow:1,
        justifyContent:'flex-end',
        alignItems:'center',
        marginVertical:10,
        flexDirection:'row'
    },
    textContainer:{
        color:'white',
        fontSize:15,
    },
    buttonSup:{
        color:'#b71c1c',
        fontSize:16,
    },
    textLogin:{
        color:'white',
        fontSize:25
    }
});