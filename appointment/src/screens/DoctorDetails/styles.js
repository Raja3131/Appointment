import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    image: {
      width: 300,
      height: 300,
      borderRadius: 100
    },
    name: {
      fontSize: 24,
      fontWeight: 'bold'
    },
    speciality: {
      fontSize: 18
    },
    about: {
      fontSize: 18,
      marginTop: 20,
      marginBottom: 20,
      color: 'grey'
   
  
    },
    button: {
      marginTop: 24,
      paddingVertical: 12,
      paddingHorizontal: 30,
      backgroundColor: '#009387',
      borderRadius: 10,
      width: '80%'
    },
    buttonText: {
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
      color: '#fff'
    }
  });