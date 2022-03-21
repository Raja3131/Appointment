import React from "react";
import { Text, View, Image, Button, StyleSheet, Pressable } from "react-native";
import { useState, useEffect } from "react";
import doctors from '../db/doctors'
import { color } from "@mui/system";
const DoctorDetailsScreen = ({ route, navigation }) => {
  const { selectDoctor } = route.params;
  const { name} = route.params;
  const [doctorsList, setDoctorsList] = useState([])

  useEffect(() => {
    setDoctorsList(doctors)
  }, [])

const onPress = () => {
  if (name && selectDoctor) {
    navigation.navigate('Appointment', { name: name, selectDoctor: selectDoctor })
  }
  else {
    navigation.navigate('Patients', { selectDoctor: selectDoctor })
  }
}

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={doctors.find(doctor => doctor.id === selectDoctor).image} />
      <Text style={styles.name}>{doctors.find(doctor => doctor.id === selectDoctor).name}</Text>
      <Text style={styles.speciality}>{doctors.find(doctor => doctor.id === selectDoctor).speciality}</Text>
      <Text style={styles.about}>{doctors.find(doctor => doctor.id === selectDoctor).about}</Text>
      <Pressable style={styles.button} onPress={() => onPress()}>
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
    fontSize: 18,
    marginTop: 20,
    marginBottom: 20,
    color: 'grey'
 

  },
  button: {
    marginTop: 24,
    paddingVertical: 12,
    paddingHorizontal: 30,
    backgroundColor: '#009387',
    borderRadius: 10,
    width: '80%'
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff'
  }
});
export default DoctorDetailsScreen;
