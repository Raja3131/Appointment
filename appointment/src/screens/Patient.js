import React from "react";
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  Dimensions,
  TextInput,
  Platform,
  StyleSheet,
  ScrollView,
  StatusBar, KeyboardAvoidingView,
  Pressable
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather'
import { useForm, Controller } from "react-hook-form";
import Api from '../api/Api'
import { useTheme } from '@react-navigation/native';

const PatientDetails = ({ navigation }) => {
  const [data, setData] = React.useState({
    name: '',
    age: '',
    mobile: '',
    address: '',
    check_textInputChange: false,
    isValidUser: true,
});

const { colors } = useTheme();


const textInputChange = (val) => {
    if( val.trim().length >= 4 ) {
        setData({
            ...data,
            name: val,
            check_textInputChange: true,
            isValidUser: true
        });
    } else {
        setData({
            ...data,
            name: val,
            check_textInputChange: false,
            isValidUser: false
        });
    }
}

const handleAgeChange = (val) => {
    if( val.trim().length >= 2 ) {
        setData({
            ...data,
            age: val,
            check_textInputChange: true,
        });
    } else {
        setData({
            ...data,
            age: val,
            check_textInputChange: false,
        });
    }
   
}


const handleValidUser = (val) => {
    if( val.trim().length >= 4 ) {
        setData({
            ...data,
            isValidUser: true
        });
    } else {
        setData({
            ...data,
            isValidUser: false
        });
    }
}
const handleSubmit = (val) => {
    console.log(val)
    Api.post('/patient', {
        name: val.name,
        age: val.age
    }) ? navigation.navigate('Doctors') : null
    .then((response) => {
        console.log(response)
    })
    .catch((error) => {
        console.log(error)
    })
}

return (
  <View style={styles.container}>
      <StatusBar backgroundColor='#009387' barStyle="light-content"/>
    <View style={styles.header}>
        <Text style={styles.text_header}>Welcome!</Text>
    </View>
    <Animatable.View 
        animation="fadeInUpBig"
        style={[styles.footer, {
            backgroundColor: colors.background
        }]}
    >
        <Text style={[styles.text_footer, {
            color: colors.text
        }]}>Username</Text>
        <View style={styles.action}>
            <FontAwesome 
                name="user-o"
                color={colors.text}
                size={20}
            />
            <TextInput 
                placeholder="Username"
                placeholderTextColor="#666666"
                style={[styles.textInput, {
                    color: colors.text
                }]}
                autoCapitalize="none"
                onChangeText={(val) => textInputChange(val)}
                onEndEditing={(e)=>handleValidUser(e.nativeEvent.text)}
            />
            {data.check_textInputChange ? 
            <Animatable.View
                animation="bounceIn"
            >
                <Feather 
                    name="check-circle"
                    color="green"
                    size={20}
                />
            </Animatable.View>
            : null}
        </View>
        { data.isValidUser ? null : 
        <Animatable.View animation="fadeInLeft" duration={500}>
        <Text style={styles.errorMsg}>Username must be 4 characters long.</Text>
        </Animatable.View>
        }
        

        <Text style={[styles.text_footer, {
            color: colors.text,
            marginTop: 35
        }]}>Age</Text>
        <View style={styles.action}>
            <Feather 
                name="user"
                color={colors.text}
                size={20}
            />
            <TextInput 
                placeholder="Your Age"
                placeholderTextColor="#666666"
                style={[styles.textInput, {
                    color: colors.text
                }]}
                autoCapitalize="none"
                onChangeText={(val) => handleAgeChange(val)}
            />
          
        </View>

        

       

       
            <TouchableOpacity
                onPress={() => handleSubmit(data)}
                style={[styles.signIn, {
                    borderColor: '#009387',
                    borderWidth: 1,
                    marginTop: 180
                }]}
            >
                <Text style={[styles.textSign, {
                    color: '#009387'
                }]}>Submit</Text>
            </TouchableOpacity>
    </Animatable.View>
  </View>
);
};


const styles = StyleSheet.create({
container: {
  flex: 1, 
  backgroundColor: '#009387'
},
header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50
},
footer: {
    flex: 3,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30
},
text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30
},
text_footer: {
    color: '#05375a',
    fontSize: 18
},
action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5
},
actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5
},
textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
},
errorMsg: {
    color: '#FF0000',
    fontSize: 14,
},
button: {
    alignItems: 'center',
    marginTop: 50
},
signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
},
textSign: {
    fontSize: 18,
    fontWeight: 'bold'
}
});
export default PatientDetails;
