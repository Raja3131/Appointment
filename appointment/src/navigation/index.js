import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './HomeNavigator';
import {Text, StatusBar} from 'react-native';
import DrawerNavigator from './DrawerNavigator';
import MyTabs from './TabNavigator';
import {QueryClientProvider,QueryClient} from 'react-query'

const AppNavContainer = () => {
  const queryClient = new QueryClient();


  

  return (
    <NavigationContainer>
      {/* <HomeScreen /> */}
      {/* <DrawerNavigator /> */}
      <QueryClientProvider client={queryClient}>
      <MyTabs />


                </QueryClientProvider>
    </NavigationContainer>
  );
};

export default AppNavContainer

