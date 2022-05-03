import React from 'react';
import {View, Text, StyleSheet, Pressable, Alert} from 'react-native';
import {useState, useEffect, useContext} from 'react';
import Api from '../../api/Api';
import {styles} from './styles';
import Message from '../../components/Common/Message/Message';
import {ActivityIndicator} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import {AppointsContext} from '../../context/Provider';
import getAppoints from '../../context/actions/appoints/getAppoints';
const MyAppoints = ({navigation}) => {
  const [appointments, setAppointments] = useState([]);
  const [loading1, setLoading] = useState(true);
  const [error1, setError] = useState(false);

  useFocusEffect(
    React.useCallback(() => {
      console.log('useFocusEffect');

      getAppointments();
    }, []),
  );

  const getAppointments = async () => {
    try {
      const response = await Api.get('/appoints');
      setAppointments(response.data.appoints);
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  };

  const deleteAppointment = id => {
    if (id) {
      setLoading(true);
      Alert.alert(
        'Delete Appointment',
        'Are you sure you want to delete this appointment?',
        [
          {
            text: 'Cancel',
            onPress: () => {
              setLoading(false);
              getAppointments();
            },
            style: 'cancel',
          },
          {
            text: 'OK',
            onPress: () => {
              Api.delete(`/appoints/${id}`)
                .then(() => {
                  getAppointments();
                })
                .catch(() => {
                  setLoading(false);
                });
            },
          },
        ],
        {cancelable: false},
      );
    }
  };

  const rescheduleAppointment = async (id, date) => {
    navigation.navigate('Reschedule', {id, date});
  };

  const renderAppointments = () => {
    if (loading1) {
      return <ActivityIndicator size="large" color="#0000ff" />;
    }

    if (appointments.length === 0) {
      return (
        <>
          <Message message="No Appointments" primary />
          <Pressable
            style={styles.addButton}
            onPress={() => navigation.navigate('Patients')}>
            <Text style={styles.addText}>Create Appointment</Text>
          </Pressable>
        </>
      );
    }
    return appointments.map(appointment => (
      <>

      <View key={appointment.id} style={styles.appointment}>
        <Text style={styles.appointmentText}>
          {appointment.date} - {appointment.time}
        </Text>
        <Text style={styles.appointmentName}>{appointment.name}</Text>
        <View style={styles.pressableView}>
          <Pressable
            onPress={() =>
              rescheduleAppointment(
                appointment._id,
                appointment.name,
                appointment.date,
                appointment.time,
              )
            }
            style={styles.appointmentButton}>
            <Text style={styles.appointmentButtonText}>Reschedule</Text>
          </Pressable>
          <Pressable
            onPress={() => deleteAppointment(appointment._id)}
            style={styles.appointmentButton}>
            <Text style={styles.appointmentButtonText}>Delete</Text>
          </Pressable>
        </View>
        </View>
       
      
      </>
    ));
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>My Appointments</Text>
      </View>
      {renderAppointments()}
    </View>
  );
};

export default MyAppoints;
