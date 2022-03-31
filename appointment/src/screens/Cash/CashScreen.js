import { StyleSheet, Text, View,Pressable,Alert } from 'react-native'
import React from 'react'
import Api from '../../api/Api';


const Cash = ({navigation,route}) => {
  const {name,doctor,date,time} = route.params;

  const onPress = () => {
    try {
      Api.post('/appoints',{
        name,
        doctor,
        date,
        time
      }).then(res => {
        Alert.alert('Appointment has been booked successfully')
        navigation.navigate('Patients')
        
      })
      
    } catch (error) {
      console.log(error);
    }
      
    
  }

  return (
    <View style={styles.container}>
      <Text style={styles.nameText}>{name}</Text>
      <Text style={styles.dateText}>{date}</Text>
      <Text style={styles.timeText}>{time}</Text>
      <Pressable style={styles.button} onPress={
        onPress
      }>
        <Text style={styles.buttonText}>Appoint</Text>
      </Pressable>
    </View>
  )
}

export default Cash

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  button:{
    backgroundColor:'#00bfff',
    width:200,
    height:50,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:10,
    marginTop:20
  },
  buttonText:{
    color:'#f5f5f5',
    fontSize:20
  },
  nameText:{
    fontSize:20,
    fontWeight:'bold',
    marginTop:20
  },
  dateText:{
    fontSize:20,
    marginTop:20
  },
  timeText:{
    fontSize:20,
    marginTop:20
  }

})