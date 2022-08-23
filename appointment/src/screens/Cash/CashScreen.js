import { StyleSheet, Text, View, Pressable, Alert } from 'react-native'
import React, { useEffect } from 'react'
import Api from '../../api/Api';
import doctors from '../../db/doctors';
import moment from 'moment';
import { styles } from './styles';
import { url } from '../../utils/url';
const Cash = ({ navigation, route }) => {
  const { name: firstname, doctor, date: app_date, time: time, dob, mobile: phoneNumber, age, address } = route.params;
  const dobFormat = moment(dob).format('DD-MM-YYYY');
  // const selectDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());

  useEffect(() => {
    console.log(firstname, doctor, app_date, dob, phoneNumber, time, age, address);
  },[])
  const onPress = () => {
    debugger;
    let d = new Date(app_date+" "+time);
  //d.setMinutes(d.getMinutes() - 330)
   let s = new Date(app_date+" "+d.getTime());
  console.log(d)
    try {
      Api.post(`${url}/Appointment/NewAppointment`, {
        firstname,
        lastname: "",
        gender: "Male",
        app_date,
        appt_Time:d,
        dob: "1995-07-10 05:30:00.000",
        phoneNumber,
        age,
        address,
        arabicname: "اجاسي كريس ج",
        national_ID_No: "22",
        organizationID: "org1",
        ActiveSubmitForm: "",
        doctorName:doctor,

      }).then(res => {
        dubugger;
        Alert.alert('Appointment booked successfully')
        navigation.navigate('Patients')
      })
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View style={styles.container}>

      <View style={styles.appointmentDetailsContainer}>
        <Text style={styles.nameText}>Patient Name:{firstname}</Text>
        <Text style={styles.nameText}>Time:{time}</Text>
        <Text style={styles.nameText}>Age:{age}</Text>
        <Text style={styles.nameText}>Mobile:{phoneNumber}</Text>
        <Text style={styles.nameText}>DOB:{moment(dobFormat).format('DD-MM-YYYY')}</Text>
        <Text style={styles.nameText}>Address:{address}</Text>
        <Text style={styles.dateText}> Date:  {
          `${app_date
          } `
        }</Text>
        <Text style={styles.timeText}>{time}</Text>
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
