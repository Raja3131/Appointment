
import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
    
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      padding: 20,
      paddingTop: 30,
      paddingBottom: 30,
      

    },
    header: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#555',
      marginTop: 20,
      marginLeft: 20,
    },
    appointment: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      margin:20,
      height: 100,
      width: '110%',
      backgroundColor: '#fff',
      elevation: 10,
      shadowColor: '#000',
      shadowOffset: {
        width: 10,
        height: 5,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

    },
    textContainer: {
      padding: 20,
      
    } ,

    nameText: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#555',

    },
    dateText: {
      fontSize: 15,
      color: '#555',
    },
    timeText: {
      fontSize: 15,
      color: '#555',
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: 100,
      backgroundColor: '#fff',
      elevation: 10,
      shadowColor: '#000',
      padding: -30,

      
    },
    reschedule: {
      backgroundColor: '#00a680',
      padding: 10,
      borderRadius: 10,
      margin: 20,
      elevation: 10,
      shadowColor: '#000',
      shadowOffset: {
        width: 10,
        height: 5,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
    },
    rescheduleText: {
      fontSize: 14,
      fontWeight: 'bold',
      color: '#fff',
    },

    alertBox: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: 100,
      width: '110%',
      backgroundColor: '#fff',
      shadowColor: '#000',
      shadowOffset: {
        width: 10,
        height: 5,

      },
      shadowOpacity: 0.25,
    }
    


 
 
    
  });