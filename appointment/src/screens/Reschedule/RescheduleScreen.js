import React from 'react';
import {useState, useEffect} from 'react';
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
import doctors from '../../db/doctors';
import moment from 'moment';
import {number} from 'prop-types';
import axios from 'axios';
import { url } from '../../utils/url';

const RescheduleScreen = ({route, navigation}) => {
  let currentDate = new Date();
  let currentHour = currentDate.getHours();

  const {AppointmentTranID: AppointmentTranID} = route.params;
  const {NationalityIDNo: NationalityIDNo} = route.params;
  const {title: title} = route.params;
  const {FirstName: FirstName} = route.params;
  const {LastName: LastName} = route.params;
  const {ArabicName: ArabicName} = route.params;
  const {Age: Age} = route.params;
  const {DOB: DOB} = route.params;
  const {Gender: Gender} = route.params;
  const {Address: Address} = route.params;
  const {Apptdate: Apptdate} = route.params;
  const {Appttime: Appttime} = route.params;
  const {DoctorName: DoctorName} = route.params;
  const {FileNo: FileNo} = route.params;

  const [appointments, setAppointments] = useState([]);
  const [name1, setName] = useState(`${title}`);
  const [date, setDate] = useState('Select Date');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [newDatee, setNewDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [time1, setTime] = useState(`${Appttime}`);
  const [doctor, setDoctor] = useState(`${DoctorName}`);
  const [mode, setMode] = useState('date');
  const [timeSlot, setTimeSlot] = useState([]);
  const [select, setSelect] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [patient, setPatient] = useState('');

  useEffect(() => {
    setTimeSlot(TimeSlot);
    console.log(doctors);
    
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
        {text: 'Yes', onPress: () => reschedule()},
      ],
      {cancelable: false},
    );
  };
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
    console.log(time1)
    debugger;

    
    Api.post(`${url}/Appointment/NewAppointment`, {
      // file_no: FileNo,
      // AppointmentTranID: AppointmentTranID,
      // national_ID_No:NationalityIDNo,
      // firstname:FirstName,
      // lastname:LastName,
      // gender:Gender,
      // arabicname: ArabicName,
      // Age: Age,
      // dob: DOB,
      // address: Address,
      // doctorName:DoctorName,
      // app_date: newDate,
      // appt_Time: select,
      // organizationID: "org1",
      // ActiveSubmitForm: "",

      file_No: FileNo,
      appointmentTranID: AppointmentTranID,
      national_ID_No: "22",
      app_date: newDatee,
      appt_Time:  new Date(newDatee.toDateString() + ' ' + time1.toString()),
      firstName: FirstName,
      // middleName: "string",
      lastName: LastName,
      nickName: 'string',
      arabicName: 'قابيل م",',
      age: 22,
      dob:  "2019-08-12T09:51:01.26",
      phoneNumber: "9846123123",
      gender: "2",
      address: 'Chennai',
      // phoneNumber: "string",
      // email: "string",
      doctorName: "Ayisha",
      // appt_Type: "string",
      // src_Referral: "string",
      // remarks: "string",
      // physician_Name: "string",
      // physician_Contact_No: "string",
      // confirmedBy: "string",
      // confirmedDate: "2022-08-16T08:57:51.574Z",
      // confirmFormActive: true,
      // appointmentFee: 0,
      // cancelledBy: "string",
      // cancelledDateTime: "2022-08-16T08:57:51.574Z",
      // cancelledReason: "string",
      // cancelFormActive: true,
      // rescheduleBy: "string",
      // rescheduleDate: "2022-08-16T08:57:51.574Z",
      // userID: "string",
      // organizationID: "string",
      activeSubmitForm: 'Reschedule',
      // maritalStatus: "string",
      // address1: "string",
      // address2: "string",
      // emailID2: "string",
      // district: "string",
      // zipcode: "string",
      // country: "string",
      organizationID: "org1",
      rescheduleBy:"Mobile",
      rescheduleDate:  new Date(newDatee.toDateString() + ' ' + time1.toString())


    }).then(res => {
    
      console.log(res);
      console.log(res.data);
      Alert.alert('Rescheduled Successfully')
      // debugger;
      
      setName('');
      navigation.navigate('MyAppoints', {
        appointments,
      });
    }).catch(err => {
      console.log(err);
    }).finally(() => {
      setIsLoading(false);
    }).done();
  }



  return (
    <View style={styles.container}>
      <View style={styles.appointDetailsContainer}>
        <Text style={styles.idText}>{FileNo}</Text>
        <Text>{AppointmentTranID}</Text>

        <Text style={styles.detailsText}>PatientName : {title}</Text>
        <Text style={styles.detailsText}>
          Date :{`${moment(newDatee).format('Do-MMM-YYYY')} `}
        </Text>
        <Text style={styles.detailsText}>Time:{`${moment(Appttime).format('hh:mm:A')} `}</Text>
        <View>
          {/* <Text style={styles.detailsText}>
            DoctorName:
            {doctors.map(doctor1 => {
              if (doctor1.id == doctor) {
                return doctor1.name;
              }
            })}
          </Text> */}
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
              setNewDate(newDate);
              console.log(newDate);
            }}
            minimumDate={new Date().setDate(new Date().getDate())}
            maximumDate={new Date().setDate(new Date().getDate() + 1)}
            default={new Date().setDate(new Date().getDate() + 1)}
          />
        )}
      </View>
      {date === 'Select Date' ? null : (
        <View style={styles.timeSlot}>
          {timeSlot.map(slot => {
            let myMoment = moment(
              `${slot.startTime} `,
              'hh:mm:A',
            );
            let myMoment2 = moment(
              `${slot.startTime} `,
              'hh:mm:A',
            );
            slot.startTime = myMoment.format('hh:mm:A');
            // slot.endTime = myMoment2.format('hA');
            if (
              currentHour < myMoment.hour() &&
              currentDate.toDateString() === selectedDate.toDateString()
            ) {
              return (
                <Pressable
                  key={slot.id}
                  onPress={() => {
                    setSelect(slot);
                    setTime(`${slot.startTime} `);
                  }}
                  style={[
                    styles.timeSlotItem,
                    select === slot ? styles.timeSlotItemSelect : null,
                  ]}>
                  <Text style={styles.timeSlotButtonText}>
                    {slot.startTime} 
                  </Text>
                </Pressable>
              );
            } else if (
              currentDate.toDateString() !== selectedDate.toDateString()
            ) {
              return (
                <Pressable
                  key={slot.id}
                  onPress={() => {
                    setSelect(slot);
                    setTime(`${slot.startTime}`);
                    console.log(time1)

                  }}
                  style={[
                    styles.timeSlotItem,
                    select === slot ? styles.timeSlotItemSelect : null,
                  ]}>
                  <Text style={styles.timeSlotButtonText}>{slot.startTime}</Text>
                </Pressable>
              );
            }
          })}
        </View>
      )}

      <Pressable
        onPress={() => confirmReschedule(newDatee, time1)}
        style={styles.button}>
        <Text style={styles.buttonText}>Reschedule</Text>
      </Pressable>
    </View>
  );
};

export default RescheduleScreen;
