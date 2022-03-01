import React from 'react';
import { 
    View, 
    Text, 
    Button, 
    TouchableOpacity, 
    Dimensions,
    TextInput,
    Platform,
    ScrollView,
    StatusBar,
    StyleSheet
} from 'react-native';
import {useState} from 'react'
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

const Register = () => {
  const [name, setName] = useState('');
  const [speciality, setSpeciality] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [image,setImage] = useState('');
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#009387' barStyle="light-content" />
        <Text style={styles.text_header}>Register</Text>
        </View>

     

  )
  
}


  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009387',
    alignItems: 'center',

  },

})
export default Register