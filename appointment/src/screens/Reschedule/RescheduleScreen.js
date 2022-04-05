import React from 'react';
import { useState,useEffect } from 'react';
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
import {styles} from './styles';
import moment from 'moment';

const RescheduleScreen = ({route, navigation}) => {
  let currentDate = new Date();
  let currentHour = currentDate.getHours();

  const {id: id} = route.params;
  const {name: appointmentName} = route.params;
  const {date: appointmentDate} = route.params;
  const {time: appointmentTime} = route.params;

  const [appointments, setAppointments] = useState([]);

  const [name1, setName] = useState(`${appointmentName}`);
  const [date, setDate] = useState('Select Date');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [time1, setTime] = useState(`${appointmentTime}`);
  const [mode, setMode] = useState('date');
  const [timeSlot, setTimeSlot] = useState([]);
  const [select, setSelect] = useState('');

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeSlot(TimeSlot);


  });

  const reschedule = () => {
    Api.put(`/appoints/${id}`, {
      name: name1,
      date: selectedDate.toDateString(),
      time: select.startTime,
    }).then(res => {
      if(!name1 || !date || !select.startTime) {
        Alert.alert('Please fill all the fields');
      } else {
        console.log(res);
      setName('');
      navigation.navigate('MyAppoints', appointments);
      }
      

      
    });
  };
  
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Reschedule Appointment</Text>
      {/* <Text style={styles.label}>{name1}</Text>
      <TextInput
        style={styles.input}
        value={name1}
        onChangeText={text => setName(text)}
      /> */}
      <Text style={styles.label}>Date</Text>

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
              style={{marginRight: 10, marginLeft: 10}}
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
            default = {
              new Date().setDate(new Date().getDate() + 1)
            }
          />
        )}
      </View>

      {date === 'Select Date' ? null : (
        <View style={styles.timeSlot}>
          {timeSlot.map(slot => {
            let myMoment = moment(`${slot.startTime}`, 'HH:mm');
            let myMoment2 = moment(`${slot.endTime}`, 'HH:mm');
            
            if(currentHour < myMoment.hour() && currentDate.toDateString() === selectedDate.toDateString())
            {
               
              return (
                <Pressable
                  key={slot.id}
                  onPress={() => {
                    setSelect(slot);
                    setTime(`${slot.startTime} - ${slot.endTime}`);
                  }}
                  style={styles.timeSlotButton}>
                  <Text style={styles.timeSlotButtonText}>
                    {slot.startTime} - {slot.endTime}
                  </Text>
                </Pressable>
              );
            }
            else if(currentDate.toDateString() !== selectedDate.toDateString())
            {
              return (
                <Pressable
                  key={slot.id}
                  onPress={() => {
                    setSelect(slot);
                    setTime(`${slot.startTime} - ${slot.endTime}`);
                  }}
                  style={styles.timeSlotButton}>
                  <Text style={styles.timeSlotButtonText}>
                    {slot.startTime} - {slot.endTime}
                  </Text>
                </Pressable>
              );
            }
            

            
            
          

           
          })}
        </View>
      )}

      <Pressable
        onPress={() => reschedule(
          name1,
          selectedDate.toDateString(),
          
        )}
        style={styles.button}>
        <Text style={styles.buttonText}>Reschedule</Text>
      </Pressable>

    </View>
  );
};

export default RescheduleScreen;
