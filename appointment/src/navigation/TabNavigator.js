import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text} from 'react-native';
import HomeScreen from './HomeNavigator';
import DoctorScreen from '../screens/DoctorsList/DoctorsScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import MyAppoints from '../screens/MyAppoints/MyAppoints';
import {useState, useEffect} from 'react';
import Api from '../api/Api';

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [appointments, setAppointments] = useState([]);
  useEffect(() => {
    Api.get('/appoints')
      .then(res => {
        setAppointments([...res.data.appoints]);
        setIsLoading(false);
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [setAppointments, setIsLoading]);

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={({route}) => ({
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
        })}
      />
      <Tab.Screen
        name="Doctors"
        component={DoctorScreen}
        options={({route}) => ({
          tabBarStyle: {
            backgroundColor: '#009387',
          },
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Feather name="user" color={'#fff'} size={size} />
          ),
          tabBarLabel: ({focused, color, size}) => (
            <Text style={{color: focused ? 'black' : color}}>Doctors</Text>
          ),
        })}
      />
      <Tab.Screen
        name="MyAppoints"
        component={MyAppoints}
        options={({route}) => ({
          tabBarStyle: {
            backgroundColor: '#009387',
          },
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Feather name="calendar" color={'#fff'} size={size} />
          ),
          tabBarLabel: ({focused, color, size}) => (
            <Text style={{color: focused ? 'black' : color}}>
              My Appointments
            </Text>
          ),
        })}
      />
    </Tab.Navigator>
  );
};

export default MyTabs;
