import React from 'react'
import {View,Text,StyleSheet,Pressable } from 'react-native';
import {useState,useEffect} from 'react';
import Api from '../api/Api';


const MyAppoints = ({navigation}) => {
    const [isLoading, setIsLoading] = useState(true);

    const [appointments,setAppointments] = useState([]);
    

    useEffect(()=>{
        Api.get('/appoints')
        .then(res=>{
            setAppointments([...res.data.appoints]);
            setIsLoading(false);

            console.log(res.data);

        })
        .catch(err=>{
            console.log(err);
        })
    },[
        setAppointments,
        setIsLoading,
       
    ])
const OnDelete = (id) => {
    Api.delete(`/appoints/${id}`)
    .then(res=>{
        console.log(res);
        setAppointments(appointments.filter(appointment=>appointment._id !== id));
    }).catch(err=>{
        console.log(err);
    })
}

const OnReschedule = (id) => {
    navigation.navigate('Reschedule',{id:id});

}
    
  
   
    return (
        <View>
            <Text style={styles.header}>My Appointments</Text>
       
        {appointments.map(appointment=>(
            <View style={styles.appointment}>
                <Text style={styles.nameText}>{appointment.name}</Text>
                <Pressable
                onPress={()=>OnReschedule(
                    appointment._id
                )}
                style={styles.editButton}>

                    <Text style={styles.editText}>Reschedule</Text>

                </Pressable>
                
                <Pressable style={styles.delete} onPress={()=>OnDelete(appointment._id)}>
                    <Text style={styles.cancelTicket}>Cancel Booking</Text>
                </Pressable>


        </View>
        ))}
        </View>

    )
}

const styles = StyleSheet.create({
    header:{
        fontSize:20,
        fontWeight:'bold',
        marginTop:20,
        marginLeft:20,
        marginBottom:20,
        textAlign:'center'
    },
    appointment:{
        margin:10,
        padding:10,
        borderRadius:10,
        backgroundColor:'#fff',
        elevation:5,
        shadowColor:'#000',
    },
    delete:{
        backgroundColor:'grey',
        padding:10,
        borderRadius:10,
        elevation:5,
        shadowColor:'#000',
        shadowOffset:{width:0,height:2},
        color:'#fff',
        width:'45%',
        alignSelf:'flex-end',
        marginTop:10,
        backgroundColor:'grey',
    },
    cancelTicket:{
        color:'#fff',
        fontSize:20,
        fontWeight:'bold',

    },
    nameText:{
        fontSize:20,
        fontWeight:'bold',
        marginBottom:10,
    },
    editButton:{
        backgroundColor:'#fff',
        padding:10,
        borderRadius:10,
        elevation:5,
        shadowColor:'#000',
        shadowOffset:{width:0,height:2},
        color:'#000',
        width:'45%',
        alignSelf:'flex-start',
        marginTop:10,
        backgroundColor:'#fff',
        top:50,
    },
})
export default MyAppoints;