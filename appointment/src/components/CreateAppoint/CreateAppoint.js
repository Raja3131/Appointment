import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  StatusBar,
  KeyboardAvoidingView,
  Pressable,
  Alert,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import RNPickerSelect from 'react-native-picker-select';
import {styles} from './styles';
import Message from '../../components/Common/Message/Message';
import ValidationSchema from '../../helpers/ValidationSchema';
import {Formik} from 'formik';




const CreateAppoint = ({
    signUp,
    navigation,
    route,
    appoints,
    message,
    colors,
    doctors
}) => {
    return(
    <ScrollView>
    <KeyboardAvoidingView behavior="padding" style={{flex: 1}}>
      <View style={styles.container}>
        <StatusBar backgroundColor="#009387" barStyle="light-content" />
        <View style={styles.header}>
          <Text style={styles.text_header}>Welcome!</Text>
          {message ? (
            <Message message="Patient Already Existed" danger={true} />
          ) : null}
        </View>
        <Formik
          initialValues={{
            name: '',
            age: '',
            mobile: '',
            gender: '',
            doctor: '',
          }}
          validationSchema={ValidationSchema}
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
              animation="fadeInUpBig"
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
                  placeholderStyle={{color: '#666666', fontSize: 20}}
                  onChangeText={handleChange('name')}
                  onBlur={handleBlur('name')}
                  value={values.name}
                />
                <Text style={styles.errorMsg}>
                  {touched.name && errors.name}
                </Text>
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
                  placeholder="Your Age"
                  placeholderTextColor="#666666"
                  placeholderStyle={{color: '#666666', fontSize: 20}}
                  style={[
                    styles.textInput,
                    {
                      color: colors.text,
                    },
                  ]}
                  onChangeText={handleChange('age')}
                  onBlur={handleBlur('age')}
                  value={values.age}
                  keyboardType="numeric"
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
                    console.log(values.gender);
                  }}
                  items={[
                    {label: 'Male', value: 'Male'},
                    {label: 'Female', value: 'Female'},
                    {label: 'Transgender', value: 'Transgender'},
                  ]}
                />
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
                <TextInput
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
                  }}
                  items={Object.values(doctors).map(item => {
                    return {label: item.name, value: item.id};
                  })}
                />
              </View>

              <TouchableOpacity
                style={[
                  styles.signIn,
                  {
                    borderColor: '#009387',
                    borderWidth: 1,
                    marginTop: 30,
                  },
                ]}
                onPress={handleSubmit}
                disabled={!(values.name && values.age && values.mobile)}
                testID="loginButton">
                <Text
                  style={[
                    styles.textSign,
                    {
                      color: '#009387',
                    },
                  ]}>
                  Submit
                </Text>
              </TouchableOpacity>
            </Animatable.View>
          )}
        </Formik>
      </View>
    </KeyboardAvoidingView>
    </ScrollView>
    )
}


export default CreateAppoint;