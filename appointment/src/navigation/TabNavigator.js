import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';
import HomeScreen from './HomeNavigator';
import DoctorScreen from './../screens/DoctorsScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import MyAppoints from './../screens/MyAppoints';

const Tab = createBottomTabNavigator();

const MyTabs = ()=> {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen}  options={({route}) => ({
          tabBarStyle: {
            backgroundColor: '#009387',
          },
          headerShown: false,
          tabBarLabel: ({focused, color, size}) => (
            <Text style={{color: focused ? 'black' : color}}>Home</Text>
          ),
          tabBarIcon: ({color, size}) => (
            <Feather name="home" color={'#fff'} size={size} />
          ),
        })} />
      <Tab.Screen name="Doctors" component={DoctorScreen}  options={({route}) => ({
          tabBarStyle: {
            backgroundColor: '#009387',
          },
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Feather name="user" color={'#fff'} size={size}  />
          ),
          tabBarLabel: ({focused, color, size}) => (
            <Text style={{color: focused ? 'black' : color}}>Doctors</Text>
          ),
        })} />
      <Tab.Screen name="MyAppoints" component={MyAppoints}  options={({route}) => ({
          tabBarStyle: {
            backgroundColor: '#009387',
          },
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Feather name="calendar" color={'#fff'} size={size}  />
          ),
          tabBarLabel: ({focused, color, size}) => (
            <Text style={{color: focused ? 'black' : color}}>My Appointments</Text>
          ),
        })} />
    </Tab.Navigator>
  )
}


export default MyTabs;