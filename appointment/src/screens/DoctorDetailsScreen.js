import React from "react";
import { Text,View,Image,Button,StyleSheet,Pressable } from "react-native";
import { useState } from "react";
const DoctorDetailsScreen = ({route,navigation}) => {
  const {id} = route.params;
  const [doctors,setDoctors] =useState([  {
    id: 1,
    name: 'Dr. John Doe',
    speciality: 'Cardiologist',
    image: require('../assets/images/doctor1.jpg'),
    about:'Dr. Seth is the most renowned cardiologist in India. At present, he has operated more than 50,000 angiograms and 20,000 angioplasties. ',
},
{
    id: 2,
    name: 'Dr. John Doe',
    speciality: 'Cardiologist',
    image: require('../assets/images/doctor2.jpg')
},
{
    id: 3,
    name: 'Dr. John Doe',
    speciality: 'Cardiologist',
    image: require('../assets/images/doctor3.jpg')
},
{
    id: 4,
    name: 'Dr. John Doe',
    speciality: 'Cardiologist',
    image: require('../assets/images/doctor4.jpg')
},
{
    id: 5,
    name: 'Dr. John Doe',
    speciality: 'Cardiologist',
    image: require('../assets/images/doctor5.jpg')
},
{
    id: 6,
    name: 'Dr. John Doe',
    speciality: 'Cardiologist',
    image: require('../assets/images/doctor1.jpg')
},
{
    id: 7,
    name: 'Dr. John Doe',
    speciality: 'Cardiologist',
    image: require('../assets/images/doctor2.jpg')
},
{
    id: 8,
    name: 'Dr. John Doe',
    speciality: 'Cardiologist',
    image: require('../assets/images/doctor3.jpg')
},
{
    id: 9,
    name: 'Dr. John Doe',
    speciality: 'Cardiologist',
    image: require('../assets/images/doctor4.jpg')
},
{
    id: 10,
    name: 'Dr. John Doe',
    speciality: 'Cardiologist',
    image: require('../assets/images/doctor5.jpg')
},
])

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={doctors.find(doctor=>doctor.id===id).image}/>
      <Text style={styles.name}>{doctors.find(doctor=>doctor.id===id).name}</Text>
      <Text style={styles.speciality}>{doctors.find(doctor=>doctor.id===id).speciality}</Text>
      <Text style={styles.about}>{doctors.find(doctor=>doctor.id===id).about}</Text>
      <Pressable style={styles.button} onPress={()=>navigation.navigate('Appointment',{doctorId:id})}>
        <Text style={styles.buttonText}>Book Appointment</Text>
      </Pressable>
    </View>
  );
    
};
const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  image:{
    width:300,
    height:300,
    borderRadius:100
  },
  name:{
    fontSize:24,
    fontWeight:'bold'
  },
  speciality:{
    fontSize:18
  },
  about:{
    marginTop:10,
    fontSize:16,
    color:'#888',
    width:'80%',
    lineHeight:25,

  },
  button:{
    marginTop:24,
    paddingVertical:12,
    paddingHorizontal:30,
    backgroundColor:'#00a8ff',
    borderRadius:10,
    width:'80%'
  },
  buttonText:{
    fontSize:18,
    color:'#fff'
  }
});
export default DoctorDetailsScreen;
