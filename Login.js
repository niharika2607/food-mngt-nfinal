import * as React from 'react';
import { Text, View, StyleSheet,Image,TouchableOpacity,TextInput,Alert,Dimensions } from 'react-native';
import {Header} from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import firebase from 'firebase';
//import db from './config';
//import {StyleSheet, Dimensions} from 'react-native';
//const windowW= Dimensions.get('window').width
//const windowH = Dimensions.get('window').height

class Login extends React.Component 
{
  constructor(props)
  {
    super(props)
    this.state={
        email:"",
        password:"",
        nameError:""
      }
  }
  handleLogin = async (email, password) => {
    await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        this.props.navigation.navigate('Bt');
        //console.log("successful")
      })
      
      .catch(error => {
        alert(error.message);
      });
  };

render(){
  const { email, password } = this.state;
  return(
    <SafeAreaProvider>
    <View style={styles.view1}>
        <Header backgroundColor='#F0CAC0'
     leftComponent={{ icon: 'menu', color: 'black' }}
      centerComponent={{ text: 'FOOD', style: { color: 'black' } }}
      rightComponent={{ icon: 'home', color: 'black' }}
    />
    <Text style={[styles.buttonText,{marginTop:30}]}> LOGIN SCREEN </Text>
    <View style={styles.view1}>
    <TextInput 
    style={styles.input}
    placeholder="ENTER UR EMAIL ID"
    placeholderTextColor={"#A345J"}
    onChangeText={text => this.setState({ email:text })}
    value={this.state.email}
    
    />
    <TextInput 
    style={styles.input1}
    placeholder="ENTER UR PASSWORD"
    placeholderTextColor={"#A345J"}
    onChangeText={text => this.setState({password:text })}
    value={this.state.password}
    secureTextEntry={true}
    />
    <Text style={{ color: "red" }}>{this.state.nameError}</Text>
    <TouchableOpacity style={styles.button} 
    onPress={() => {
    if (this.state.email.trim() === ""){
      this.setState({
      nameError:"email id is required"
    });
    }
    else if(this.state.password.trim() ==="") {
    this.setState({
      nameError:"pwd is required"
    });
      } 
      else if (this.state.email.trim()!=="" && this.state.password.trim()!=="") {
        this.handleLogin(email,password)
      }
      else {
          this.setState({
            nameError:null
          });

            }
          }}>
       <Text style={styles.buttonText}>LOG IN</Text>
    </TouchableOpacity>
    </View>
    </View>
    </SafeAreaProvider>
  )
}

}
const styles = StyleSheet.create({
  view1:{
    flex:1,
    backgroundColor: "#DEC9F5"
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius:20,
    marginTop:100,
  },
  input1: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius:20,
    marginTop:10,
  },
 
 button:{
    justifyContent : 'center',
    alignSelf : 'center',
    borderWidth : 2,
    borderRadius : 15,
    marginTop:50,
    width : 200,
    height:50,
    backgroundColor:"pink"
  },
  buttonText : {
    textAlign : 'center',
    color : 'black'
  }
});

export default Login
//#BB6BDA