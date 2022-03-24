
import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
    container: {
   flex: 1,

    },
    header: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
      fontWeight: 'bold',
    },
    appointment: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      margin: 10,
      backgroundColor: '#fff',
      borderRadius: 10,
      padding: 10,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      
    },
    nameText: {
      fontSize: 16,
      fontWeight: 'bold',

    },
    dateText: {
      fontSize: 15,
      fontWeight: 'bold',
      color: '#999',
      letterSpacing: 0.5,

    },
    timeText: {
      marginLeft: 10,
      fontSize: 15,
      fontWeight: 'bold',
      letterSpacing: 1,
    },
    delete: {
      backgroundColor: '#ff4d4d',
      borderRadius: 10,
      padding: 10,
      margin: 10,
      height: 40,
      width: 80,
      alignItems: 'center',
      justifyContent: 'center',
    },
    cancelText: {
      color: '#fff',
      fontSize: 14,
      fontWeight: 'bold',
    },
    reschedule: {
      backgroundColor: '#99ff99',
      borderRadius: 10,
      padding: 10,
    },
    rescheduleText: {
      color: '#000',
      fontSize: 14,
      fontWeight: 'bold',
    },
    alert:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      marginBottom: 20,
      flexWrap: "wrap",
      margin: 20,
      backgroundColor: '#555',
    
    },
    alertBox: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      marginBottom: 20,
      flexWrap: "wrap",
      margin: 20,
      borderRadius: 10,
    }
 
    
  });