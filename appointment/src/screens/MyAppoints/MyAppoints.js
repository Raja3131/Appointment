import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {useState, useEffect} from 'react';
import Api from '../../api/Api';
import {styles} from './styles';
import { AlertDialog, Button, Center, NativeBaseProvider } from "native-base";
import Message from '../../components/Common/Message/Message'
import { ActivityIndicator } from "react-native";
import { useFocusEffect } from '@react-navigation/native' 


const MyAppoints = ({navigation}) => {
  const [availableAppointments, setAvailableAppointments] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [showAlert, setShowAlert] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  
  const cancelRef = React.useRef(null);


  const [appointments, setAppointments] = useState([]);
  const onClose = () => setIsOpen(false);

    useFocusEffect(
        React.useCallback(() => {
            setIsLoading(true);
            Api.get('/appoints')
            .then(res => {
                setAppointments([...res.data.appoints]);
                setIsLoading(false);
            })
            .catch(err => {
                setIsLoading(false);
            })
        }, [])
    )
  const OnDelete = id => {
  
    
    Api.delete(`/appoints/${id}`)
      .then(res => {
        console.log(res);
        setAppointments(
        appointments.filter(appointment => appointment._id === id)
        );
        setIsOpen(false);

      }
      )

      .catch(err => {
        console.log(err);
      });
  };

  const OnReschedule = (id, name, date, time) => {
    navigation.navigate('Reschedule', {
      id,
      name,
      date,
      time,
    });
  };

  return (
    <>
      <NativeBaseProvider>
    <View style={styles.container}>
      <Text style={styles.header}>My Appointments</Text>
      
      
     

      {
        isLoading ? (
          <Center>
            <ActivityIndicator size="large" color="#0000ff"  />
          </Center>
        ) : (
        appointments.length === 0 ? (
         <Message
          message="You have no appointments"
          onDismiss={onClose}
          retry={false}
          retryFn={() => {
            setIsOpen(false);
          }
          }
          primary={true}
          info={true}
        />
        ) : (
      appointments.map(appointment => (
          


        <View style={styles.appointment}>
          <View style={styles.textContainer}>
          <Text style={styles.nameText}>{appointment.name}</Text>
          <Text style={styles.dateText}>{appointment.date}</Text>
          <Text style={styles.timeText}>{appointment.time}</Text>
   
          
          </View>
          <View style={styles.buttonContainer}>
          <Pressable
            onPress={() =>
              OnReschedule(
                appointment._id,
                appointment.name,
                appointment.date,
                appointment.time,
                
              )
            }
            style={styles.reschedule}>
            <Text style={styles.rescheduleText}>Reschedule</Text>
          </Pressable>
          </View>
      {
        appointments.map(appointment => (
          <View style={styles.alertBox}>
             <Button 
             style={styles.alertButton}
      
      colorScheme="danger" onPress={() => setIsOpen(!isOpen)}>
       Cancel Appoint
     </Button>

         {
            showAlert && (
              <Center 
              >
           
                
    
      <AlertDialog leastDestructiveRef={cancelRef} isOpen={isOpen} onClose={onClose}>
        <AlertDialog.Content>
          <AlertDialog.CloseButton />
          <AlertDialog.Header>Cancel Appoint</AlertDialog.Header>
          <AlertDialog.Body>
            This will remove all data relating to Alex. This action cannot be
            reversed. Deleted data can not be recovered.
          </AlertDialog.Body>
          <AlertDialog.Footer>
            <Button.Group space={2}>
              <Button variant="unstyled" colorScheme="coolGray" onPress={onClose} ref={cancelRef}>
                Cancel
              </Button>
              <Button colorScheme="danger" onPress={()=>OnDelete(appointment._id)}>
                Delete
              </Button>
            </Button.Group>
          </AlertDialog.Footer>
        </AlertDialog.Content>
      </AlertDialog>
    </Center>
            )

            

          }

          </View>
        ))
      }
      </View>

        
          
        
      ))))}
    </View>
    
          </NativeBaseProvider>
  
    </>
    
  );
};


export default MyAppoints;