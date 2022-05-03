import React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  Pressable,
  TouchableHighlight,
} from 'react-native';
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
import {styles} from './styles';
import moment from 'moment';

const AppointmentComponent = ({
  route,
  navigation,
  makePayment,
  makePaymentOnCash,
  paymentMode,
  setPaymentMode,
  setShowModal,
  showModal,
  setShowModal2,
  showModal2,
  setShowModal3,
  showModal3,
  setTime,
  setSelectedDate,
  selectedDate,
  setDate,
  date,
  setSelect,
  select,
  timeSlot,
  setShow,
  show,
  setMode,
  setSelectedTime,
  selectDoctor,
  currentHour,
  currentDate,
}) => {
  return (
    <>
      <NativeBaseProvider>
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
              minimumDate={new Date()}
              maximumDate={new Date().setDate(new Date().getDate() + 1)}
            />
          )}
        </View>

        {date === 'Select Date' ? null : (
          <View style={styles.timeSlot}>
            {timeSlot.map(slot => {
              let myMoment = moment(`${slot.startTime}`, 'HH:mm A');
              let myMoment2 = moment(`${slot.endTime}`, 'HH:mm A');
              slot.startTime = myMoment.format('hA');
              slot.endTime = myMoment2.format('hA');
              if (
                currentHour < myMoment.hour() &&
                currentDate.toDateString() === selectedDate.toDateString()
              ) {
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
                    <Text style={styles.timeSlotButtonText}>
                      {slot.startTime} - {slot.endTime}
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
                      setTime(`${slot.startTime} - ${slot.endTime}`);
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

        <View>
          <Center>
            <Pressable
              onPress={() => setShowModal(true)}
              style={styles.bookButton}>
              <Text style={styles.bookButtonText}>Proceed</Text>
            </Pressable>
            <Modal
              isOpen={showModal}
              onClose={() => setShowModal(false)}
              size="lg">
              <Modal.Content maxWidth="350">
                <Modal.CloseButton />
                <Modal.Header>Appoint</Modal.Header>
                <Modal.Body>
                  <VStack space={3}>
                    <HStack alignItems="center" justifyContent="space-between">
                      <Text fontWeight="medium">Time</Text>
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
                      <Text color="green.500">$337.61</Text>
                    </HStack>
                  </VStack>
                </Modal.Body>
                <Modal.Footer>
                  <Pressable
                    onPress={() => setShowModal2(true)}
                    style={styles.continueButton}>
                    <Text style={styles.continueButtonText}>Proceed</Text>
                  </Pressable>
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
                  {/* <Button
              flex="1"
              onPress={() => {
                setShowModal3(true);
              }}>
              Continue
            </Button> */}
                  <Pressable
                    onPress={() => {
                      setShowModal3(true);
                    }}
                    style={styles.continueButton}>
                    <Text style={styles.continueButtonText}>Continue</Text>
                  </Pressable>
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
                  <Radio.Group name="payment" size="sm">
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
                      flex="1"
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
                      flex="1"
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
        </View>
      </NativeBaseProvider>
    </>
  );
};

export default AppointmentComponent;
