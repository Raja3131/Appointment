import React,{useRef,useState} from "react";
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
  Pressable,
  Alert
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather'
import Api from '../api/Api'
import { useTheme } from '@react-navigation/native';
import * as Yup from 'yup';
import { Formik } from 'formik';

const validationSchema = Yup.object({
    name: Yup.string()
      .trim()
      .min(3, 'Invalid name!')

      
      .required('Name is required!')
      .matches(/^[a-zA-Z ]*$/, 'Invalid name!'),
    age: Yup.number()
        .positive('Invalid age!')
        .required('Age is required!')
        .min(1, 'Invalid age!')
        .max(2, 'Invalid age!')
        .moreThan(0, 'Invalid age!')
        .lessThan(100, 'Invalid age!')

      


    
  });

const PatientDetails = ({ navigation }) => {
    const userInfo = {
        name: '',
        age: '',
      };
      const [error, setError] = useState('');

  const { name, age } = userInfo;
  const handleOnChangeText = (value, fieldName) => {
    setUserInfo({ ...userInfo, [fieldName]: value });
  };
  const isValidForm = () => {
    // we will accept only if all of the fields have value
    if (!isValidObjField(userInfo))
      return updateError('Required all fields!', setError);
    // if valid name with 3 or more characters
    if (!name.trim() || name.length < 3)
      return updateError('Invalid name!', setError);
    // only valid email id is allowed
    if (!isValidEmail(age)) return updateError('Invalid Age!', setError);


    return true;
  };

const onSubmit = async(values) => {
    console.log(values);
    const { name, age } = values;
    navigation.navigate('Doctors', { name, age });
    
   
    };
    return (
        <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
        >
        <ScrollView>
            <View style={styles.header}>
            <Text style={styles.text_header}>Welcome</Text>
            </View>
            <Animatable.View
            animation="fadeInUpBig"
            style={[styles.footer, {
                backgroundColor: '#fff',
                borderTopLeftRadius: 30,
                borderTopRightRadius: 30,
                paddingHorizontal: 30,
                paddingVertical: 30,
            }]}
            >
            <Formik
                initialValues={userInfo}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
            >
                {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                <View>
                    <View style={styles.inputContainer}>
                    <Text style={styles.label}>Name</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={handleChange('name')}
                        onBlur={handleBlur('name')}
                        value={values.name}
                        contextMenuHidden={true}  

                    />
                    {touched.name && errors.name && (
                        <Text style={styles.error}>{errors.name}</Text>
                    )}
                    </View>
                    <View style={styles.inputContainer}>
                    <Text style={styles.label}>Age</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={handleChange('age')}
                        onBlur={handleBlur('age')}
                        value={values.age}
                        keyboardType='numeric'
                        maxLength={10}
                    />
                    {touched.age && errors.age && (
                        <Text style={styles.error}>{errors.age}</Text>
                    )}
                    </View>
                    <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={handleSubmit}
                    >
                        <Text style={styles.text_button}>Submit</Text>
                    </TouchableOpacity>
                    </View>
                </View>
                )}
            </Formik>
            </Animatable.View>
        </ScrollView>
        </KeyboardAvoidingView>
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
    borderBottomColor: '#f2f2f2',
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
