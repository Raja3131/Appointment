import React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  Pressable,
  TouchableHighlight,
} from 'react-native';
import {useState, useEffect} from 'react';
import doctors from '../../db/doctors';
import TimeSlot from '../../db/TimeSlot';
import DateTimePicker from '@react-native-community/datetimepicker';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import {
  Button,
  Modal,
  VStack,
  HStack,
  Radio,
  Center,
  NativeBaseProvider,
} from 'native-base';
import RazorpayCheckout from 'react-native-razorpay';
import Api from '../../api/Api';
import {styles} from './styles';
import moment from 'moment';
import AppointmentComponent from '../../components/Appointment/Appointment';

const Appointment = ({route, navigation}) => {
  const {selectDoctor} = route.params;
  const {name} = route.params;
  const [doctorsList, setDoctorsList] = useState([]);
  const [select, setSelect] = useState('');
  const [timeSlot, setTimeSlot] = useState([]);
  const [date, setDate] = useState('Select Date');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [mode, setMode] = useState('date');
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  const [paymentMode, setPaymentMode] = useState('');
  const [time, setTime] = useState('');
  let currentDate = new Date();
  let currentHour = currentDate.getHours();

  useEffect(() => {
    setDoctorsList(doctors);
  }, []);
  useEffect(() => {
    setTimeSlot(TimeSlot);
  }, []);

  const makePayment = ({navigation}) => {
    var options = {
      description: 'Credits towards consultation',
      image: '../assets/images/Paintwynk.png',
      currency: 'INR',
      key: 'rzp_test_fvX4sVrv4MDESx', // Your api key
      amount: '500',
      name: 'WynkEMR',
      prefill: {
        email: 'wynkemr@gmail.com',
        contact: '8825534922',
        name: 'WynkEMR',
      },
      theme: {color: '#009387'},
    };
    RazorpayCheckout.open(options)
      .then(data => {
        // handle success
        alert(`Success: ${data.razorpay_payment_id}`);
        if (data.razorpay_payment_id) {
          Api.post('/appoints', {
            name: name,
            doctor: selectDoctor,
            date: selectedDate.toLocaleDateString(),
            time: select.startTime,
          });
          navigation.navigate('MyAppoints');
        } else if (data.status === 400) {
          alert('Appointment already exists');
        }
      })
      .catch(error => {
        // handle failure
        alert(`Error: ${error.code} | ${error.description}`);
      });
  };
  const makePaymentOnCash = () => {
    navigation.navigate('Cash', {
      name: name,
      doctor: selectDoctor,
      date: selectedDate.toLocaleDateString(),
      time: select.startTime,
    });
  };

  return (
    <>
      <AppointmentComponent
        selectDoctor={selectDoctor}
        name={name}
        doctorsList={doctorsList}
        select={select}
        setSelect={setSelect}
        timeSlot={timeSlot}
        date={date}
        setDate={setDate}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        show={show}
        setShow={setShow}
        mode={mode}
        showModal={showModal}
        showModal2={showModal2}
        showModal3={showModal3}
        paymentMode={paymentMode}
        makePaymentOnCash={makePaymentOnCash}
        makePayment={makePayment}
        setPaymentMode={setPaymentMode}
        currentHour={currentHour}
        currentDate={currentDate}
        setTime={setTime}
        time={time}
        setShowModal={setShowModal}
        setShowModal2={setShowModal2}
        setShowModal3={setShowModal3}
      />
    </>
  );
};

export default Appointment;
