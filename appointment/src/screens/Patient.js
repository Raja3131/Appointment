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
import DropDownPicker from 'react-native-dropdown-picker';
import * as Yup from 'yup';

const PatientDetails = ({ navigation }) => {

    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .required('Name is required'),
        age: Yup.number()
            .required('Age is required'),
    })

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Male', value: 'Male' },
        { label: 'female', value: 'Female' }
    ]);


    const [data, setData] = useState({
        name: '',
        age: '',
        phone: '',
        check_textInputChange: false,
        secureTextEntry: true,

        isValidUser: true,

    });


    const { colors } = useTheme();
    const nameRef = useRef();
    const ageRef = useRef();


    const textInputChange = (val) => {
        if (val.trim().length >= 4) {

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

    const handleAgeChange = (val) => {
        if (val.trim().length >= 2) {
            setData({
                ...data,
                age: val,
                check_textInputChange: true,
                isValidUser: true
            });
        } else {
            setData({
                ...data,
                age: val,
                check_textInputChange: false,
                isValidUser: false

            });
        }

    }


    const handleValidUser = (val) => {
        if (val.trim().length >= 4) {
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

    const handleSubmit = (data) => {
        if (data.name.length == 0 || data.age.length == 0 || data.value == '') {
            Alert.alert('Wrong Input!', 'Username or password or Gender field cannot be empty.', [
                { text: 'Okay' }
            ]);
            return;
        }
        if (data.name.length < 4) {
            Alert.alert('Wrong Input!', 'Username must be at least 4 characters long.', [
                { text: 'Okay' }
            ]);

            return;
        }
        if (data.age.length < 1) {
            Alert.alert('Wrong Input!', 'Password must be at least 2 characters long.', [
                { text: 'Okay' }
            ]);
            return;
        }
        navigation.navigate('Doctors', {
            name: data.name,
            age: data.age,
            items: items,
        });



    }

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
                                placeholder="Username"
                                placeholderTextColor="#666666"
                                style={[styles.textInput, {
                                    color: colors.text
                                }]}
                                placeholderStyle={{ color: "#666666", fontSize: 20 }}


                                autoCapitalize="none"
                                onChangeText={(val) => textInputChange(val)}
                                onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
                                ref={nameRef}
                            />
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
                        </View>
                        {data.isValidUser ? null :
                            <Animatable.View animation="fadeInLeft" duration={500}>
                                <Text style={styles.errorMsg}>Username must be 4 characters long.</Text>
                            </Animatable.View>
                        }


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
                                autoCapitalize="none"
                                onChangeText={(val) => handleAgeChange(val)}
                                onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
                                ref={ageRef}
                                keyboardType="decimal-pad"
                                maxLength={2}



                            />

                        </View>
                        {data.check_textInputChange ?
                            <Animatable.View animation="bounceIn" duration={500}>
                                <Feather
                                    name="check-circle"
                                    color="green"
                                    size={20}
                                />
                            </Animatable.View>
                            : null}
                        {data.isValidUser ? null :
                            <Animatable.View animation="fadeInLeft" duration={500}>
                                <Text style={styles.errorMsg}>Age must be valid</Text>
                            </Animatable.View>
                        }

                      
                        <View style={styles.dropdown}>
                            <DropDownPicker
                                open={open}
                                value={value}
                                items={items}
                                setOpen={setOpen}
                                setValue={setValue}
                                setItems={setItems}
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
                                autoCapitalize="none"
                                onChangeText={(val) => handleAgeChange(val)}
                                onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
                                ref={ageRef}
                                keyboardType="decimal-pad"
                                maxLength={10}



                            />

                        </View>
                        {data.check_textInputChange ?
                            <Animatable.View animation="bounceIn" duration={500}>
                                <Feather
                                    name="check-circle"
                                    color="green"
                                    size={20}
                                />
                            </Animatable.View>
                            : null}
                        {data.isValidUser ? null :
                            <Animatable.View animation="fadeInLeft" duration={500}>
                                <Text style={styles.errorMsg}>Number Must be valid.</Text>
                            </Animatable.View>
                        }
                    
                        <TouchableOpacity
                            onPress={() => handleSubmit(data)}
                            style={[styles.signIn, {
                                borderColor: '#009387',
                                borderWidth: 1,
                                marginTop: 30
                            }]}
                        >
                            <Text style={[styles.textSign, {
                                color: '#009387'
                            }]}>Submit</Text>
                        </TouchableOpacity>
                    </Animatable.View>
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
        fontSize: 14,
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