import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Button } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Ewaste from "./Ewaste";
import Recycle from './Recycle';
import Address from './Address';
const Tab = createMaterialTopTabNavigator();

const TopTabNavigator=()=>{
    return(
        <Tab.Navigator
        initialRouteName='reducefood'
        tabBarOptions={{
            activeTintColor:'#e91e63',
            labelStyle:{fontSize:12},
            style:{backgroundColor:'powderblue'},
            showLabel:true,
        }}
        >
        <Tab.Screen
        name="reducefood"
        component={Address}
        options={{
            tabBarIcon: ({focused}) => {
             <View>
                 <Image
                  source={require("./pics/foodIcon.png")}
                  resizeMode="contain"
                  style={{
                      width:'25px',
                      height:'30px', 
                      color:'black',
                     backgroundColor:"yellow"
                    }}
                 />
             </View>
            },
        }}
      />
       <Tab.Screen
        name="Recycle"
        component={Recycle}
        options={{
            tabBarIcon: ({focused}) => {
              return (
                <Image
                  //resizeMode={'contain'}
                  source={
                    focused ? "pics/recycleIcon.png": "pics/recycleIcon.png"
                  }
                />
              );
            },
        }}
      />
      <Tab.Screen
        name="Ewaste"
        component={Ewaste}
        options={{
            tabBarIcon: ({focused}) => {
              return (
                <Image
                  //resizeMode={'contain'}
                  source={
                    focused ? "pics/ewasteIcon.png": "pics/ewasteIcon..png"
                  }
                />
              );
            },
        }}
      />
    </Tab.Navigator>
    )
}
export default TopTabNavigator;
    
  
