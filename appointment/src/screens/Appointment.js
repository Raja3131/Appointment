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
import doctors from '../db/doctors';
import TimeSlot from '../db/TimeSlot';
import DateTimePicker from '@react-native-community/datetimepicker';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather'
import {
  Button,
  Modal,
  VStack,
  HStack,
  Radio,
  Center,
  NativeBaseProvider,
} from 'native-base';
const Appointment = ({route, navigation}) => {
  const {doctorId} = route.params;
  const [doctorsList, setDoctorsList] = useState([]);
  const [select, setSelect] = useState(true);
  const [timeSlot, setTimeSlot] = useState([]);
  const [date, setDate] = useState('Select Date');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [mode, setMode] = useState('date');
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);

  useEffect(() => {
    setDoctorsList(doctors);
  }, []);
  useEffect(() => {
    setTimeSlot(TimeSlot);
  }, []);

  return (
    <>
      <NativeBaseProvider>
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
       <View style={
         styles.CalendarIconStyle
       }>
       
       </View>
        <TouchableHighlight
          onPress={() => setShow(true)}
          style={styles.datePickerButton}>
           

          <Text style={styles.datePickerButtonText}>
          <FontAwesome
          name="calendar"
          size={20}
          color="#fff"
          style={{marginRight: 10,
          marginLeft: 10}}
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
                    <FontAwesome
          name="clock-o"
          size={20}
          color="#009387"
          
        />
                    </View>
          
                  <Text style={styles.timeSlotItemText}>{slot.startTime}</Text>
                </Pressable>
              </>
            );
          })}
        </View>
      )}

      <View>
      <Center>
      <Button onPress={() => setShowModal(true)}>Button</Button>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)} size="lg">
        <Modal.Content maxWidth="350">
          <Modal.CloseButton />
          <Modal.Header>Order</Modal.Header>
          <Modal.Body>
            <VStack space={3}>
              <HStack alignItems="center" justifyContent="space-between">
                <Text fontWeight="medium">Sub Total</Text>
                <Text color="blueGray.400">$298.77</Text>
              </HStack>
              <HStack alignItems="center" justifyContent="space-between">
                <Text fontWeight="medium">Tax</Text>
                <Text color="blueGray.400">$38.84</Text>
              </HStack>
              <HStack alignItems="center" justifyContent="space-between">
                <Text fontWeight="medium">Total Amount</Text>
                <Text color="green.500">$337.61</Text>
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

      <Modal isOpen={showModal2} onClose={() => setShowModal2(false)} size="lg" >
        <Modal.Content maxWidth="350">
          <Modal.CloseButton />
          <Modal.Header>Select Address</Modal.Header>
          <Modal.Body>
            <Radio.Group defaultValue="address1" name="address" size="sm">
              <VStack space={3}>
                <Radio
                  alignItems="flex-start"
                  _text={{
                    mt: '-1',
                    ml: '2',
                    fontSize: 'sm',
                  }}
                  value="address1">
                  4140 Parker Rd. Allentown, New Mexico 31134
                </Radio>
                <Radio
                  alignItems="flex-start"
                  _text={{
                    mt: '-1',
                    ml: '2',
                    fontSize: 'sm',
                  }}
                  value="address2">
                  6391 Elign St. Celina, Delaware 10299
                </Radio>
              </VStack>
            </Radio.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button
              flex="1"
              onPress={() => {
                setShowModal3(true);
              }}>
              Continue
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>

      <Modal isOpen={showModal3} size="lg" onClose={() => setShowModal3(false)}>
        <Modal.Content maxWidth="350">
          <Modal.CloseButton />
          <Modal.Header>Payment Options</Modal.Header>
          <Modal.Body>
            <Radio.Group name="payment" size="sm">
              <VStack space={3}>
                <Radio
                  alignItems="flex-start"
                  _text={{
                    mt: '-1',
                    ml: '2',
                    fontSize: 'sm',
                  }}
                  value="payment1">
                  Cash on delivery
                </Radio>
                <Radio
                  alignItems="flex-start"
                  _text={{
                    mt: '-1',
                    ml: '2',
                    fontSize: 'sm',
                  }}
                  value="payment2">
                  Credit/ Debit/ ATM Card
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
            <Button
              flex="1"
              onPress={() => {
                setShowModal(false);
                setShowModal2(false);
                setShowModal3(false);
              }}>
              Checkout
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Center>
      </View>
      </NativeBaseProvider>
    </>
  )
}

const styles = StyleSheet.create({
  docInfo: {
    flex: 1,
    marginLeft: 20,
    flexDirection: 'row',
    position: 'relative',
    marginTop: 30,
    fontFamily:'Ubuntu-Italic',

  },
  docName: {
    fontSize: 24,
    fontFamily:'Ubuntu-Italic',

  },
  docSpeciality: {
    fontSize: 18,
    marginTop: 10,
    color: '#888',
    position: 'absolute',
    right: 180,
    top: 20,
    fontFamily:'Ubuntu-Italic',

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
    borderColor: '#888',
  },
  datePickerButton: {
    paddingVertical: 12,
    paddingHorizontal: 30,
    backgroundColor: '#009387',
    borderRadius: 10,
    width: '60%',
    height: 60,
    marginTop: 20,
    marginLeft: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  datePickerButtonText: {
    fontSize: 18,
    color: '#fff',
    fontFamily:'Ubuntu-Italic',
    marginLeft: 10,

  },

  timeSlot: {
    flex: 2,
    marginTop: 20,
    flexDirection: 'row',
    borderWidth: 0.2,
    borderColor: '#888',
    flexWrap: 'wrap',
  },
  timeSlotItem: {
    width: '35%',
    height: 50,
    borderWidth: 0.3,
    borderColor: '#888',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E9E6E6',
    borderRadius: 10,
    marginTop: 5,
    marginLeft: 5,
    borderColor: '#fff',
    color:'#000'
  },

  timeSlotItemText: {
    fontSize: 18,
    color: '#000',
    fontFamily:'Ubuntu-Italic',

  },
  timeSlotItemSelect: {
    backgroundColor: '#009387',
    
  },
  bookButton: {
    margin: 40,
    backgroundColor: '#009387',
    borderRadius: 10,
    width: '80%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bookButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  datePickerText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 20,
    marginTop: 20,
    backgroundColor: '#0093',
    borderRadius: 10,
    padding: 10,
    width: '30%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  CalendarIconStyle:{
    position:'absolute',
    left:10,
    top:-10,
  }
});

export default Appointment;