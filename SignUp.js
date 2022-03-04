import * as React from 'react';
import { Text, View, StyleSheet,Image,TouchableOpacity,TextInput,Alert } from 'react-native';
import {Header} from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import firebase  from 'firebase';
class Signup extends React.Component {
  
    constructor(props){
        super(props)
        this.state={
            email:"",
            password:"",
            nameError:""
          }
        }
signUpMethod = async() => {
    <Text style={{ color: "red" }}>{this.state.nameError}</Text>
    var e=this.state.email
    var p=this.state.password
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
            await firebase.
            auth()
            .createUserWithEmailAndPassword(e.trim(), p.trim())
            .then((cred)=>{
                console.log(cred)
                alert("signup successfully")
                this.props.navigation.navigate("LoginScreen")
            }
            )
            .catch(function(error){
                console.log(error.message)
                alert(error.message)
            })
        }
        else {
            this.setState({
              nameError:null
            });
            console.log(error.message)
              }

}
render(){
  return(
    <SafeAreaProvider>
    <View>
        <Header
     leftComponent={{ icon: 'menu', color: '#fff' }}
      centerComponent={{ text: 'FOOD', style: { color: '#fff' } }}
      rightComponent={{ icon: 'home', color: '#fff' }}
    />
    <Text style={styles.buttonText}>Create Your Account</Text>
    <TextInput 
    style={styles.input}
    placeholder="EMAIL ID"
    placeholderTextColor={"#A345J"}
    onChangeText={e=>this.setState({email:e})}
    />
    <TextInput 
    style={styles.input1}
    placeholder="PASSWORD"
    placeholderTextColor={"#A345J"}
    onChangeText={e=>this.setState({password:e})}
    />
    <TouchableOpacity style={styles.button} >
       <Text style={styles.buttonText}
        onPress={()=>this.signUpMethod()}>
          SIGN UP</Text>
    </TouchableOpacity>
    </View>
    </SafeAreaProvider>
  )
}

}
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius:20,
  },
  buttonText : {
    textAlign : 'center',
    color : 'black',

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
});

export default Signup
