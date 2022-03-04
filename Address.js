import * as React from 'react';
import { Text, View, StyleSheet,Image,TouchableOpacity,TextInput,SafeAreaView } from 'react-native';
import {Header} from 'react-native-elements';
//import { SafeAreaView} from 'react-native-safe-area-context';
import { FlatList } from "react-native-gesture-handler";
import AddressCard from './AddressCard'

import firebase  from 'firebase';
import { SafeAreaProvider } from 'react-native-safe-area-context';
//import { black } from 'react-native-paper/lib/typescript/styles/colors';
//import {Hr} from "react-native-hr";
class Address extends React.Component {
  constructor(props){
    super(props);
    this.state={
      addr:[],
    }
  }
  componentDidMount(){
    this.fetchAddress()
  }

fetchAddress=()=>{
  firebase
      .database()
      .ref("/posts/")
      .on(
        "value",
        snapshot => {
          let add = [];
          if (snapshot.val()) {
            Object.keys(snapshot.val()).forEach(function (key) {
              add.push({
                key: key,
                value: snapshot.val()[key]
              });
            });
          }
          this.setState({ addr: add });
          console.log(this.state.addr)
         // this.props.setUpdateToFalse();
        },
        function (errorObject) {
          console.log("The read failed: " + errorObject.code);
        }
      );
}


keyExtractor = (item, index) => index.toString();
render() {
    return (
  
      <View
      
        style={
          this.state.light_theme ? styles.containerLight : styles.container
        }
      >
        <SafeAreaProvider style={styles.droidSafeArea}>
        <Header backgroundColor='#F0CAC0'
     leftComponent={{ icon: 'menu', color: 'black' }}
      centerComponent={{ text: 'AddressScreen', style: { color: 'black' } }}
      rightComponent={{ icon: 'home', color: 'black' }}
    />
        <Text style={{textAlign:"center",fontSize:"30px"}}></Text>
        <View style={styles.appTitle}>
          <View style={styles.appIcon}>

          </View>
          <View style={styles.appTitleTextContainer}>
            <Text 
            >
            </Text>
          </View>
        </View>
        {!this.state.addr[0] ? (
          <View style={styles.noStories}>
            <Text
            >
              No Address Available
            </Text>
          </View>
        ) : (
          <View style={styles.cardContainer}>
            <FlatList
              keyExtractor={this.keyExtractor}
              data={this.state.addr}
              numColumns={1}
     // ItemSeparatorComponent={this.renderSeparator}

              onEndReachedThreshold={0.7}
               renderItem={({item}) => 
               <View>
               <Text style={{textAlign:"center",borderWidth:1}}> {item.value.cou}</Text>
               <Text style={{textAlign:"center"}}> {item.value.picker}</Text>
               <Text style={{textAlign:"center"}}> {item.value.city}</Text>
               <View
               style={{
         borderBottomColor: 'magenta',
        borderBottomWidth: 1,
              }}>
                </View>
               </View>
              }

            />
          </View>
        )}
        <View style={{ flex: 0.08 }} />
        <TouchableOpacity 
    style={styles.btn}
    onPress={()=>this.props.navigation.navigate("FormScreen")}
    >
        <Text>Add Address</Text>
    </TouchableOpacity>
    </SafeAreaProvider>
      </View>
    
    );
  }
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  btn:{
    marginTop:30,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:10,
    width:80,
    marginLeft:100,
    height:50,
 }
});

export default Address;
