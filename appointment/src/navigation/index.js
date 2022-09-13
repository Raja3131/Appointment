import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './HomeNavigator';
import { Text, StatusBar } from 'react-native';
import DrawerNavigator from './DrawerNavigator';
import MyTabs from './TabNavigator';
import { useState } from 'react';
import AuthNavigator from './AuthNavigator';
import { AuthContext } from '../components/context';
import { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


const AppNavContainer = () => {
  const [splash, setSplash] = useState(true);
  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null); 


  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
  };
 const loginReducer = (prevState, action) => {
   switch( action.type ) {
     case 'RETRIEVE_TOKEN': 
       return {
         ...prevState,
         userToken: action.token,
         isLoading: false,
       };
     case 'LOGIN': 
       return {
         ...prevState,
         userName: action.id,
         userToken: action.token,
         isLoading: false,
       };
     case 'LOGOUT': 
       return {
         ...prevState,
         userName: null,
         userToken: null,
         isLoading: false,
       };
     case 'REGISTER': 
       return {
         ...prevState,
         userName: action.id,
         userToken: action.token,
         isLoading: false,
       };
   }
 };

 const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);

 const authContext = React.useMemo(() => ({
   signIn: async(foundUser) => {
    //  setUserToken('fgkj');
    //  setIsLoading(false);
     const userToken = String(foundUser[0].userToken);
     const userName = foundUser[0].username;
     
     try {
      //  await AsyncStorage.setItem('userToken', userToken);
     } catch(e) {
       console.log(e);
     }
     // console.log('user token: ', userToken);
     dispatch({ type: 'LOGIN', id: userName, token: userToken });
   },
  //  signOut: async() => {
  //    // setUserToken(null);
  //    // setIsLoading(false);
  //    try {
  //      await AsyncStorage.removeItem('userToken');
  //    } catch(e) {
  //      console.log(e);
  //    }
  //    dispatch({ type: 'LOGOUT' });
  //  },
  //  signUp: () => {
  //    // setUserToken('fgkj');
  //    // setIsLoading(false);
  //  },
   
 }), []);

 useEffect(()=>{
  console.log(authContext)
 },[])
 


  return (
    <AuthContext.Provider value={authContext}>
    <NavigationContainer>
    { loginState.userToken === null ? 
      <AuthNavigator />
      :
      <MyTabs />
      } 
      {/* <DrawerNavigator /> */}
    </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default AppNavContainer;
