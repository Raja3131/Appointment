import React from 'react'
import { useState } from "react";
import { StatusBar, FlatList, ScrollView,Image, Animated, Text, View, Dimensions, StyleSheet, TouchableOpacity, Easing, SafeAreaViewBase, SafeAreaView } from 'react-native';
const { width, height } = Dimensions.get('screen');

const DoctorsScreen = () =>{
    const [selectedId, setSelectedId] = useState(null)
    const [animation] = useState(new Animated.Value(0))
    return(
        <SafeAreaView style={styles.container}>
            
            <View style={styles.header}>
                <Text style={styles.headerText}>Doctors</Text>
            </View>
            <View style={styles.body}>
                <FlatList
                    data={[
                        {
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
                       
                    ]}
                   renderItem={({item}) => {
                       return(
                           <TouchableOpacity
                           onPress={() => {
                               setSelectedId(item.id)
                           }}
                           style={[styles.doctorContainer, selectedId === item.id ? styles.doctorContainerSelected : null]}
                           >
                               <Image source={item.image} style={styles.doctorImage}/>
                               <View style={styles.doctorInfo}>
                                   <Text style={styles.doctorName}>{item.name}</Text>
                                   <Text style={styles.doctorSpeciality}>{item.speciality}</Text>
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
});

export default DoctorsScreen