import React, { useRef, useState } from 'react';
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
  TouchableHighlight,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Api from '../../api/Api';
import { useTheme } from '@react-navigation/native';
import { ButtonGroup } from 'react-native-elements';
import * as Yup from 'yup';
import { Formik } from 'formik';
// import { Picker } from '@react-native-picker/picker';
import RNPickerSelect from 'react-native-picker-select';
import doctors from '../../db/doctors';
import { useEffect } from 'react';
import { styles } from './styles';
import Message from '../../components/Common/Message/Message';
import useAppoints from '../../services/QueryCalls';
import ValidatedTextInput from '../../utils/ValidatetextInput';
import DateTimePicker from '@react-native-community/datetimepicker';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { useCallback } from "react";
const PatientDetails = ({ navigation, route }) => {
  const formikRef = useRef();
  const [message, setMessage] = useState(false);
  const [dob, setDob] = useState(new Date());
  const [age, setAge] = useState(null);
  const inputRef = useRef();

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .matches(/^[a-z0-9_.-\s]+$/i, 'Name is not valid')
      .required('Name is required')
      .min(3, 'Name must be at least 3 characters')
      .max(50, 'Name must be less than 50 characters')
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
      .matches(/^[0-9]+$/, 'Invalid Mobile Number')
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

  const { colors } = useTheme();
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
    console.log('showDatePicker');
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
    console.log('hideDatePicker');
  };

  const handleDob = dob => {
    setDob(dob);
    setDatePickerVisibility(false);
    console.log(dob.toLocaleDateString());
  };
  const signUp = async (values, actions) => {
    const { name, age, mobile } = values;
    try {
      if (values.doctor) {
        navigation.navigate('DoctorProfile', {
          name: values.name,
          age: values.age,
          mobile: values.mobile,
          gender: values.gender,
          selectDoctor: values.doctor,
        });
      } else {
        navigation.navigate('Doctors', {
          name: values.name,
          age: values.age,
          mobile: values.mobile,
          gender: values.gender,
        });
      }
      actions.resetForm();
      formikRef.current?.resetForm();
      setGender('');
      setDoctorValue('');
    } catch (err) {
      console.log(err);
      setMessage(true);
      Alert.alert('Error', 'Something went wrong');
    }
  };

  const getAge = useCallback((dob) => {
    let today = new Date();
    let birthDate = new Date(dob);
    let age = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    console.log(age);
    setAge(age);
    setDob(dob);
    setDatePickerVisibility(false);
    inputRef.current.setNativeProps({ text: age.toString() });

    console.log(dob.toLocaleDateString());

  }, [])

  const handleAgeToDob = (age) => {
    setAge(age)
    console.log(age)
    let CurrentDate = new Date();
    CurrentDate.setFullYear(CurrentDate.getFullYear() - age);
    let DateOfBirth = CurrentDate;
    setDob(DateOfBirth)

  }
  return (
    <>
      <ScrollView>
        <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
          <View style={styles.container}>
            <StatusBar backgroundColor="#009387" barStyle="light-content" />
            <View style={styles.header}></View>
            <Animatable.View
              style={[
                styles.footer,
                {
                  backgroundColor: colors.background,
                },
              ]}>
              <View style={styles.dobContainer}>
                <TouchableHighlight onPress={showDatePicker}>
                  <Text>{dob.toLocaleDateString()}</Text>
                </TouchableHighlight>
                {isDatePickerVisible && (
                  <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode="date"
                    onConfirm={getAge}
                    onCancel={hideDatePicker}
                    value={dob}
                    maximumDate={new Date()}
                  />
                )}
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
                <TextInput
                  placeholder="Age"
                  placeholderTextColor="#598"
                  placeholderStyle={{ color: '#666666', fontSize: 20 }}
                  style={[
                    styles.textInput,
                    {
                      color: colors.text,
                    },
                  ]}
                  keyboardType="numeric"
                  value={age}
                  maxLength={3}
                  onChangeText={handleAgeToDob}
                  ref={inputRef}
                />
                <Text style={styles.errorMsg}></Text>
              </View>
            </Animatable.View>
          </View>
        </KeyboardAvoidingView>
        {message && (
          <View style={styles.errorContainer}>
            <Text style={styles.errorText}>
              Something went wrong. Please try again.
            </Text>
          </View>
        )}
      </ScrollView>
    </>
  );
};

export default PatientDetails;
