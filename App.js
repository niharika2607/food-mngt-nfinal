import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Button } from 'react-native';
//import { Header } from 'react-native-elements';
//import { SafeAreaProvider } from 'react-native-safe-area-context';
import Login from "./Login"
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen';
import Signup from './SignUp';
import Address from './Address';
import CreateAdd from './CreateAdd';
import form from './Form'
import Adcard from './AddressCard'
import BottomTabNavigator from './toptabbar';
import { NavigationContainer } from '@react-navigation/native';
//import BottomTabNavigator from './TabNavigator';
//import { NavigationContainer } from "@react-navigation/native"
//import MyTabs from './TabNavigator';
//import StackNavigator from "./StackNavigator"
//import AppContainer from './StackNavigator';

export default class App extends React.Component {

  render() {
    return (
     <NavigationContainer>
      <AppContainer/>
      </NavigationContainer>
    )
  }
}
var AppNavigator = createSwitchNavigator({
  HomeScreen: HomeScreen,
  LoginScreen: Login,
  SignupScreen: Signup,
  AddressScreen:Address,
  CreateAddScreen:CreateAdd,
  FormScreen:form,
  AddressCard:Adcard,
  Bt:BottomTabNavigator,
})

const AppContainer = createAppContainer(AppNavigator)
const styles = StyleSheet.create({
  img: {
    width: 350,
    height: 150,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center"
  },
  t: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    color: "purple"
  },
  btn: {
    marginTop: 30,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    width: 80,
    marginLeft: 130,
    height: 50
  }
});
