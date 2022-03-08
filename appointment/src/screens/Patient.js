import React, { useRef, useState } from "react";
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
    StatusBar, KeyboardAvoidingView,
    Pressable,
    Alert,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather'
import { useForm, Controller } from "react-hook-form";
import Api from '../api/Api'
import { useTheme } from '@react-navigation/native';
import { ButtonGroup } from 'react-native-elements'
import * as Yup from 'yup';
import { Formik } from 'formik';
// import { Picker } from '@react-native-picker/picker';
import RNPickerSelect from 'react-native-picker-select';

const PatientDetails = ({ navigation }) => {
    // const [selectGender, setSelectGender] = useState('');



    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .matches(/^[a-zA-Z ]+$/, 'Name is not valid')
            .required('Name is required')
            .min(3, 'Name must be at least 3 characters')
            .max(50, 'Name must be less than 50 characters')
            .test('is-name', 'Name must be alphabet', value => {
                return /^[a-zA-Z]+$/.test(value)
            })
            .trim(),



        age: Yup.string().matches(/^[0-9]+$/, 'Age must be number')
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
            .matches(/^[0-9]+$/, 'Mobile number is not valid')
            .required('Mobile is required')
            .min(10, 'Mobile must be at least 10 characters')
            .typeError('Mobile must be a number')


            .test('mobile', 'Mobile number must be positive', value => {
                return value > 0;
            })
            .test('mobile', 'Mobile number must be an integer', value => {
                return value % 1 === 0;
            }),



    })



    const { colors } = useTheme();

    return (
        <>
            <KeyboardAvoidingView
                behavior="padding"
                style={{ flex: 1 }}
            >

                <View style={styles.container}>
                    <StatusBar backgroundColor='#009387' barStyle="light-content" />
                    <View style={styles.header}>
                        <Text style={styles.text_header}>Welcome!</Text>
                    </View>
                    <Formik
                        initialValues={{
                            name: '', age: '', mobile: '', gender:''
                          

                            
                        }}




                        onSubmit={(values, actions) => {

                            navigation.navigate('Doctors', { name: values.name, age: values.age, mobile: values.mobile, gender: values.gender });
                            console.log(values);

                            actions.resetForm();
                        }}
                        validationSchema={validationSchema}
                    >
                        {({ handleChange, handleBlur, handleSubmit, values, errors, touched, setFieldValue }) => (
                            <Animatable.View
                                animation="fadeInUpBig"
                                style={[styles.footer, {
                                    backgroundColor: colors.background
                                }]}
                            >

                                <Text style={[styles.text_footer, {
                                    color: colors.text
                                }]}>Username</Text>
                                <View style={styles.action}>
                                    <FontAwesome
                                        name="user-o"
                                        color={colors.text}
                                        size={20}
                                    />
                                    <TextInput
                                        placeholder="Your Username"
                                        style={[styles.textInput, {
                                            color: colors.text
                                        }]}
                                        placeholderStyle={{ color: "#666666", fontSize: 20 }}
                                        onChangeText={handleChange('name')}
                                        onBlur={handleBlur('name')}
                                        value={values.name}
                                    />
                                    <Text style={styles.errorMsg}>
                                        {touched.name && errors.name}
                                    </Text>

                                </View>


                                <Text style={[styles.text_footer, {
                                    color: colors.text,
                                    marginTop: 35
                                }]}>Age</Text>
                                <View style={styles.action}>
                                    <Feather
                                        name="user"
                                        color={colors.text}
                                        size={20}
                                    />
                                    <TextInput
                                        placeholder="Your Age"
                                        placeholderTextColor="#666666"
                                        placeholderStyle={{ color: "#666666", fontSize: 20 }}
                                        style={[styles.textInput, {
                                            color: colors.text
                                        }]}
                                        onChangeText={handleChange('age')}
                                        onBlur={handleBlur('age')}
                                        value={values.age}
                                        keyboardType='numeric'
                                        maxLength={3}

                                    />
                                    <Text style={styles.errorMsg}>
                                        {touched.age && errors.age}
                                    </Text>

                                </View>


                                <View style={styles.dropdown}>

                                    {/* <Picker
                                        selectedValue={selectGender}


                                        onValueChange={(item, itemIndex) => {
                                            setSelectGender(item)
                                            console.log(item)

                                        }
                                        }




                                    >

                                        <Picker.Item label="Female" value="Female" />
                                        <Picker.Item label="Male" value="Male" />


                                        <Picker.Item label="Transgender" value="Transgender" />
                                    </Picker> */}

<RNPickerSelect
            onValueChange={(value) => {
                values.gender=value
                console.log(values.gender)
            }
                
            }
            items={[
                { label: 'Male', value: 'Male' },
                { label: 'Female', value: 'Female' },
                { label: 'Transgender', value: 'Transgender' },
            ]}
        />

                                </View>
                                <Text style={[styles.text_footer, {
                                    color: colors.text,
                                    marginTop: 35
                                }]}>Mobile</Text>
                                <View style={styles.action}>
                                    <Feather
                                        name="user"
                                        color={colors.text}
                                        size={20}
                                    />
                                    <TextInput
                                        placeholder="Mobile"
                                        placeholderTextColor="#666666"
                                        placeholderStyle={{ color: "#666666", fontSize: 20 }}
                                        style={[styles.textInput, {
                                            color: colors.text
                                        }]}
                                        onChangeText={handleChange('mobile')}
                                        onBlur={handleBlur('mobile')}
                                        value={values.mobile}
                                        keyboardType='numeric'
                                        maxLength={10}
                                    />
                                    <Text style={styles.errorMsg}>
                                        {touched.mobile && errors.mobile}
                                    </Text>
                                </View>

                                <TouchableOpacity
                                    style={[styles.signIn, {
                                        borderColor: '#009387',
                                        borderWidth: 1,
                                        marginTop: 30
                                    }]}
                                    onPress={handleSubmit}
                                >
                                    <Text style={[styles.textSign, {
                                        color: '#009387'
                                    }]}>Submit</Text>
                                </TouchableOpacity>
                            </Animatable.View>
                        )}


                    </Formik>

                </View>
            </KeyboardAvoidingView>
        </>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#009387'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 16,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },

});
export default PatientDetails;