import React from 'react';
import {View, Text, StyleSheet, Pressable, Alert} from 'react-native';
import {useState, useEffect} from 'react';
import Api from '../../api/Api';
import {styles} from './styles';
import Message from '../../components/Common/Message/Message';
import {ActivityIndicator} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import doctors from '../../db/doctors';

const MyAppoints = ({navigation}) => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useFocusEffect(
    React.useCallback(() => {
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
        'Are you sure you want to cancel this appointment?',
        [
          {
            text: 'No',
            onPress: () => {
              setLoading(false);
              getAppointments();
            },
            style: 'cancel',
          },
          {
            text: 'Yes',
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

  const rescheduleAppointment = async (
    id,
    appointmentName,
    appointmentDate,
    appointmentTime,
    appointmentDoctor,

  ) => {
    navigation.navigate('Reschedule', {
      id,
      name: appointmentName,
      date: appointmentDate,
      time: appointmentTime,
      doctor: appointmentDoctor,
      
      

    });
  };

  const renderAppointments = () => {
    if (loading) {
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
      <View key={appointment.id} style={styles.appointment}>
        <Text style={styles.appointmentText}>
          {appointment.date} - {appointment.time}
        </Text>
        <Text style={styles.appointmentText}>
          {appointment.name}
        </Text>
        <Text style={styles.doctorText}>
        {
              doctors.map((
                doctor1) => {
                if (doctor1.id == appointment.doctor) {
                  return doctor1.name;
                }
              
            }
            )}
        </Text>
        <View style={styles.pressableView}>
          <Pressable
            onPress={() =>
              rescheduleAppointment(
                appointment._id,
                appointment.name,
                appointment.date,
                appointment.time,
                appointment.doctor
              )
            }
            style={styles.appointmentButton}>
            <Text style={styles.appointmentButtonText}>Reschedule</Text>
          </Pressable>
          <Pressable
            onPress={() => deleteAppointment(appointment._id)}
            style={styles.cancelButton}>
            <Text style={styles.appointmentButtonText}>Cancel</Text>
          </Pressable>
        </View>
      </View>
    ));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Appointments</Text>
      {renderAppointments()}
    </View>
  );
};

export default MyAppoints;
