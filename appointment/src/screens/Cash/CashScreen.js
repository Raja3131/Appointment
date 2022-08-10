import { StyleSheet, Text, View, Pressable, Alert } from 'react-native'
import React, { useEffect } from 'react'
import Api from '../../api/Api';
import doctors from '../../db/doctors';
import moment from 'moment';
import { styles } from './styles';
const Cash = ({ navigation, route }) => {
  const { name:firstname, doctor, date:app_date, time:appt_Time, dob, mobile:phoneNumber, age,address } = route.params;
  // const selectDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());

  useEffect(() => {
    console.log(route.params);
  }
    , [])
  const onPress = () => {
    try {
      Api.post('http://192.168.0.107:45455/Appointment/NewAppointment', {
        firstname,
        lastname:"",
        doctor,
        app_date,
        appt_Time,
        dob,
        phoneNumber,
        age,
        address,
        arabicname:"اجاسي كريس ج",
        national_ID_No:"22",
        organizationID:"org1"
        

      }).then(res => {
        Alert.alert('Appointment booked successfully')
        navigation.navigate('Patients')
      })
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.textContainer}>Appointment Details</Text>
      <View style={styles.appointmentDetailsContainer}>
        <Text style={styles.nameText}>Patient Name:{firstname}</Text>
        <Text style={styles.nameText}>Time:{appt_Time}</Text>
        <Text style={styles.nameText}>Age:{age}</Text>
        <Text style={styles.nameText}>Mobile:{phoneNumber}</Text>
        <Text style={styles.nameText}>DOB:{moment(dob).format('DD-MM-YYYY')}</Text>
        <Text style={styles.nameText}>Address:{address}</Text>
        <Text style={styles.dateText}> Date:  {
          `${app_date
          } `
        }</Text>
        <Text style={styles.timeText}>{appt_Time}</Text>
        <Text style={styles.doctorText}>
          DoctorName:
          {
            doctors.map((
              doctor1) => {
              if (doctor1.id == doctor) {
                return doctor1.name;
              }
            }
            )}
        </Text>
      </View>
      <Pressable style={styles.button} onPress={
        onPress
      }>
        <Text style={styles.buttonText}>Confirm booking</Text>
      </Pressable>
    </View>
  )
}

export default Cash
