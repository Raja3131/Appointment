import React from "react";
import { Text, View, Image, Button, StyleSheet, Pressable } from "react-native";
import { useState, useEffect } from "react";
import doctors from '../db/doctors'
const DoctorDetailsScreen = ({ route, navigation }) => {
  const { id } = route.params;
  const [doctorsList, setDoctorsList] = useState([])

  useEffect(() => {
    setDoctorsList(doctors)
  }, [])

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={doctors.find(doctor => doctor.id === id).image} />
      <Text style={styles.name}>{doctors.find(doctor => doctor.id === id).name}</Text>
      <Text style={styles.speciality}>{doctors.find(doctor => doctor.id === id).speciality}</Text>
      <Text style={styles.about}>{doctors.find(doctor => doctor.id === id).about}</Text>
      <Pressable style={styles.button} onPress={() => navigation.navigate('Appointment', { doctorId: id })}>
        <Text style={styles.buttonText}>Book Appointment</Text>
      </Pressable>
    </View>
  );

};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 100
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  speciality: {
    fontSize: 18
  },
  about: {
    marginTop: 10,
    fontSize: 16,
    color: '#888',
    width: '80%',
    lineHeight: 25,

  },
  button: {
    marginTop: 24,
    paddingVertical: 12,
    paddingHorizontal: 30,
    backgroundColor: '#00a8ff',
    borderRadius: 10,
    width: '80%'
  },
  buttonText: {
    fontSize: 18,
    color: '#fff'
  }
});
export default DoctorDetailsScreen;
