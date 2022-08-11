import React from 'react';
import { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Alert,
  TextInput,
  TouchableHighlight,
  Pressable,
} from 'react-native';
import Api from '../../api/Api';
import TimeSlot from '../../db/TimeSlot';
import DateTimePicker from '@react-native-community/datetimepicker';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { styles } from './styles';
import doctors from '../../db/doctors';
import moment from 'moment';
import { number } from 'prop-types';
import axios from 'axios';

const RescheduleScreen = ({ route, navigation }) => {
  let currentDate = new Date();
  let currentHour = currentDate.getHours();

  const { id: id } = route.params;
  const { name: appointmentName } = route.params;
  const { date: appointmentDate } = route.params;
  const { time: appointmentTime } = route.params;
  const { doctor: appointmentDoctor } = route.params;
  const [appointments, setAppointments] = useState([]);
  const [name1, setName] = useState(`${appointmentName}`);
  const [date, setDate] = useState('Select Date');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [time1, setTime] = useState(`${appointmentTime}`);
  const [doctor, setDoctor] = useState(`${appointmentDoctor}`);
  const [mode, setMode] = useState('date');
  const [timeSlot, setTimeSlot] = useState([]);
  const [select, setSelect] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeSlot(TimeSlot);
    console.log(doctors)
  });
  useEffect(() => {
  }, []);
const confirmReschedule = () => {
    Alert.alert(
      'Confirm Reschedule',
      'Are you sure you want to reschedule this appointment?',
      [
        {
          text: 'No',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        { text: 'Yes', onPress: () => reschedule() },
      ],
      { cancelable: false },
    );
  }
  // firstname,
  // lastname: "",
  // gender: "Male",
  // app_date,
  // appt_Time,
  // dob: "1995-07-10 05:30:00.000",
  // phoneNumber,
  // age,
  // address,
  // arabicname: "اجاسي كريس ج",
  // national_ID_No: "22",
  // organizationID: "org1",
  // ActiveSubmitForm: ""

  const reschedule = () => {
    Api.post(`http://192.168.0.112:45455/Appointment/NewAppointment`, {     
      FileNo:id,
      app_date: "2022-08-11T12:19:35.449Z",
      appt_Time: "2022-08-11T12:19:35.449Z",
    }).then(res => {
      // if (!date || !select.startTime) {
      //   Alert.alert('Please fill all the fields');
      // } else {

        console.log(res);
        setName('');
        navigation.navigate('MyAppoints', appointments);
      // }
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.appointDetailsContainer}>
      <Text style={styles.idText}>{id}</Text>

        <Text style={styles.detailsText}>PatientName :  {appointmentName}</Text>
        <Text style={styles.detailsText}>Date :
          {
            `${moment(selectedDate).format('MMMM Do YYYY')
            } `
          }
        </Text>
        <Text>Time:{
          `${appointmentTime} `
        }</Text>
        <View>
          <Text style={styles.detailsText}>
            DoctorName:
            {
              doctors.map((
                doctor1) => {
                if (doctor1.id == doctor) {
                  return doctor1.name;
                }
              }
              )}
          </Text>
        </View>
      </View>
      <Text style={styles.header}>Reschedule Your Appointment</Text>
      <View style={styles.datePicker}>
        <View style={styles.CalendarIconStyle}></View>
        <TouchableHighlight
          onPress={() => setShow(true)}
          style={styles.datePickerButton}>
          <Text style={styles.datePickerButtonText}>
            <FontAwesome
              name="calendar"
              size={20}
              color="#fff"
              style={{ marginRight: 10, marginLeft: 10 }}
            />
            {date === 'Select Date'
              ? '    Select Date'
              : selectedDate.toDateString()}
          </Text>
        </TouchableHighlight>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={selectedDate}
            mode={mode}
            display="default"
            onChange={(e, newDate) => {
              setShow(false);
              setSelectedDate(newDate);
              setDate('New Date');
            }}

            minimumDate={new Date()}
            maximumDate={new Date().setDate(new Date().getDate() + 1)}
            default={
              new Date().setDate(new Date().getDate() + 1)
            }
          />
        )}
      </View>
      {date === 'Select Date' ? null : (
        <View style={styles.timeSlot}>
          {timeSlot.map(slot => {
            let myMoment = moment(`${slot.startTime} - ${slot.endTime}`, 'HH:mm A')
            let myMoment2 = moment(`${slot.startTime} - ${slot.endTime}`, 'HH:mm A');
            slot.startTime = myMoment.format('hA');
            slot.endTime = myMoment2.format('hA');
            ;

            if (currentHour < myMoment.hour() && currentDate.toDateString() === selectedDate.toDateString()) {

              return (
                <Pressable
                key={slot.id}
                onPress={() => {
                  setSelect(slot);
                  setTime(`${slot.startTime}  ${slot.endTime}`);
                }}
                style={[
                  styles.timeSlotItem,
                  select === slot ? styles.timeSlotItemSelect : null,
                ]}>
                <Text style={styles.timeSlotButtonText}>
                  {slot.startTime}  {slot.endTime}
                </Text>
              </Pressable>
              );
            }
            else if (currentDate.toDateString() !== selectedDate.toDateString()) {
              return (
                <Pressable
                  key={slot.id}
                  onPress={() => {
                    setSelect(slot);
                    setTime(`${slot.startTime} - ${slot.endTime}`);
                  }}
                  style={[
                    styles.timeSlotItem,
                    select === slot ? styles.timeSlotItemSelect : null,
                  ]}>
                  <Text style={styles.timeButtonText}>
                    {slot.startTime}
                  </Text>
                </Pressable>
              );
            }
          })}
        </View>
      )}

      <Pressable
        onPress={() => confirmReschedule(

          selectedDate.toDateString(),
          select.startTime,

        )}
        style={styles.button}>
        <Text style={styles.buttonText}>Reschedule</Text>
      </Pressable>

    </View>
  );
};

export default RescheduleScreen;