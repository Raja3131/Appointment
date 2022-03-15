import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './HomeNavigator';
import {Text, StatusBar} from 'react-native';
import DrawerNavigator from './DrawerNavigator';
const AppNavContainer = () => {
  return (
    <NavigationContainer>
      {/* <HomeScreen /> */}
      <DrawerNavigator />
    </NavigationContainer>
  );
};

export default AppNavContainer;
