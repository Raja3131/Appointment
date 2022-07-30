import React, {useRef, useState} from 'react';
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
  StatusBar,
  KeyboardAvoidingView,
  Pressable,
  Alert,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import {useForm, Controller} from 'react-hook-form';
import Api from '../../api/Api';
import {useTheme} from '@react-navigation/native';
import {ButtonGroup} from 'react-native-elements';
import * as Yup from 'yup';
import {Formik} from 'formik';
// import { Picker } from '@react-native-picker/picker';
import RNPickerSelect from 'react-native-picker-select';
import doctors from '../../db/doctors';
import {useEffect} from 'react';
import {styles} from './styles';
import Message from '../../components/Common/Message/Message';
import useAppoints from '../../services/QueryCalls';

const PatientDetails = ({navigation, route}) => {
  const formikRef = useRef();
  const {data} = useAppoints();
  const [message, setMessage] = useState(false);
  const [appoints, setAppoints] = useState([]);
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .matches(/^[a-zA-Z ]+$/, 'Name is not valid')
      .required('Name is required')
      .min(3, 'Name must be at least 3 characters')
      .max(50, 'Name must be less than 50 characters')
      .test('is-name', 'Name must be alphabet', value => {
        return /^[a-zA-Z]+$/.test(value);
      })
      .trim(),

    age: Yup.string()
      .matches(/^[0-9]+$/, 'Age must be number')
      .required('Age is required')

      .test('mobile', 'Mobile number must be positive', value => {
        return value > 0;
      })
      .test('age', 'Age must be positive', value => {
        return value > 0;
      })
      .test('age', 'Age must be less than 120', value => {
        return value < 120;
      })
      .test('age', 'Age must be at least 0', value => {
        return value > 0;
      }),

    mobile: Yup.string()
      .matches(/^[0-9]+$/, 'Mobile number is not valid')
      .required('Mobile is required')
      .min(10, 'Mobile must be at least 10 characters')
      .typeError('Mobile must be a number')

      .test('mobile', 'Mobile number must be positive', value => {
        return value > 0;
      })
      .test('mobile', 'Mobile number must be an integer', value => {
        return value % 1 === 0;
      }),
  });

  const {colors} = useTheme();

  
  const signUp = async (values, actions) => {
    const {name, age, mobile} = values;
    try {
      const response = await Api.post('/patient', {
        name,
        age,
        mobile,
      });
      if (response.status === 201) {
        if (values.doctor) {
          navigation.navigate('DoctorProfile', {
            name: values.name,
            age: values.age,
            mobile: values.mobile,
            gender: values.gender,
            selectDoctor: values.doctor,
          });
          if (response.status !== 201) {
            setMessage(true);
          }
        } else {
          navigation.navigate('Doctors', {
            name: values.name,
            age: values.age,
            mobile: values.mobile,
            gender: values.gender,
          });
        }
        actions.resetForm();
      } else {
        Alert.alert('Error', 'Something went wrong');
      }
    } catch (err) {
      console.log(err);
      setMessage(true);
    }
  };

const onAgeChange = (value) => {
  formikRef.current.setFieldValue('age', value)
 

};

  return (
    <>

      <KeyboardAvoidingView behavior="padding" style={{flex: 1}}>

        <View style={styles.container}>
          <StatusBar backgroundColor="#009387" barStyle="light-content" />
          <View style={styles.header}>
           
          </View>
          <Formik
            initialValues={{
              name: '',
              age: '',
              mobile: '',
              gender: '',
              doctor: '',
            }}
            innerRef={formikRef}
            validationSchema={validationSchema}
            onSubmit={signUp}>
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
              setFieldValue,
            }) => (
              <Animatable.View
                style={[
                  styles.footer,
                  {
                    backgroundColor: colors.background,
                  },
                ]}>
                <Text
                  style={[
                    styles.text_footer,
                    {
                      color: colors.text,
                    },
                  ]}>
                  Patient
                </Text>
                <View style={styles.action}>
                  <FontAwesome name="user-o" color={colors.text} size={20} />
                  <TextInput
                    placeholder="Patient Name"
                    style={[
                      styles.textInput,
                      {
                        color: colors.text,
                      },
                    ]}
                    placeholderStyle={{color: '#666666', fontSize: 20}}
                    onChangeText={handleChange('name')}
                    onBlur={handleBlur('name')}
                    value={values.name}
                  />
                  <Text style={styles.errorMsg}>
                    {touched.name && errors.name}
                  </Text>
                </View>

                <Text
                  style={[
                    styles.text_footer,
                    {
                      color: colors.text,
                      marginTop: 35,
                    },
                  ]}>
                  Age
                </Text>
                <View style={styles.action}>
                  <Feather name="user" color={colors.text} size={20} />
                  <TextInput
                  onKeyPress={(e) => {
                    if (e.nativeEvent.key === '.') 
                    {
                      formikRef.current.setFieldValue('age', values.age + '.')
                    }
                  }}
                    placeholder="Age/Gender(M/F/T)"
                    placeholderTextColor="#666666"
                    placeholderStyle={{color: '#666666', fontSize: 20}}
                    style={[
                      styles.textInput,
                      {
                        color: colors.text,
                      },
                    ]}
                    onChangeText={handleChange('age')}
                    onBlur={handleBlur('age')}
                    value={values.age}
                  maxLength={3}
                  
                      
                  />
                  <Text style={styles.errorMsg}>
                    {touched.age && errors.age}
                  </Text>
                </View>

                <View style={styles.dropdown}>
                  <RNPickerSelect
                    onValueChange={value => {
                      values.gender = value;
                      console.log(values.gender);
                    }}
                    placeholder={{
                      label: 'Select a Gender',
                      value: null,
                  }}
                  placeholderTextColor="red"
                    items={[
                      {label: 'Male', value: 'Male'},
                      {label: 'Female', value: 'Female'},
                      {label: 'Transgender', value: 'Transgender'},
                    ]}
                  />
                </View>
                <Text
                  style={[
                    styles.text_footer,
                    {
                      color: colors.text,
                      marginTop: 35,
                    },
                  ]}>
                  Mobile
                </Text>
                <View style={styles.action}>
                  <Feather name="user" color={colors.text} size={20} />
                  <TextInput
                    placeholder="Mobile"
                    placeholderTextColor="#666666"
                    placeholderStyle={{color: '#666666', fontSize: 20}}
                    style={[
                      styles.textInput,
                      {
                        color: colors.text,
                      },
                    ]}
                    onChangeText={handleChange('mobile')}
                    onBlur={handleBlur('mobile')}
                    value={values.mobile}
                    keyboardType="numeric"
                    maxLength={10}
                  />
                  <Text style={styles.errorMsg}>
                    {touched.mobile && errors.mobile}
                  </Text>
                </View>

                <View style={styles.dropdown}>
                  <RNPickerSelect
                    onValueChange={value => {
                      values.doctor = value;
                      console.log(values.doctor);
                    }}
                    items={Object.values(doctors).map(item => {
                      return {label: item.name, value: item.id};
                    })}
                    placeholder={{
                      label: 'Select a Doctor',
                      value: null,
                  }}
                  />
                </View>
                <View style={
                  styles.buttons
                }>

                <TouchableOpacity
                  style={[
                    styles.signIn,
                    {
                      borderColor: '#009387',
                      borderWidth: 1,
                      marginTop: 30,
                    },
                  ]}
                  onPress={handleSubmit}
                  disabled={!(values.name && values.age && values.mobile)}
                  testID="loginButton">
                  <Text
                    style={[
                      styles.textSign,
                      {
                        color: '#009387',
                      },
                    ]}>
                    Submit
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.signIn,
                    {
                      borderColor: '#009387',
                      borderWidth: 1,
                      marginTop: 30,
                    },
                   
                  ]}
                  onPress={() => formikRef.current?.resetForm()}
                  testID="clearFieldsButton">
                  <Text
                    style={[
                      styles.textSign,
                      {
                        color: '#009387',
                      },
                    ]}>
                    Clear Fields
                  </Text>
                </TouchableOpacity>
                </View>
              </Animatable.View>
            )}
          </Formik>
        </View>
      </KeyboardAvoidingView>
      {message && (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>
            Something went wrong. Please try again.
          </Text>
        </View>
      )}
    </>
  );
}
          
export default PatientDetails;