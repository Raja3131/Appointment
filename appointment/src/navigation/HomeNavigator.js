import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {View,Text,Button} from 'react-native'
import DoctorsScreen from '../screens/DoctorsList/DoctorsScreen';
import DoctorDetailsScreen from '../screens/DoctorDetails/DoctorDetailsScreen';
import Appointment from '../screens/Appointment/Appointment';
import PatientDetails from '../screens/Patient/Patient';
import RescheduleScreen from '../screens/Reschedule/RescheduleScreen';
import CashScreen from '../screens/Cash/CashScreen';
import SplashScreen from '../screens/Splash/Splash';
import ViewDetails from '../screens/ViewDetails/ViewDetails';

const HomeScreen = () => {

    const HomeStack = createNativeStackNavigator();
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen options={{ headerShown: false }} name="Patients" component={PatientDetails} />
            <HomeStack.Screen options={{ headerShown: false }} name="Doctors" component={DoctorsScreen}/>
            <HomeStack.Screen name="DoctorProfile" component={DoctorDetailsScreen} />
            <HomeStack.Screen name="Appointment" component={Appointment} />
            <HomeStack.Screen name="Reschedule" component={RescheduleScreen} />
            <HomeStack.Screen name="Cash" component={CashScreen} />
            <HomeStack.Screen name="View" component={ViewDetails} />
        </HomeStack.Navigator>
    );
};

export default HomeScreen;