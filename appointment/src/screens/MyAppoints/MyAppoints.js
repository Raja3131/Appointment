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
import {
  Button,
  Modal,
  VStack,
  HStack,
  Radio,
  Center,
  NativeBaseProvider,
} from 'native-base';
import { url } from '../../utils/url';

const MyAppoints = ({ navigation }) => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [patient, setPatient] = useState([]);
  const [showModal,setShowModal] = useState(false);
  const [cancelledReason,setCancelledReason] = useState('');
  
  useFocusEffect(
    React.useCallback(() => {
      getAppointments();
    }, []),
  );
  const getAppointments = async () => {
    try {
      const response = await axios.get(
        `${url}/Calendar/ForMobileAPIPatientList/org1`,
      );
      setAppointments(response.data);

      setLoading(TextTrackCueList);
    } catch (error) {
      console.log('Error')
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
        'Cancel Appointment',
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
              Api.post(`${url}/Appointment/NewAppointment`, {
                file_No: FileNo,
                appointmentTranID: AppointmentTranID,
                national_ID_No: Math.floor(Math.random() * 10) + 1,
                app_date: Apptdate,
                appt_Time:moment(Appttime).subtract({hours:5,minutes:30}),
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
                CancelledDateTime: "2022-08-16T11:48:30.655Z",
                cancelledReason:cancelledReason
              })
                .then(() => {
                  Alert.alert('Appointment Cancelled Successfully')
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
    return appointments.reverse().map(appointment => (
      <View key={appointment.id} style={styles.appointment}>
        <Text style={styles.appointmentText}>
          {moment(appointment.Apptdate).format('Do-MMMM-YYYY')} -{' '}
          {moment(appointment.Appttime).format('hh:mm A')}
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
                null
                :
                <Text style={styles.appointmentButtonText}>Reschedule</Text>
              }
            
          </Pressable>
         {
          appointment.IsCancelled?
          null:
          <Pressable
          onPress={() => setShowModal(true)}
          style={styles.cancelButton}>
          <Text style={styles.appointmentButtonText}>Cancel</Text>
        </Pressable>
         }
         <NativeBaseProvider>
          <Center>
          <Modal
            isOpen={showModal}
            size="lg"
            onClose={() => setShowModal(false)}>
            <Modal.Content maxWidth="350">
              <Modal.CloseButton />
              <Modal.Header>Cancel Reason</Modal.Header>
              <Modal.Body>
                <Radio.Group name="payment">
                  <VStack space={3}>
                    <Radio
                      alignItems="flex-start"
                      _text={{
                        mt: '-1',
                        ml: '2',
                        fontSize: 'sm',
                      }}
                      value="Not Well"
                      onPress={() => setCancelledReason('Not Well')}

                    >
                      Not Well
                    </Radio>
                    <Radio
                      alignItems="flex-start"
                      _text={{
                        mt: '-1',
                        ml: '2',
                        fontSize: 'sm',
                      }}
                      value="Not in Station"
                      onPress={() => setCancelledReason('Not in Station')}
                    >
                      Not in Station
                    </Radio>
                    <Radio
                      alignItems="flex-start"
                      _text={{
                        mt: '-1',
                        ml: '2',
                        fontSize: 'sm',
                      }}
                      value="payment3"
                      onPress={() => setCancelledReason('Cured')}
                      >
                     Cured
                    </Radio>
                  </VStack>
                </Radio.Group>
              </Modal.Body>
              <Modal.Footer>
               <Button
                    flex="2"
                    onPress={() => {
                      deleteAppointment(appointment.FileNo,
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
                        )
                      setShowModal(false);
                    }}>
                    Cancel
                  </Button>
                  
                
              </Modal.Footer>
            </Modal.Content>
          </Modal>
          </Center>
         </NativeBaseProvider>
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