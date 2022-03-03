import React from 'react';
import { Input, Icon } from 'react-native-elements';
import { Button, ButtonGroup, withTheme, Text } from 'react-native-elements';
import  { useState } from 'react';
import { View, StyleSheet, Alert  } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import { useForm, Controller } from "react-hook-form";




//create a screen which accepts patient name and phone number as input and then displays the list of doctors and their details and also the time slots available for the selected date and doctor.

const PatientDetails = ({navigation})=>{
    const {control, handleSubmit, errors} = useForm();
    const icon = <FontAwesome5 name={'user'} style={styles.userIcon} />;
    const phoneIcon = <FontAwesome5 name={'phone'} style={styles.phoneIcon} />;

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
            style={styles.input}
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
            style={styles.phoneInput}
            />
        )}
        />

            </View>



           
            <View style={styles.buttonContainer}>
                <Button
                    title='Book'
                    type='outline'
                    buttonStyle={{ backgroundColor: 'rgba(39, 39, 39, 1)' }}
                    titleStyle={{ color: 'white', marginHorizontal: 20 }}
                    onPress={() => {
                        navigation.navigate('Doctors')

                     }}
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
    },
  
    buttonContainer: {
        width: '50%',
        backgroundColor: '#fff',
        

    },
    phoneIcon: {
        fontSize: 16,
    },
    userIcon: {
        fontSize: 16,
    },
   
  
});
export default PatientDetails;