import React from 'react';
import { Input, Icon } from 'react-native-elements';
import { Button, ButtonGroup, withTheme, Text } from 'react-native-elements';
import  { useState,useEffect} from 'react';
import { View, StyleSheet, Alert  } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import { useForm, Controller } from "react-hook-form";
import axios from 'axios'




//create a screen which accepts patient name and phone number as input and then displays the list of doctors and their details and also the time slots available for the selected date and doctor.

const PatientDetails = ({navigation})=>{
    const {control, handleSubmit, errors} = useForm();
    const icon = <FontAwesome5 name={'user'} style={styles.userIcon} />;
    const phoneIcon = <FontAwesome5 name={'phone'} style={styles.phoneIcon} />;

    const API_URL = 'http://localhost:5000/patient/';
   
    const [patientDetails,setPatientDetails]=useState({});
    const onSubmit = data => {
        setPatientDetails(data);
        console.log(data);
    };





    return(
      <>         
        <View style={styles.container}>
        <Controller
        control={control}
        rules={{
         required: true,
        }}
        render={({ onChange, onBlur, value }) => (
          <Input
            placeholder="Patient Name"
            leftIcon={icon}
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            inputContainerStyle={styles.input}
         
          />
        )}

      
        />
        <Controller
        control={control}
        rules={{
            required: true,
            pattern: /^\d{10}$/
        }}
        render={({ onChange, onBlur, value }) => (
            <Input
            placeholder="Phone Number"
            leftIcon={phoneIcon}
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            inputContainerStyle={styles.phoneInput}
            />
        )}
        />
        <Controller
        control={control}
        rules={{
            required: true,
            pattern: /^\d{4}$/
        }}
        render={({ onChange, onBlur, value }) => (
            <Input
            placeholder="Age"
            leftIcon={icon}
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            inputContainerStyle={styles.input}
            />
        )}
        />
       <Button
        title="Submit"
        onPress={handleSubmit(onSubmit)}
        buttonStyle={styles.button}
        titleStyle={styles.buttonText}
        />


            </View>



        
        </>

    )

   

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:"#fff",
        marginTop:150,
    },
  
 
    phoneIcon: {
        fontSize: 16,
    },
    userIcon: {
        fontSize: 16,
    },
    input: {
        width: '50%',
        marginVertical: 10,
        borderBottomColor: '#000',
        marginLeft: 100,

    },
 
    phoneInput: {
        width: '50%',
        borderBottomColor: '#000',
        marginLeft: 100,
    },
    button: {
        backgroundColor: '#000',
        borderRadius: 10,
        padding: 10,
        marginBottom: 200,
        textAlignVertical: 'center',
        textAlign: 'center',
        width:100
    },
    text: {
        color: '#fff',
        fontSize: 20,
    },
});

       
 

   
  
export default PatientDetails;