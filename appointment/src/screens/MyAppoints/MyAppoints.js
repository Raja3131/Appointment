import React from 'react';
import {
  View,
  Text,
  Pressable,
  Alert,
  ScrollView,
} from 'react-native';
import { useState, useEffect } from 'react';
import Api from '../../api/Api';
import { styles } from './styles';
import Message from '../../components/Common/Message/Message';
import { ActivityIndicator } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import doctors from '../../db/doctors';
import axios from 'axios';
import moment from 'moment';

const MyAppoints = ({ navigation }) => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [patient, setPatient] = useState([]);
  useFocusEffect(
    React.useCallback(() => {
      getAppointments();
    }, []),
  );
  const getAppointments = async () => {
    try {
      const response = await axios.get(
        'http://192.168.0.112:45455/Calendar/ForMobileAPIPatientList/org1',
      );
      setAppointments(response.data);
      setLoading(TextTrackCueList);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  };
  const deleteAppointment = async (
    FileNo,
    AppointmentTranID,
    NationalityIDNo,
    title,
    FirstName,
    LastName,
    ArabicName,
    Age,
    DOB,
    Gender,
    Address,
    Apptdate,
    Appttime,
    DoctorName,
  ) => {
    if (FileNo) {
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
              Api.post(`http://192.168.0.112:45455/Appointment/NewAppointment`, {
                file_No: FileNo,
                appointmentTranID: AppointmentTranID,
                national_ID_No: "22",
                app_date: Apptdate,
                appt_Time: Appttime,
                firstName: FirstName,
                lastName: LastName,
                nickName: 'string',
                arabicName: 'قابيل م",',
                age: 22,
                dob: "2019-08-12T09:51:01.26",
                phoneNumber: "9846123123",
                gender: "2",
                address: 'Chennai',
                doctorName: "Ayisha",
                activeSubmitForm: 'Cancel',

                organizationID: "org1",
                CancelledBy: "Mobile",
                CancelledDateTime: "2022-08-16T11:48:30.655Z"
              })
                .then(() => {
                  getAppointments();
                })
                .catch(() => {
                  setLoading(false);
                });
            },
          },
        ],
        { cancelable: false },
      );
    }
  };

  const rescheduleAppointment = async (
    FileNo,
    AppointmentTranID,
    NationalityIDNo,
    title,
    FirstName,
    LastName,
    ArabicName,
    Age,
    DOB,
    Gender,
    Address,
    Apptdate,
    Appttime,
    DoctorName,
  ) => {
    navigation.navigate(
      'Reschedule',
      {
        FileNo,
        AppointmentTranID,
        NationalityIDNo,
        title,
        FirstName,
        LastName,
        ArabicName,
        Age,
        DOB,
        Gender,
        Address,
        Apptdate,
        Appttime,
        DoctorName
      },
    );
  };

  const renderAppointments = () => {
    if (loading) {
      return <ActivityIndicator size="large" color="#0000ff" />;
    }

    if (appointments.length === 0 ) {
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
          {moment(appointment.Apptdate).format('MMMM Do YYYY')} -{' '}
          {moment.utc(appointment.Appttime).local().add(1, 'hours').format('h:mm p')}m
        </Text>
        {/* <Text style={styles.idText}>{appointment.FileNo}</Text>  */}
       {
        appointment.IsCancelled?
        <Text style={styles.idText}>Cancelled</Text>
        :
        <Text style={styles.idText}>Open</Text>
       }
        <Text style={styles.appointmentText}>{appointment.FirstName}</Text>
        
        <Text style={styles.doctorText}>
          {doctors.map(doctor1 => {
            if (doctor1.id == appointment.doctor) {
              return doctor1.name;
            }
          })}
        </Text>
        <View style={styles.pressableView}>
          <Pressable
            onPress={() => {

              rescheduleAppointment(
                appointment.FileNo,
                appointment.AppointmentTranID,
                appointment.NationalityIDNo,
                appointment.title,
                appointment.FirstName,
                appointment.LastName,
                appointment.ArabicName,
                appointment.Age,
                appointment.DOB,
                appointment.Gender,
                appointment.Address,
                appointment.Apptdate,
                appointment.Appttime,
                appointment.DoctorName,
              );
            }
            }
            style={styles.appointmentButton}>
              {
                appointment.IsCancelled?
                <Text style={styles.appointmentButtonText}>ReAppoint</Text>
                :
                <Text style={styles.appointmentButtonText}>Reschedule</Text>
              }
            
          </Pressable>
          <Pressable
            onPress={() => deleteAppointment(appointment.FileNo,
              appointment.AppointmentTranID,
              appointment.NationalityIDNo,
              appointment.title,
              appointment.FirstName,
              appointment.LastName,
              appointment.ArabicName,
              appointment.Age,
              appointment.DOB,
              appointment.Gender,
              appointment.Address,
              appointment.Apptdate,
              appointment.Appttime,
              appointment.DoctorName,)}
            style={styles.cancelButton}>
            <Text style={styles.appointmentButtonText}>Cancel</Text>
          </Pressable>
        </View>
      </View>
    ));
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Your Appointments</Text>
        {renderAppointments()}
      </View>
    </ScrollView>
  );
};
export default MyAppoints;
