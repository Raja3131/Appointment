import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {View,Text,Button} from 'react-native'
import DoctorsScreen from './../screens/DoctorsScreen';
import DoctorDetailsScreen from './../screens/DoctorDetailsScreen';
import Appointment from './../screens/Appointment';
import BookingScreen from './../screens/BookingScreen';
import PatientDetails from '../screens/Patient';


const HomeScreen = () => {

    const HomeStack = createNativeStackNavigator();
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen options={{ headerShown: false }} name="Patients" component={PatientDetails} />
            <HomeStack.Screen name="Doctors" component={DoctorsScreen} />
            <HomeStack.Screen name="DoctorProfile" component={DoctorDetailsScreen} />
            <HomeStack.Screen name="Appointment" component={Appointment} />
            <HomeStack.Screen name="Booking" component={BookingScreen} />

        </HomeStack.Navigator>
    );
};

export default HomeScreen;