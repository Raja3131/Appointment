import React from 'react';
// import {createStackNavigator} from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignInScreen from '../screens/SignIn/SignIn'
import SignUpScreen from './../screens/SignUp/SignUp';


const AuthNavigator = () => {
    const AuthStack = createNativeStackNavigator();
    return (
      <AuthStack.Navigator screenOptions={{headerShown: false}}>
        <AuthStack.Screen name='SignInScreen' component={SignInScreen} />
        <AuthStack.Screen name='SignUpScreen' component={SignUpScreen} />
      </AuthStack.Navigator>
    );
  };
  
  export default AuthNavigator;