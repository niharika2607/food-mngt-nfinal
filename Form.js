import * as React from 'react';
import { Text, View, StyleSheet,Alert,TouchableOpacity } from 'react-native';

import {Picker} from '@react-native-picker/picker';
import { RFValue } from "react-native-responsive-fontsize";
import firebase from "firebase";
import config from './config'
import AddressScreen from './Address'
import SelectDropdown from 'react-native-select-dropdown'

export default class App extends React.Component
 {
  constructor(props){
    super(props)
      this.state={
        country:"India",
       pickerSelection:"Arunachal Pradesh",
       value:1,
       city:"abc"
		};
    

      }
     
      async addAdd() {
    if (
      this.state.country
      && this.state.pickerSelection && this.state.city
    ) {
      let storyData = {
        cou:this.state.country,
        picker:this.state.pickerSelection,
        city: this.state.city,
      };
      await firebase
        .database()
        .ref(
          "/posts/" +
            Math.random()
              .toString(36)
              .slice(2)
        )
        .set(storyData)
        .then(function(snapshot) {});
      //this.props.setUpdateToTrue();
      this.props.navigation.navigate("AddressScreen");
    } else {
      Alert.alert(
        "Error",
        "All fields are required!",
        [{ text: "OK", onPress: () => console.log("OK Pressed") }],
        { cancelable: false }
      );
    }
  }

    
      
  render() {
    const countries=["India","Africa"]
    return (
      <View>
        <SelectDropdown
        data={countries}
        onSelect={(selectedItem, index) => {
          console.log(selectedItem, index)
        }}

        buttonTextAfterSelection={(selectedItem, index) => {
          // text represented after item is selected
          // if data array is an array of objects then return selectedItem.property to render after item is selected
          return selectedItem
        }}
        rowTextForSelection={(item, index) => {
          // text represented for each item in dropdown
          // if data array is an array of objects then return item.property to represent item in dropdown
          return item
        }}
      
/>

      </View> 
    );
  }
}

const styles=StyleSheet.create({
  picker:{
    width:300,
    height:45,
    borderColor:"powderblue",
    borderWidth:2,
    marginLeft:15,
    marginTop:20,
  },
    submitButton: {
    marginTop: RFValue(20),
    alignItems: "center",
    justifyContent: "center",
    color:"#841584",
    borderWidth:2,
    borderRadius:10
  }

})
 