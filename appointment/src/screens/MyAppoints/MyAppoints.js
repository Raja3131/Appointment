import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {useState, useEffect} from 'react';
import Api from '../../api/Api';
import {styles} from './styles';
import { AlertDialog, Button, Center, NativeBaseProvider } from "native-base";

const MyAppoints = ({navigation}) => {

  const [isLoading, setIsLoading] = useState(true);
  const [showAlert, setShowAlert] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const cancelRef = React.useRef(null);


  const [appointments, setAppointments] = useState([]);
  const onClose = () => setIsOpen(false);

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
  const OnDelete = id => {
  
    
    Api.delete(`/appoints/${id}`)
      .then(res => {
        console.log(res);
        setAppointments(
          appointments.filter(appointment => appointment._id !== id),
        );
      })
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

      {appointments.map(appointment => (
        <View style={styles.appointment}>
          <View style={styles.textContainer}>
          <Text style={styles.nameText}>{appointment.name}</Text>
          <Text style={styles.dateText}>{appointment.date}</Text>
          <Text style={styles.timeText}>{appointment.time}</Text>
          
          </View>
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

          <Pressable
            style={styles.delete}
            onPress={() => OnDelete(appointment._id)}>
            <Text style={styles.cancelText}>Cancel</Text>
          </Pressable>
          <Pressable
            style={styles.alert}
            onPress={() => setShowAlert(true)}>
           
            <Text style={styles.cancelText}>Cancel</Text>
          </Pressable>
        
        </View>
      ))}
    </View>
    
      {
        appointments.map(appointment => (
          <View style={styles.alertBox}>

         {
            showAlert && (
              <Center>
      <Button colorScheme="danger" onPress={() => setIsOpen(!isOpen)}>
        Delete Customer
      </Button>
      <AlertDialog leastDestructiveRef={cancelRef} isOpen={isOpen} onClose={onClose}>
        <AlertDialog.Content>
          <AlertDialog.CloseButton />
          <AlertDialog.Header>Delete Customer</AlertDialog.Header>
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
      
          </NativeBaseProvider>
  
    </>
    
  );
};


export default MyAppoints;
