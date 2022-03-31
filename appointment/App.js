/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View
} from 'react-native';
import AppNavContainer from './src/navigation/index';
import {AppointsContextProvider} from './src/context/Provider';

const App = ()=>{

  return(
    <>
      <AppointsContextProvider>
        <AppNavContainer>
       

        </AppNavContainer>
      </AppointsContextProvider>
    </>
  
  )
}





export default App;
