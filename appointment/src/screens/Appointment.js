import React from 'react';
import {
  Text,
  View,
  Image,
  Button,
  StyleSheet,
  Pressable,
  TouchableHighlight,
} from 'react-native';
import {useState, useEffect} from 'react';
import doctors from '../db/doctors';
import TimeSlot from '../db/TimeSlot';
import DateTimePicker from '@react-native-community/datetimepicker';
const Appointment = ({route, navigation}) => {
  const {doctorId} = route.params;
  const [doctorsList, setDoctorsList] = useState([]);
  const [select, setSelect] = useState(true);
  const [timeSlot, setTimeSlot] = useState([]);
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [mode, setMode] = useState('date');
  
  

 

  useEffect(() => {
    setDoctorsList(doctors);
  }, []);
  useEffect(() => {
    setTimeSlot(TimeSlot);
  }, []);




  return (
    <>
      <View style={styles.docInfo}>
        <Image
          style={styles.docImage}
          source={doctors.find(doctor => doctor.id === doctorId).image}
        />

        <Text style={styles.docName}>
          {doctors.find(doctor => doctor.id === doctorId).name}
        </Text>
        <Text style={styles.docSpeciality}>
          {doctors.find(doctor => doctor.id === doctorId).speciality}
        </Text>
      </View>

     
 <View style={styles.datePicker}>
        <Text style={styles.datePickerText}>Select Date</Text>
        <TouchableHighlight
          onPress={() => setShow(true)}
          style={styles.datePickerButton}>
          <Text style={styles.datePickerButtonText}>
            {new Date(date).toDateString()}
          </Text>
        </TouchableHighlight>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={(e, selectedDate) => {
              setShow(false);
              setDate(selectedDate || date);
            }}
            minimumDate={new Date()}
            maximumDate={new Date().setDate(new Date().getDate() + 1)}
          />
        )}
      </View>


     

      <View style={styles.timeSlot}>
        {timeSlot.map(slot => {
          return (
            <>
              <TouchableHighlight key={slot.id} onPress={() => setSelect(slot)}>
                <View
                  style={[
                    styles.timeSlotItem,
                    select === slot ? styles.timeSlotItemSelect : null,
                  ]}>
                  <Text style={styles.timeSlotItemText}>{slot.startTime}</Text>
                </View>
              </TouchableHighlight>
            </>
          );
        })}
      </View>

      <View>
        <Button
          title="Book"
          onPress={() =>
            navigation.navigate('Booking', {doctorId,select,date})
          }
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  docInfo: {
    flex: 1,
    marginLeft: 20,
    flexDirection: 'row',
    position: 'relative',
    marginTop: 30,
  },
  docName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  docSpeciality: {
    fontSize: 18,
    marginTop: 10,
    color: '#888',
    position: 'absolute',
    right: 180,
    top: 20,
  },
  docAbout: {
    marginTop: 10,
    fontSize: 16,
    color: '#888',
    width: '80%',
    lineHeight: 25,
  },
  docImage: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
  datePicker: {
    flex: 1,
    marginTop: 20,
    flexDirection: 'row',
    borderWidth: 0.3,
    borderColor: '#888',
  },
  datePickerButton: {
    paddingVertical: 12,
    paddingHorizontal: 30,
    backgroundColor: '#009387',
    borderRadius: 10,
    width: '50%',
    height: 50,
    marginTop: 20,
    marginLeft: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  datePickerButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },

  timeSlot: {
    flex: 2,
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  timeSlotItem: {
    width: '100%',
    height: 30,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#009387',
    borderRadius: 10,
    marginTop: 5,
    marginLeft: 5,
    borderColor: '#fff',
  },

  timeSlotItemText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  timeSlotItemSelect: {
    backgroundColor: '#333',
    borderColor: '#009387',
  },
});

export default Appointment;
