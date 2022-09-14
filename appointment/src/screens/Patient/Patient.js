import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  Dimensions,
  TextInput,
  Platform,
  StyleSheet,
  ScrollView,
  StatusBar,
  KeyboardAvoidingView,
  Pressable,
  Alert,
  TouchableHighlight,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Api from '../../api/Api';
import {useTheme} from '@react-navigation/native';
import * as Yup from 'yup';
import {Formik} from 'formik';
import RNPickerSelect from 'react-native-picker-select';
import doctors from '../../db/doctors';
import {useEffect} from 'react';
import {styles} from './styles';
import Message from '../../components/Common/Message/Message';
import ValidatedTextInput from '../../utils/ValidatetextInput';
import DateTimePicker from '@react-native-community/datetimepicker';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {useCallback} from 'react';
import moment from 'moment';
import  Feather  from 'react-native-vector-icons/Feather';
const PatientDetails = ({navigation, route}) => {
  const formikRef = useRef();
  const [message, setMessage] = useState(false);
  const [dob, setDob] = useState(new Date());
  const [age, setAge] = useState(null);
  const [gender, setGender] = useState(null);
  const [mobile, setMobile] = useState('');
  const [doctor, setDoctor] = useState('');
  const [services,setServices] = useState('');
  const [aServices,setAServices] = useState('');

  const inputRef = useRef();

 

  const {colors} = useTheme();
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [data, setData] = React.useState({
    name: '',
    check_textInputChange: false,
    isValidUser: true,
});



  const showDatePicker = () => {
    setDatePickerVisibility(true);
    console.log('showDatePicker');
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
    console.log('hideDatePicker');
  };

  const handleDob = dob => {
    setDob(dob);
    setDatePickerVisibility(false);
    console.log(dob.toLocaleDateString());
  };
  const signUp = async () => {
    try {
      if (doctor) {
        navigation.navigate('DoctorProfile', {
          name: data.name,
          age: age,
          mobile: mobile,
          gender: gender,
          selectDoctor: doctor,
          dob:dob.toLocaleDateString()
        });
      } else {
        navigation.navigate('Doctors', {
          name: name,
          age: age,
          mobile: mobile,
          gender: gender,
        });
      }
    } catch (err) {
      console.log(err);
      setMessage(true);
      Alert.alert('Error', 'Something went wrong');
    }
  };

  const getAge = useCallback(dob => {
    let today = new Date();
    let birthDate = new Date(dob);
    let age = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    console.log(age);
    setAge(age);
    setDob(dob);
    setDatePickerVisibility(false);
    inputRef.current.setNativeProps({text: age.toString()});

    console.log(dob.toLocaleDateString());
  }, []);

  const handleAgeToDob = age => {
    if(age>120){
      Alert.alert('Age must be between 120')
    }
    setAge(age);
    console.log(age);
    let CurrentDate = new Date();
    CurrentDate.setFullYear(CurrentDate.getFullYear() - age);
    let DateOfBirth = CurrentDate;
    setDob(DateOfBirth);
  };

  
  const handleValidUser = (val) => {
    if( val.trim().length >= 4 ) {
        setData({
            ...data,
            isValidUser: true
        });
    } else {
        setData({
            ...data,
            isValidUser: false
        });
    }
}

const textInputChange = (val) => {
  if( val.trim().length >= 4 ) {
      setData({
          ...data,
          name: val,
          check_textInputChange: true,
          isValidUser: true
      });
  } else {
      setData({
          ...data,
          name: val,
          check_textInputChange: false,
          isValidUser: false
      });
  }
}


  return (
    <>
      <ScrollView>
        <KeyboardAvoidingView behavior="padding" style={{flex: 1}}>
          <View style={styles.container}>
            <StatusBar backgroundColor="#009387" barStyle="light-content" />
            <View style={styles.header}></View>
            <Animatable.View
              style={[
                styles.footer,
                {
                  backgroundColor: colors.background,
                },
              ]}>
                 
                  <View style={styles.action}>
                    <TextInput
                      placeholder="Patient Name"
                      style={[
                        styles.textInput,
                        {
                          color: colors.text,
                        },
                      ]}
                      placeholderStyle={{ color: '#666666', fontSize: 20 }}
                      onChangeText={(val) => {textInputChange(val)
                        console.log(val)
                      }
                      }
                      placeholderTextColor="#598"
                      onEndEditing={(e)=>handleValidUser(e.nativeEvent.text)}


                    />
                    <Text style={styles.errorMsg}>
                    {data.check_textInputChange ? 
                <Animatable.View
                    animation="bounceIn"
                >
                    <Feather 
                        name="check-circle"
                        color="green"
                        size={20}
                    />
                </Animatable.View>
                : null}
                    </Text>
                    { data.isValidUser ? null : 
            <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>Username must be 4 characters long.</Text>
            </Animatable.View>
            }
            
                  </View>
              <View style={styles.dobContainer}>
                
                <TouchableHighlight onPress={showDatePicker}
                style={styles.dateButton}
                
                >
                  <Text>DOB : {moment(dob).format('Do-MMM-YYYY')}</Text>
                </TouchableHighlight>
                {isDatePickerVisible && (
                  <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode="date"
                    onConfirm={getAge}
                    onCancel={hideDatePicker}
                    value={dob}
                    maximumDate={new Date()}
                  />
                )}
                
              </View>
              
              <View style={styles.action}>
                <TextInput
                  placeholder="Age"
                  placeholderTextColor="#598"
                  placeholderStyle={{color: '#666666', fontSize: 20}}
                  style={[
                    styles.textInput,
                    {
                      color: colors.text,
                    },
                  ]}
                  keyboardType="numeric"
                  value={age}
                  maxLength={3}
                  onChangeText={handleAgeToDob}
                  ref={inputRef}
                />
                <Text style={styles.errorMsg}></Text>
              </View>
              <View style={styles.dropdown}>
                    <RNPickerSelect
                      onValueChange={value => {
                        setGender(value);
                        console.log(gender);
                      }}
                      placeholder={{
                        label: 'Select Gender',

                      }}
                      placeholderTextColor="red"
                      items={[
                        { label: 'Male', value: 'Male' },
                        { label: 'Female', value: 'Female' },
                      ]}
                      value={gender}
                      style={styles.dropDown} />
                       <RNPickerSelect
                      onValueChange={value => {
                        setServices(value);
                        console.log(services);
                      }}
                      placeholder={{
                        label: 'Services',

                      }}
                      placeholderTextColor="red"
                      items={[
                        { label: 'Elder Care', value: 'Elder Care' },
                        { label: 'Home Nursing', value: 'Home Nursing' },
                        { label: 'Physiotherapy', value: 'Physiotherapy' },
                        { label: 'Doctor Visit', value: 'Doctor Visit' },

                      ]}
                      value={services}
                      style={styles.dropDown} />
                      <RNPickerSelect
                      onValueChange={value => {
                        setAServices(value);
                        console.log(gender);
                      }}
                      placeholder={{
                        label: 'Additional Services',

                      }}
                      placeholderTextColor="red"
                      items={[
                        { label: 'Pharmacy Diagnostic', value: 'Pharmacy Diagnostic' },
                        { label: 'Assistant&Convenience', value: 'Assistant&Convenience' },
                      ]}
                      value={aServices}
                      style={styles.dropDown} />
                      
                  <View style={styles.action}>
                  
                    <ValidatedTextInput
                      placeholder="Phone"
                      style={[
                        styles.textInput,
                        {
                          color: colors.text,
                        },
                      ]}
                      placeholderStyle={{ color: '#666666', fontSize: 20 }}
                      onChangeText={(number)=>setMobile(number)}
                      value={mobile}
                      keyboardType="numeric"
                      maxLength={10}
                      placeholderTextColor="#598"

                    />
                    <Text style={styles.errorMsg}>
                      {/* {touched.mobile && errors.mobile} */}
                    </Text>
                  </View>
                  <View style={styles.dropdown}>
                    <RNPickerSelect
                      onValueChange={value => {
                        
                        setDoctor(value);
                      }}
                      items={Object.values(doctors).map(item => {
                        return { label: item.name, value: item.id };
                      })}
                      placeholder={{
                        label: 'Select Doctor',
                        value: null,
                      }}
                      value={doctor}
                      placeholderStyle={{ color: '#666666', fontSize: 20 }}
                      placeholderTextColor="#598"
                    />
                  </View>
                  <View style={
                    styles.buttons
                  }>

                    <TouchableOpacity
                      style={
                        !(data.name && age && mobile)
                          ? styles.buttonDisabled
                          : styles.button
                      }
                      onPress={signUp}
                      disabled={!(data.name && age && mobile)}
                      testID="loginButton">
                      <Text
                        style={
                          !(data.name && age && mobile)
                            ? styles.textDisabled
                            : styles.buttonText
                        }>

                        Submit
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={[
                        styles.button,


                      ]}
                      onPress={() => {

                        formikRef.current?.resetForm();
                        setGender('')
                        setDoctor('')
                        setMobile('')
                        setDob('')
                        setAge('')

                      }}
                      testID="clearFieldsButton">
                      <Text
                        style={[
                          styles.textSign,

                        ]}>
                        Clear
                      </Text>
                    </TouchableOpacity>
                  </View>
                  </View>
            </Animatable.View>
          </View>
        </KeyboardAvoidingView>
        {message && (
          <View style={styles.errorContainer}>
            <Text style={styles.errorText}>
              Something went wrong. Please try again.
            </Text>
          </View>
        )}
      </ScrollView>
    </>
  );
};

export default PatientDetails;
