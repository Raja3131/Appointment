import React from 'react'
import { useState } from "react";
import { StatusBar, FlatList,Button, Pressable,ScrollView,Image, Animated, Text, View, Dimensions, StyleSheet, TouchableOpacity, Easing, SafeAreaViewBase, SafeAreaView } from 'react-native';
const { width, height } = Dimensions.get('screen');
import { SearchBar } from 'react-native-elements';
import {
    StackNavigator,
  } from 'react-navigation';

import {useFocusEffect, useNavigation} from '@react-navigation/native';

  

const DoctorsScreen = ({navigation}) =>{
    const {setOptions, toggleDrawer} = useNavigation();
  



    const [selectedId, setSelectedId] = useState(null)
    const [animatePress, setAnimatePress] = useState(new Animated.Value(1))
    const [doctors,setDoctors] =useState([  {
        id: 1,
        name: 'Dr. John Doe',
        speciality: 'Cardiologist',
        image: require('../assets/images/doctor1.jpg')
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
   
 

 const filterSearch = (text)=>{


  
 }
const animateIn = () => {
    Animated.timing(animatePress, {
      toValue: 0.5,
      duration: 500,
      useNativeDriver: true // Add This line
    }).start();
  }
   
    return(
        <SafeAreaView style={styles.container}>
             
            <View>
            <SearchBar
        placeholder="Type Here..."
        onChangeText={filterSearch}
        value={''}
      />

            </View>
            <View style={styles.body}>
                <Animated.FlatList
                    data={doctors}
                   
                   
                    keyExtractor={item => item.id.toString()}

                    renderItem={({item,index}) => {
                        return(
                            <TouchableOpacity
                               onPress={() =>animateIn}
                                 
                                style={styles.doctor}
                            style={[styles.doctorContainer, selectedId === item.id ? styles.doctorContainerSelected : null]}
                            >
                                <Image source={item.image} style={styles.doctorImage}/>
                                <View style={styles.doctorInfo}>
                                    <Text style={styles.doctorName}>{item.name}</Text>
                                    <Text style={styles.doctorSpeciality}>{item.speciality}</Text>
                                    <Pressable
                                        onPress={() => navigation.navigate('DoctorProfile',{
                                            id: item.id,
                                         })}
                                        style={styles.button}
                                       
                                        >
                                        <Text style={styles.text}>View Profile</Text>
                                    </Pressable>
                                  
                                

                                       
                                    

                                </View>
                            </TouchableOpacity>
                        )
                    }}
                 />
            </View>
        </SafeAreaView>

        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        
     
        
    },
    header: {
        height: height * 0.1,
        backgroundColor: '#00BFFF',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    headerText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    body: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingVertical: 20,
        padding: 10,
        shadowOffset: { width: 0, height: 10 },
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 10,
        elevation: 2,
    },
    doctorItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
      
    },
    doctorImage: {
        width: 80,
        height: 80,
        borderRadius: 40,
    },
    doctorInfo: {
        flex: 1,
        marginLeft: 20,
    },
    doctorName: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    doctorSpeciality: {
        fontSize: 15,
        color: '#aaa',
    },
    // button: {
    //     alignItems: 'center',
    //     backgroundColor: '#009387',
    //     padding: 20,
    //     margin: 20,
    //     borderRadius: 20,
    // },
    doctorButtonText:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',

    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
      },
      text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
      },
});

export default DoctorsScreen