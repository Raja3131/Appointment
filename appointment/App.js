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

const App = ()=>{

  return(
    <>
        <AppNavContainer>
        <StatusBar  backgroundColor={'#ffffff00'} />

        </AppNavContainer>
    </>
  
  )
}





export default App;
