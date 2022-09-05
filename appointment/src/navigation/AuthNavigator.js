import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from '../screens/SignIn/SignIn'
import SignUpScreen from './../screens/SignUp/SignUp';
import SplashScreen from '../screens/Splash/Splash'
import { ROUTE_NAMES } from '../constants/routeNames';


const AuthNavigator = () => {
    const AuthStack = createNativeStackNavigator();
    return (
      <AuthStack.Navigator>
        <AuthStack.Screen name='SplashScreen' options={{ headerShown: false }} component={SplashScreen} />
        <AuthStack.Screen name={ROUTE_NAMES.LOGIN} options={{ headerShown: false }} component={SignInScreen} />
        <AuthStack.Screen name={ROUTE_NAMES.REGISTER} options={{ headerShown: false }} component={SignUpScreen} />
      </AuthStack.Navigator>
    );
  };
  
  export default AuthNavigator

  