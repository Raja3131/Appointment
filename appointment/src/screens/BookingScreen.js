import React from 'react'
import { Text, View, Image, Button, StyleSheet, Pressable, TouchableHighlight } from "react-native";
import { useState, useEffect } from "react";
import doctors from '../db/doctors'
import TimeSlot from '../db/TimeSlot';




const Booking = ({route,navigation})=>{

    

    const {date} = route.params;
    const {select} = route.params;
    const {doctorId} = route.params;

  
   
 


    return(
        <>
        <View style={styles.docInfo}>
            <Image style={styles.docImage} source={doctors.find(doctor=>doctor.id===doctorId).image} />

            <Text style={styles.docName}>{doctors.find(doctor=>doctor.id===doctorId).name}</Text>
            <Text style={styles.docSpeciality}>{doctors.find(doctor=>doctor.id===doctorId).speciality}</Text>
            </View>
            <View style={styles.datePicker}>
            <Text style={styles.datePickerButtonText}>{date.toDateString()}</Text>
            </View>
            <View>
            <Text style={styles.timeSlot}>{select.startTime}</Text>

            </View>

          

       
        </>
    )

       
}

const styles = StyleSheet.create({
    docInfo: {
        marginTop: 20,
        marginHorizontal: 20
    },
    docImage: {
        width: 100,
        height: 100,
        borderRadius: 50
    },
    docName: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10
    },
    docSpeciality: {
        fontSize: 16,
        color: '#8E8E93'
    },
    datePicker: {
        marginTop: 20,
        marginHorizontal: 20
    },
    datePickerButton: {
        backgroundColor: '#F0F0F0',
        padding: 10,
        borderRadius: 5
    },
    datePickerButtonText: {
        fontSize: 16,
        color: '#8E8E93'
    },
    timeSlot: {
        marginTop: 20,
        marginHorizontal: 20
    },
    timeSlotItem: {
        backgroundColor: '#F0F0F0',
        padding: 10,
        borderRadius: 5,
        marginBottom: 5
    },
    timeSlotItemSelect: {
        backgroundColor: '#DCDCDC'
    },
    timeSlotItemText: {
        fontSize: 16,
        color: '#8E8E93'
    }
})
export default Booking