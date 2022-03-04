import * as React from 'react';
import { Text, View, StyleSheet,Image,TouchableOpacity,TextInput } from 'react-native';
import {Header} from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
//import {AutoCompleteComponent} from '@syncfusion/ej2-react-dropdowns'

class CreateAdd extends React.Component {
    constructor(props){
        super(props)
        this.state={ 
            name:""
        }
    }
  

render(){
  return(
    <View>
    <Header
     leftComponent={{ icon: 'menu', color: '#fff' }}
      centerComponent={{ text: 'APP', style: { color: '#fff' } }}
      rightComponent={{ icon: 'home', color: '#fff' }}
    />
      <TextInput 
    style={styles.input}
    placeholder="NAME OF THE ORPHANAGE"
    placeholderTextColor={"#A345J"}
    onChangeText={text => this.setState({ name:text })}
    value={this.state.name}
    />
    
    
    </View>
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
    marginTop:100,
  },
});

export default CreateAdd;
