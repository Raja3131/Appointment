// import React from 'react'
// import { Text, View, Image, Button, StyleSheet, Pressable, TouchableHighlight } from "react-native";
// import { useState, useEffect } from "react";
// import doctors from '../db/doctors'
// import TimeSlot from '../db/TimeSlot';
// import RazorpayCheckout from 'react-native-razorpay';

// const Booking = ({ route, navigation }) => {
//    const makePayment = () => {
//     var options = {
//         description: 'Credits towards consultation',
//         image: '../assets/images/Paintwynk.png',
//         currency: 'INR',
//         key: 'rzp_test_fvX4sVrv4MDESx', // Your api key
//         amount: '5000',
//         name: 'WynkEMR',
//         prefill: {
//           email: 'wynkemr@gmail.com',
//           contact: '9790926739',
//           name: 'WynkEMR'
//         },
//         theme: {color: '#009387'}
//       }
//       RazorpayCheckout.open(options).then((data) => {
//         // handle success
//         alert(`Success: ${data.razorpay_payment_id}`);
//       }).catch((error) => {
//         // handle failure
//         alert(`Error: ${error.code} | ${error.description}`);
//       });

//    }


//     const { selectedDate } = route.params;
//     const { select } = route.params;
//     const { doctorId } = route.params;

//     return (
//         <>
//             <View style={styles.docInfo}>
//                 <Image style={styles.docImage} source={doctors.find(doctor => doctor.id === doctorId).image} />

//                 <Text style={styles.docName}>{doctors.find(doctor => doctor.id === doctorId).name}</Text>
//                 <Text style={styles.docSpeciality}>{doctors.find(doctor => doctor.id === doctorId).speciality}</Text>
//                 <Text style={styles.datePickerButtonText}>{selectedDate.toDateString()}</Text>
//                 <Text style={styles.timeSlot}>{select.startTime}</Text>
//                 <TouchableHighlight
//                 style={styles.bookButton}
//                 onPress={makePayment}
//                 >
//                 <Text style={styles.bookButtonText}>Book</Text>
//             </TouchableHighlight>
//             </View>
            
           
//         </>
//     )


// }

// const styles = StyleSheet.create({
//     docInfo: {
//         flex: 1,
//         flexDirection: 'column',
//         alignItems: 'center',
//         marginTop: 20,
//         marginBottom: 20,
//         marginLeft: 20,
//         marginRight: 20,
//         borderWidth: 2,
//         borderColor: '#66beb7',
//         borderRadius: 10,
//         shadowColor: '#000',
//         shadowOffset: { width: 2, height: 6 },
//         shadowOpacity: 20,
//         shadowRadius: 5,
//         elevation: 10,
//         backgroundColor: '#ddd',
//     },
//     docImage: {
//         width: 100,
//         height: 100,
//         borderRadius: 50,
//         marginBottom: 10,

//     },
//     docName: {
//         fontSize: 20,
//         fontFamily:'Ubuntu-Italic',

//         marginBottom: 10,
//     },
//     docSpeciality: {
//         fontSize: 22,
//         marginTop: 10,
//         color: '#888',
//         position: 'absolute',
//         right: 20,
//         top: 20,
//         fontFamily:'Ubuntu-Italic',




//     },
//     docAbout: {
//         marginTop: 10,
//         fontSize: 16,
//         color: '#888',
//         width: '80%',
//         lineHeight: 25,
//     },
//     datePickerButtonText: {

//         fontSize: 18,
//         color: '#fff',
//         fontFamily:'Ubuntu-Italic',
//         backgroundColor: '#009387',
//         padding: 10,
//         borderRadius: 10,
//         textAlign: 'center',
//         marginTop: 20,
//         marginLeft: 5,
//         justifyContent: 'center',
//         alignItems: 'center',
//         shadowOffset: {width: 0, height: 10},
//         shadowColor: '#000',
//         shadowOpacity: 0.2,
//         shadowRadius: 20,
//         elevation: 10,
        


//     },
//     timeSlot: {
//         fontSize: 18,
//         color: '#fff',
//         fontFamily:'Ubuntu-Italic',

//         backgroundColor: '#009387',
//         padding: 10,
//         borderRadius: 10,
//         marginTop: 20,
//         shadowOffset: {width: 0, height: 10},
//         shadowColor: '#000',
//         shadowOpacity: 0.2,
//         shadowRadius: 20,
//         elevation: 10,
        


//     },
//     payment: {
//         flex: 1,
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         marginTop: 20,
//         marginLeft: 20,
//         marginRight: 20,
//         borderWidth: 2,
//         borderColor: '#66beb7',
//         borderRadius: 10,
//         shadowColor: '#000',
//         shadowOffset: { width: 6, height: 6 },
//         shadowOpacity: 20,
//         shadowRadius: 5,
//         elevation: 10,
//         backgroundColor: '#ddd',
//     },
//     paymentText: {
//         fontSize: 20,
//         fontWeight: 'bold',
//         marginLeft: 20,
//         marginTop: 10,
//     },
//     bookButton: {
//         marginTop: 20,
//         marginLeft: 20,
//         marginRight: 20,
//         borderWidth: 2,
//         borderColor: '#66beb7',
//         borderRadius: 10,
//         shadowColor: '#000',
//         shadowOffset: { width: 6, height: 6 },
//         shadowOpacity: 20,
//         shadowRadius: 5,
//         elevation: 10,
//         backgroundColor: '#009387',
//         fontSize: 10,
//         height: 30,
//         width: '50%',
    
    
//     },
//     bookButtonText: {
//         fontSize: 20,
//         color: '#fff',
//         fontFamily:'Ubuntu-Italic',
//         textAlign: 'center',
//         borderRadius: 10,
//     }
    
  
   
    
// })
// export default Booking