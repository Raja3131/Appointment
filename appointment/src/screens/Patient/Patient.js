import React, { useRef, useState } from 'react';
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
  TouchableHighlight  
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Api from '../../api/Api';
import { useTheme } from '@react-navigation/native';
import { ButtonGroup } from 'react-native-elements';
import * as Yup from 'yup';
import { Formik } from 'formik';
// import { Picker } from '@react-native-picker/picker';
import RNPickerSelect from 'react-native-picker-select';
import doctors from '../../db/doctors';
import { useEffect } from 'react';
import { styles } from './styles';
import Message from '../../components/Common/Message/Message';
import useAppoints from '../../services/QueryCalls';
import ValidatedTextInput from '../../utils/ValidatetextInput';
// import  DateTimePicker  from '@react-native-community/datetimepicker';
import DateTimePickerModal from "react-native-modal-datetime-picker";
const PatientDetails = ({ navigation, route }) => {
  const formikRef = useRef();
  const { data } = useAppoints();
  const [message, setMessage] = useState(false);
  const [appoints, setAppoints] = useState([]);
  const [gender, setGender] = useState('');
  const [doctorValue, setDoctorValue] = useState('')
  const [selectedDob, setSelectedDob] = useState(new Date());
  const [date, setDate] = useState('select dob');
  
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .matches(/^[a-z0-9_.-\s]+$/i, 'Name is not valid')
      .required('Name is required')
      .min(3, 'Name must be at least 3 characters')
      .max(50, 'Name must be less than 50 characters')
      .trim(),
    age: Yup.string()
      .matches(/^[0-9]+$/, 'Age must be number')
      .required('Age is required')
      .test('mobile', 'Mobile number must be positive', value => {
        return value > 0;
      })
      .test('age', 'Age must be positive', value => {
        return value > 0;
      })
      .test('age', 'Age must be less than 120', value => {
        return value < 120;
      })
      .test('age', 'Age must be at least 0', value => {
        return value > 0;
      }),
    mobile: Yup.string()
      .matches(/^[0-9]+$/, 'Invalid Mobile Number')
      .required('Mobile is required')
      .min(10, 'Mobile must be at least 10 characters')
      .typeError('Mobile must be a number')

      .test('mobile', 'Mobile number must be positive', value => {
        return value > 0;
      })
      .test('mobile', 'Mobile number must be an integer', value => {
        return value % 1 === 0;
      }),
  });

  const { colors } = useTheme();
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setSelectedDob(date);
    setDate(date.toLocaleDateString());
    hideDatePicker();

  };
  const signUp = async (values, actions) => {
    const { name, age, mobile } = values;
    try {
      const response = await Api.post('/patient', {
        name,
        age,
        mobile,
      });
      if (response.status === 201) {
        if (values.doctor) {
          navigation.navigate('DoctorProfile', {
            name: values.name,
            age: values.age,
            mobile: values.mobile,
            gender: values.gender,
            selectDoctor: values.doctor,
            dob:values.dob
          });
          if (response.status !== 201) {
            setMessage(true);
            Alert.alert('Error', 'Something went wrong');

          }
        } else {
          navigation.navigate('Doctors', {
            name: values.name,
            age: values.age,
            mobile: values.mobile,
            gender: values.gender,
          });
        }
        actions.resetForm();
        formikRef.current?.resetForm();
        setGender('')
        setDoctorValue('')
      } else {
        Alert.alert('Error', 'Something went wrong');
      }
    } catch (err) {
      console.log(err);
      setMessage(true);
      Alert.alert('Error', 'Something went wrong');

    }
  };

  const onAgeChange = (value) => {
    formikRef.current.setFieldValue('age', value)


  };

  return (
    <>
      <ScrollView>
      <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>

        <View style={styles.container}>
          <StatusBar backgroundColor="#009387" barStyle="light-content" />
          <View style={styles.header}>

          </View>
          <Formik
            initialValues={{
              name: '',
              age: '',
              mobile: '',
              gender: '',
              doctor: '',
            }}
            innerRef={formikRef}
            validationSchema={validationSchema}
            onSubmit={signUp}>
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
              setFieldValue,
            }) => (
              <Animatable.View
                style={[
                  styles.footer,
                  {
                    backgroundColor: colors.background,
                  },
                ]}>
                <Text
                  style={[
                    styles.text_footer,
                    {
                      color: colors.text,
                    },
                  ]}>
                  Patient
                </Text>
                <View style={styles.action}>
                  <FontAwesome name="user-o" color={colors.text} size={20} />
                  <TextInput
                    placeholder="Patient Name"
                    style={[
                      styles.textInput,
                      {
                        color: colors.text,
                      },
                    ]}
                    placeholderStyle={{ color: '#666666', fontSize: 20 }}
                    onChangeText={handleChange('name')}
                    onBlur={handleBlur('name')}
                    value={values.name}
                    placeholderTextColor="#598"

                  />
                  <Text style={styles.errorMsg}>
                    {touched.name && errors.name}
                  </Text>
                </View>
                <View>
                <View style={styles.dobContainer}>
      {/* <Button title="Show Date Picker" onPress={showDatePicker} />
       */}
       <TouchableHighlight
        onPress={showDatePicker}
        style={styles.dateButton}>
        <Text style={styles.buttonText}>{
          date==='select dob'? 'Select Date': selectedDob.toDateString()
        }</Text>
      </TouchableHighlight>

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        value={selectedDob}
        
      />
    </View>
                </View>

                <Text
                  style={[
                    styles.text_footer,
                    {
                      color: colors.text,
                      marginTop: 35,
                    },
                  ]}>
                  Age
                </Text>
                <View style={styles.action}>
                  <Feather name="user" color={colors.text} size={20} />
                  <TextInput
                    onKeyPress={(e) => {
                      if (e.nativeEvent.key === '.') {
                        formikRef.current.setFieldValue('age', values.age + '.')
                      }
                    }}
                    placeholder="Age"
                    placeholderTextColor="#598"
                    placeholderStyle={{ color: '#666666', fontSize: 20 }}

                    style={[
                      styles.textInput,
                      {
                        color: colors.text,
                      },
                    ]}
                    keyboardType="numeric"

                    onChangeText={handleChange('age')}
                    onBlur={handleBlur('age')}
                    value={values.age}
                    maxLength={3}
                  />
                  <Text style={styles.errorMsg}>
                    {touched.age && errors.age}
                  </Text>
                </View>

                <View style={styles.dropdown}>
                  <RNPickerSelect
                    onValueChange={value => {
                      values.gender = value;
                      setGender(values.gender);
                      console.log(values.gender);
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
                    style={{
                      fontSize: 16,
                      paddingHorizontal: 10,
                      paddingVertical: 8,
                      borderWidth: 0.5,
                      borderColor: 'purple',
                      borderRadius: 8,
                      color: 'black',
                      paddingRight: 30,
                      top: 20,
                      right: 10,
                    }} />
                </View>
                <Text
                  style={[
                    styles.text_footer,
                    {
                      color: colors.text,
                      marginTop: 35,
                    },
                  ]}>
                  Mobile
                </Text>
                <View style={styles.action}>
                  <Feather name="user" color={colors.text} size={20} />
                  {/* <TextInput
                    placeholder="Mobile"
                    placeholderTextColor="#666666"
                    placeholderStyle={{color: '#666666', fontSize: 20}}
                    style={[
                      styles.textInput,
                      {
                        color: colors.text,
                      },
                    ]}
                    onChangeText={handleChange('mobile')}
                    onBlur={handleBlur('mobile')}
                    value={values.mobile}
                    keyboardType="numeric"
                    maxLength={10}
                  /> */}
                  <ValidatedTextInput
                    placeholder="Phone"
                    style={[
                      styles.textInput,
                      {
                        color: colors.text,
                      },
                    ]}
                    placeholderStyle={{ color: '#666666', fontSize: 20 }}
                    onChangeText={handleChange('mobile')}
                    onBlur={handleBlur('mobile')}
                    value={values.mobile}
                    keyboardType="numeric"
                    maxLength={10}
                    placeholderTextColor="#598"

                  />
                  <Text style={styles.errorMsg}>
                    {touched.mobile && errors.mobile}
                  </Text>
                </View>

                <View style={styles.dropdown}>
                  <RNPickerSelect
                    onValueChange={value => {
                      values.doctor = value;
                      console.log(values.doctor);
                      setDoctorValue(values.doctor);
                    }}
                    items={Object.values(doctors).map(item => {
                      return { label: item.name, value: item.id };
                    })}
                    placeholder={{
                      label: 'Select Doctor',
                      value: null,
                    }}
                    value={doctorValue}
                    placeholderStyle={{ color: '#666666', fontSize: 20 }}
                    placeholderTextColor="#598"


                  />
                </View>
                <View style={
                  styles.buttons
                }>

                  <TouchableOpacity
                    style={
                      !(values.name && values.age && values.mobile)
                        ? styles.buttonDisabled
                        : styles.button
                    }
                    onPress={handleSubmit}
                    disabled={!(values.name && values.age && values.mobile)}
                    testID="loginButton">
                    <Text
                      style={
                        !(values.name && values.age && values.mobile)
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
                      setDoctorValue('')

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
              </Animatable.View>
            )}
          </Formik>
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
}

export default PatientDetails;