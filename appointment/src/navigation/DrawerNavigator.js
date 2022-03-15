import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import {Dimensions} from 'react-native';
import HomeStackNavigator from './HomeNavigator';
import PatientDetails from '../screens/Patient';


const DrawerNavigator = () => {
    const Drawer = createDrawerNavigator();

    return (
        <Drawer.Navigator initialRouteName='Back'
        screenOptions={{
            drawerStyle: {
              backgroundColor: '#fff',
              width: 200,
            },
            drawerLabelStyle: {
                color: '#009387',
                fontWeight: 'bold',
                fontSize: 20,
            },

            
          }}
          >
                <Drawer.Screen name="Home" component={HomeStackNavigator} />
                <Drawer.Screen name="Patient" component={PatientDetails} />
          </Drawer.Navigator>
     );
    }
       

        
   
  export default DrawerNavigator;