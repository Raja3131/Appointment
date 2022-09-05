import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './HomeNavigator';
import { Text, StatusBar } from 'react-native';
import DrawerNavigator from './DrawerNavigator';
import MyTabs from './TabNavigator';
import { useState } from 'react';
import AuthNavigator from './AuthNavigator';

const AppNavContainer = () => {
  const [splash, setSplash] = useState(true);

  return (
    <NavigationContainer>
      { 
        splash ?
      <AuthNavigator />
      :
      <MyTabs />
      } 
      {/* <DrawerNavigator /> */}
    </NavigationContainer>
  );
};

export default AppNavContainer;
