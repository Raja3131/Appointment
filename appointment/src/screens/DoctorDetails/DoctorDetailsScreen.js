import React from "react";
import { Text, View, Image, Button, StyleSheet, Pressable } from "react-native";
import { useState, useEffect } from "react";
import doctors from '../../db/doctors'
import { color } from "@mui/system";
import {styles} from './styles'
const DoctorDetailsScreen = ({ route, navigation }) => {
  const { selectDoctor } = route.params;
  const { name} = route.params;
  const {age} = route.params;
  const {dob} = route.params;
  const {mobile} = route.params;

  const [doctorsList, setDoctorsList] = useState([])

  useEffect(() => {
    setDoctorsList(doctors)
    console.log(name,selectDoctor)
  }, [])

const onPress = () => {
  if (selectDoctor) {
    navigation.navigate('Appointment', { name: name, selectDoctor: selectDoctor,dob:dob,age:age,mobile:mobile })
  }
  else {
    navigation.navigate('Patients', { selectedDoctor: selectDoctor }) 
  }
}

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={doctors.find(doctor => doctor.id === selectDoctor).image} />
      <Text style={styles.name}>{doctors.find(doctor => doctor.id === selectDoctor).name}</Text>
      <Text style={styles.speciality}>{doctors.find(doctor => doctor.id === selectDoctor).speciality}</Text>
      <Text style={styles.about}>{doctors.find(doctor => doctor.id === selectDoctor).about}</Text>
      <Pressable style={styles.button} onPress={() => onPress(
        { name: name, selectDoctor: selectDoctor }
      )}>
        <Text style={styles.buttonText}>Book Appointment</Text>
      </Pressable>
    </View>
  );

};

export default DoctorDetailsScreen;
