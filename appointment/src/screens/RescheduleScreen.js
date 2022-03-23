import React from 'react';
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
import Api from '../api/Api';
import TimeSlot from '../db/TimeSlot';
import DateTimePicker from '@react-native-community/datetimepicker';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

const RescheduleScreen = ({route, navigation}) => {
  const {id: id} = route.params;
  const {name: appointmentName} = route.params;
  const {date: appointmentDate} = route.params;
  const {time: appointmentTime} = route.params;

  const [appointments, setAppointments] = React.useState([]);
  // const [id, setId] = React.useState([]);

  const [name1, setName] = React.useState(`${appointmentName}`);
  const [date, setDate] = React.useState('Select Date');
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const [show, setShow] = React.useState(false);
  const [time1, setTime] = React.useState(`${appointmentTime}`);
  const [mode, setMode] = React.useState('date');
  const [timeSlot, setTimeSlot] = React.useState([]);
  const [select, setSelect] = React.useState('');

  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeSlot(TimeSlot);
  });

  const reschedule = () => {
    Api.put(`/appoints/${id}`, {
      name: name1,
      date: selectedDate.toDateString(),
      time: time1,
    }).then(res => {
      console.log(res);
      setName('');
      navigation.navigate('MyAppoints', appointments);
    });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Reschedule Appointment</Text>
      <Text style={styles.label}>{name1}</Text>
      <TextInput
        style={styles.input}
        value={name1}
        onChangeText={text => setName(text)}
      />
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
          />
        )}
      </View>

      {date === 'Select Date' ? null : (
        <View style={styles.timeSlot}>
          {timeSlot.map(slot => {
            return (
              <>
                <Pressable
                  onPress={() => setSelect(slot)}
                  style={[
                    styles.timeSlotItem,
                    select === slot ? styles.timeSlotItemSelect : null,
                  ]}>
                  <View>
                    <FontAwesome name="clock-o" size={20} color="#009387" />
                  </View>

                  <Text style={styles.timeSlotItemText}>{slot.startTime}</Text>
                </Pressable>
              </>
            );
          })}
        </View>
      )}

      <Button title="Reschedule" onPress={reschedule} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
  },
  input: {
    borderColor: '#009387',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    width: '100%',
    marginBottom: 20,
    backgroundColor: '#888',
  },
});

export default RescheduleScreen;
