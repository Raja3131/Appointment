import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {View,Text,Button} from 'react-native'
import DoctorsScreen from './../screens/DoctorsScreen';
import DoctorDetailsScreen from './../screens/DoctorDetailsScreen';


const HomeScreen = () => {

    const HomeStack = createNativeStackNavigator();
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="Home" component={DoctorsScreen} />
            <HomeStack.Screen name="DoctorProfile" component={DoctorDetailsScreen} />
        </HomeStack.Navigator>
    );
};

export default HomeScreen;