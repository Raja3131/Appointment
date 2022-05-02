import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Platform,
  StyleSheet,
  ScrollView,
  StatusBar,
  KeyboardAvoidingView,
  Pressable,
  Alert,
} from 'react-native';

import Api from '../../api/Api';
import {Formik} from 'formik';
import RNPickerSelect from 'react-native-picker-select';
import doctors from '../../db/doctors';
import {useEffect} from 'react';
import {ValidationSchema} from '../../helpers/Validation';
import CreateAppoint from '../../components/CreateAppoint/CreateAppoint';


const PatientDetails = ({navigation, route}) => {
  const [existed, setExisted] = useState('');
  const formikRef = useRef();
  const [message, setMessage] = useState(false);
  const [appoints, setAppoints] = useState([]);

  const signUp = async (values, actions) => {
    const {firstName, lastName, age, mobile, doctorID} = values;
    try {
      const response = await Api.post('/patient', {
        firstName,
        lastName,
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
          if (response.status === 400) {
            setExisted('Patient Already Existed');
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
        setExisted('Patient Already Existed');
      }
    } catch (err) {
      console.log(err);
      setMessage(true);
      setExisted('Patient Already Existed');

      setTimeout(() => {
        setExisted('');
        setMessage(false);
      }, 3000);
    }
  };

  const onAgeChange = value => {
    formikRef.current.setFieldValue('age', value);
  };

  const handleSubmit = () => {
    console.log('clicked');
  };
  const handleClear = () => {
    console.log('cleared');
  };

  return (
    <>
    <CreateAppoint
    handleClear={handleClear}
    handleSubmit={handleSubmit}
    onAgeChange={onAgeChange}
    formikRef={formikRef}
    signUp={signUp}
    />
      
    </>
  );
};

export default PatientDetails;
