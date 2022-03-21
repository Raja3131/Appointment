import React from 'react'
import {View,Text,StyleSheet,Pressable } from 'react-native';
import {useState,useEffect} from 'react';
import Api from '../api/Api';


const MyAppoints = () => {
    const [appointments,setAppointments] = useState([]);

    useEffect(()=>{
        Api.get('/appoints')
        .then(res=>{
            setAppointments(res.data.appoints);
            console.log(res.data);

        })
        .catch(err=>{
            console.log(err);
        })
    },[
    ])

    
  
   
    return (
        <View>
            <Text>My Appointments</Text>
       
        {appointments.map(appointment=>(
            <View style={styles.appointment}>
                <Text>{appointment.name}</Text>
                <Pressable style={styles.delete} onPress={()=>{
                    Api.delete(`/appoints/${appointment._id}`)
                    .then(res=>{
                        console.log(res);
                        setAppointments(appointments.filter(appointment=>appointment._id!==res.data._id));

                    }).catch(err=>{
                        console.log(err);
                    })
                }}>
                    <Text>Cancel Booking</Text>
                </Pressable>


        </View>
        ))}
        </View>

    )
}

const styles = StyleSheet.create({
    appointment:{
        margin:10,
        padding:10,
        borderRadius:10,
        backgroundColor:'#fff',
        elevation:5,
        shadowColor:'#000',
        shadowOffset:{width:0,height:2},

        shadowOpacity:0.8,
        shadowRadius:2,
        elevation:5,
        borderWidth:1,
        borderColor:'#ddd',
        borderRadius:10,
        backgroundColor:'#fff',
        elevation:5,
        shadowColor:'#000',
        shadowOffset:{width:0,height:2},
        shadowOpacity:0.8,
        shadowRadius:2,
        elevation:5,
    },
    delete:{
        backgroundColor:'red',
        padding:10,
        borderRadius:10,
        elevation:5,
        shadowColor:'#000',
        shadowOffset:{width:0,height:2},
        color:'#fff',
        width:'50%',
        alignSelf:'flex-end',
    },
})
export default MyAppoints;