import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Button } from 'react-native';
import { Header } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Login from "./Login"
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen';
import Signup from './SignUp';
import Address from './Address';
import CreateAdd from './CreateAdd';
import form from './Form'
import Adcard from './AddressCard'

var AppNavigator = createSwitchNavigator({
  HomeScreen: HomeScreen,
  LoginScreen: Login,
  SignupScreen: Signup,
  //TabNavigator:MyTabs,
  // AddressScreen:Address,
  //CreateAddScreen:CreateAdd,
  //FormScreen:form,
  //AddressCard:Adcard,
})
const AppContainer = createAppContainer(AppNavigator) 

       

  
  

export default AppContainer;