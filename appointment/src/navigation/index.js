import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './HomeNavigator';
import {Text, StatusBar} from 'react-native';
import DrawerNavigator from './DrawerNavigator';
import MyTabs from './TabNavigator';
import {Provider} from 'react-redux'
import store from '../features/appoints/store';

const AppNavContainer = () => {


  

  return (
    <Provider store={store}>

    <NavigationContainer>
      {/* <HomeScreen /> */}
      {/* <DrawerNavigator /> */}
      <MyTabs />


    </NavigationContainer>
    </Provider>
  );
};

export default AppNavContainer

