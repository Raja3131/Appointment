/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useEffect} from 'react';
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
import RNBootSplash from "react-native-bootsplash";

const App = ()=>{
  useEffect(() => {
    setTimeout(() => {
      RNBootSplash.hide({fade: true});
    }, 3000);
  }, []);


  return(
    <>
      
        <AppNavContainer>
        </AppNavContainer>
    </>
  
  )
}





export default App;
