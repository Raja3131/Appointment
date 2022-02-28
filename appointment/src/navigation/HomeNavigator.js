import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {View,Text} from 'react-native'
import DoctorsScreen from './../screens/DoctorsScreen';

const HomeScreen = () => {
    const HomeStack = createNativeStackNavigator();
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="Home" component={DoctorsScreen} />
        </HomeStack.Navigator>
    );
};

export default HomeScreen;