import React from 'react'
import Api from '../../api/Api';
import {useTheme} from '@react-navigation/native';

import doctors from '../../db/doctors';
import CreateAppoint from '../../components/CreateAppoint/CreateAppoint'
import { useState } from 'react';



const PatientDetails = ({navigation, route}) => {
  const [message, setMessage] = useState(false);
  const [appoints, setAppoints] = useState([]);
 

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

  return (
    <>
    <CreateAppoint
      signUp={signUp}
      doctors={doctors}
      navigation={navigation}
      route={route}
      colors={colors}
      message={message}
      appoints={appoints}
    />
   


    
   
    </>
  );
};

export default PatientDetails;
