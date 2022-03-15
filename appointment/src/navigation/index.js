import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './HomeNavigator';
import {Text, StatusBar} from 'react-native';
const AppNavContainer = () => {
  return (
    <NavigationContainer>
      <HomeScreen />
    </NavigationContainer>
  );
};

export default AppNavContainer;
