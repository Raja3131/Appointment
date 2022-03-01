import React from 'react'
import { Text,View,Image,Button,StyleSheet,Pressable } from "react-native";
import { useState } from "react";


const Appointment = ({route,navigation}) =>{
    const {id} = route.params;

    return(
        <View style={styles.container}>
            <Text>Appointment</Text>
            

        </View>
    )

}