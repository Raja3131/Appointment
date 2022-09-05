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

const Appointment = ({route, navigation}) => {
  const {selectDoctor} = route.params;
  const {name} = route.params;
  const {dob} = route.params;
  const {age} = route.params;
  const {mobile} = route.params;
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
  const [address, setAddress] = useState('Chennai');
  const [value, setValue] = React.useState('one');
  const [enable, setEnable] = useState(false);

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
      date: selectedDate.toDateString(),
      time: time,
      age: age,
      dob: dob,
      mobile: mobile,
      address: address,
    });
  };
  return (
    <>
      <View style={styles.docInfo}>
        <Image
          style={styles.docImage}
          source={doctors.find(doctor => doctor.id === selectDoctor).image}
        />

        <Text style={styles.docName}>
          {doctors.find(doctor => doctor.id === selectDoctor).name}
        </Text>
        <Text style={styles.docSpeciality}>
          {doctors.find(doctor => doctor.id === selectDoctor).speciality}
        </Text>
      </View>
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
            minimumDate={new Date().setDate(new Date().getDate())}
            maximumDate={new Date().setDate(new Date().getDate() + 1)}
          />
        )}
      </View>
      {date === 'Select Date' ? null : (
        <View style={styles.timeSlot}>
          {timeSlot.map(slot => {
            let myMoment = moment(`${slot.startTime}`, 'HH:mm:ss');
            // let myMoment2 = moment(`${slot.endTime}`, 'HH:mm A');
            slot.startTime = myMoment.format('HH:mm:ss');
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
                    setTime(`${slot.startTime}`);
                    setEnable(true);
                  }}
                  style={[
                    styles.timeSlotItem,
                    select === slot ? styles.timeSlotItemSelect : null,
                  ]}>
                  <Text style={styles.timeButtonText}>{slot.startTime}</Text>
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
                    setEnable(true);
                  }}
                  style={[
                    styles.timeSlotItem,
                    select === slot ? styles.timeSlotItemSelect : null,
                  ]}>
                  <Text style={styles.timeButtonText}>{slot.startTime}</Text>
                </Pressable>
              );
            }
          })}
        </View>
      )}

      <NativeBaseProvider>
        <Center>
          <Pressable
            disabled={enable ? false : true}
            onPress={() => setShowModal(true)}
            style={[enable ? styles.bookButton : styles.buttonDisabled]}>
            <Text style={styles.bookButtonText}>Proceed</Text>
          </Pressable>
          <Modal
            isOpen={showModal}
            onClose={() => setShowModal(false)}
            size="lg">
            <Modal.Content maxWidth="350" maxHeight="250">
              <Modal.CloseButton />
              <Modal.Header>Appoint</Modal.Header>
              <Modal.Body>
                <VStack space={3}>
                  <HStack alignItems="center" justifyContent="space-between">
                    <Text fontWeight="medium">Appointment Time</Text>
                    <Text color="blueGray.400">{select.startTime}</Text>
                  </HStack>
                  <HStack alignItems="center" justifyContent="space-between">
                    <Text fontWeight="medium">Date</Text>
                    <Text color="blueGray.400">
                      {selectedDate.toDateString()}
                    </Text>
                  </HStack>
                  <HStack alignItems="center" justifyContent="space-between">
                    <Text fontWeight="medium">Amount</Text>
                    <Text color="green.500">50 Dirham</Text>
                  </HStack>
                </VStack>
              </Modal.Body>
              <Modal.Footer>
                <Button
                  flex="1"
                  onPress={() => {
                    setShowModal2(true);
                  }}>
                  Continue
                </Button>
              </Modal.Footer>
            </Modal.Content>
          </Modal>

          <Modal
            isOpen={showModal2}
            onClose={() => setShowModal2(false)}
            size="lg">
            <Modal.Content maxWidth="350">
              <Modal.CloseButton />
              <Modal.Header>Select Address</Modal.Header>
              <Modal.Body>
                <Radio.Group
                  name="myRadioGroup"
                  value={address}
                  onChange={nextValue => {
                    setAddress(nextValue);
                  }}>
                  <Radio value="Dubai" my="1">
                    Dubai
                  </Radio>
                  <Radio value="Halab" my="1">
                    Halab
                  </Radio>
                </Radio.Group>
              </Modal.Body>
              <Modal.Footer>
                <Button
                  flex="1"
                  onPress={() => {
                    setShowModal3(true);
                    console.log(address);
                  }}>
                  Continue
                </Button>
              </Modal.Footer>
            </Modal.Content>
          </Modal>

          <Modal
            isOpen={showModal3}
            size="lg"
            onClose={() => setShowModal3(false)}>
            <Modal.Content maxWidth="350">
              <Modal.CloseButton />
              <Modal.Header>Payment Options</Modal.Header>
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
                      value="cash"
                      onPress={() => setPaymentMode('cash')}>
                      Cash on Visit
                    </Radio>
                    <Radio
                      alignItems="flex-start"
                      _text={{
                        mt: '-1',
                        ml: '2',
                        fontSize: 'sm',
                      }}
                      value="card"
                      onPress={() => setPaymentMode('card')}>
                      Credit/ Debit
                    </Radio>
                    <Radio
                      alignItems="flex-start"
                      _text={{
                        mt: '-1',
                        ml: '2',
                        fontSize: 'sm',
                      }}
                      value="payment3">
                      UPI
                    </Radio>
                  </VStack>
                </Radio.Group>
              </Modal.Body>
              <Modal.Footer>
                {paymentMode === 'card' ? (
                  <Button
                    flex="2"
                    onPress={() => {
                      makePayment(select, selectedDate.toDateString());
                      setShowModal3(false);
                      setShowModal2(false);
                      setShowModal3(false);
                    }}>
                    Checkout
                  </Button>
                ) : (
                  <Button
                    flex="2"
                    onPress={() => {
                      makePaymentOnCash(select, selectedDate.toDateString());
                      setShowModal3(false);
                      setShowModal2(false);
                      setShowModal3(false);
                    }}>
                    Cash
                  </Button>
                )}
              </Modal.Footer>
            </Modal.Content>
          </Modal>
        </Center>
      </NativeBaseProvider>
    </>
  );
};
export default Appointment;
