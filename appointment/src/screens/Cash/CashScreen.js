import { StyleSheet, Text, View,Pressable,Alert } from 'react-native'
import React,{useEffect} from 'react'
import Api from '../../api/Api';
import doctors from '../../db/doctors';
import moment from 'moment';
import { styles } from './styles';



const Cash = ({navigation,route}) => {
  const {name,doctor,date,time} = route.params;
  // const selectDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  
useEffect(() => {
  console.log(name,doctor,date,time)
}
,[])
  const onPress = () => {
    try {
      Api.post('/appoints',{
        name,
        doctor,
        date,
        time
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
     <View style={styles.appointmentDetailsContainer}>
     <Text style={styles.nameText}>Patient Name:{name}</Text>
      <Text style={styles.dateText}> Date:  {
          `${
           date
          } `
        }</Text>
      <Text style={styles.timeText}>{time}</Text>
      <Text style={styles.detailsText}>
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
        <Text style={styles.buttonText}>Confirm Appointment</Text>
      </Pressable>
    </View>
  )
}

export default Cash
