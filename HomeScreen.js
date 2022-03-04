import * as React from 'react';
import { Text, View, StyleSheet,Image,TouchableOpacity,Button,Dimensions,BackgroundColor } from 'react-native';
import {Header} from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Login from "./Login"
import SignUp from "./SignUp"
import { createAppContainer, createSwitchNavigator} from 'react-navigation'; 
//import AsyncStorage from '@react-native-community/async-storage';
//import BackgroundColor from 'react-native-background-color';
const windowW= Dimensions.get('window').width
const windowH = Dimensions.get('window').height


export default class HomeScreen extends React.Component 
{
  //componentDidMount() {
    //BackgroundColor. setColor('#BB6BDA');
   // }
    
  render()
  {
  return (
    <SafeAreaProvider>
      <View style={styles.view1}>
    <View>
    <Header backgroundColor='#F0CAC0'
     leftComponent={{ icon: 'menu', color: 'black' }}
      centerComponent={{ text: 'FOOD DONATION APP', style: { color: 'black' } }}
      rightComponent={{ icon: 'home', color: 'black' }}
    />
      <Image  style={styles.img}
      source={require('./food-rebg.png')}           />
      <Text style={styles.t}> START TODAY !!!</Text>
      </View>
      <View>

      <TouchableOpacity style={styles.btn} 
      onPress={()=>this.props.navigation.navigate("LoginScreen")}>
      <Text style={{color:"white", fontSize:"30px"}}>LOGIN</Text>
      </TouchableOpacity >

      <Text style={{ marginLeft:Dimensions.get('window').width/2}}>Already a user! Log In</Text>

      <TouchableOpacity style={styles.btn}  
      onPress={()=>this.props.navigation.navigate('SignupScreen')}>
      <Text style={{color:"white", fontSize:"30px"}}>SIGN UP</Text>
      </TouchableOpacity >

       <Text style={{marginLeft:Dimensions.get('window').width/2}}>New User! Sign Up</Text>

      </View>
         
          </View>
          </SafeAreaProvider>
        );
      }
      }


const styles = StyleSheet.create({
 img:{
   width:350,
   height:150,
   //justifyContent:"center",
   //alignItems:"center",
   //alignSelf:"center",
   marginLeft:Dimensions.get('window').width/2
 },
 t:{
   justifyContent:"center",
   alignItems:"center",
   alignSelf:"center",
   color:"purple"
 },
 btn:{
    marginTop:30,
    backgroundColor: '#2196F3',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:10,
    width:150,
    height:50,
    marginLeft:Dimensions.get('window').width/2
    
 },
 view1:{
   backgroundColor:"#DEC9F5",
   height: Dimensions.get('window').height,
   width: Dimensions.get('window').width,
   //width:windowW,
   //height:windowH,
   //width:"100vh",
   //height:"100vh"
  
 }
});
