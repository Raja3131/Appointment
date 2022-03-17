import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './HomeNavigator';
import {Text, StatusBar} from 'react-native';
import DrawerNavigator from './DrawerNavigator';
import MyTabs from './TabNavigator';
const AppNavContainer = () => {


  

  return (
    <NavigationContainer>
      {/* <HomeScreen /> */}
      {/* <DrawerNavigator /> */}
      <MyTabs />
    </NavigationContainer>
  );
};

export default AppNavContainer

