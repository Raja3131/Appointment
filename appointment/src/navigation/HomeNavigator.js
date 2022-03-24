import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {View,Text,Button} from 'react-native'
import DoctorsScreen from '../screens/DoctorsList/DoctorsScreen';
import DoctorDetailsScreen from '../screens/DoctorDetails/DoctorDetailsScreen';
import Appointment from '../screens/Appointment/Appointment';
import PatientDetails from '../screens/Patient/Patient';
import RescheduleScreen from '../screens/Reschedule/RescheduleScreen';


const HomeScreen = () => {

    const HomeStack = createNativeStackNavigator();
    return (
        <HomeStack.Navigator initialRouteName='Patients'>
            <HomeStack.Screen options={{ headerShown: false }} name="Patients" component={PatientDetails} />
            <HomeStack.Screen options={{ headerShown: false }} name="Doctors" component={DoctorsScreen}/>
            <HomeStack.Screen name="DoctorProfile" component={DoctorDetailsScreen} />
            <HomeStack.Screen name="Appointment" component={Appointment} />
            <HomeStack.Screen name="Reschedule" component={RescheduleScreen} />

        </HomeStack.Navigator>
    );
};

export default HomeScreen;