
import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
  
    body: {
      flex: 1,
      backgroundColor: '#fff',
      paddingHorizontal: 20,
      paddingVertical: 20,
      padding: 10,
      shadowOffset: {width: 0, height: 10},
      shadowColor: '#000',
      shadowOpacity: 0.2,
      shadowRadius: 10,
      elevation: 2,
      marginTop: -20,
    },
    doctorContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,
      padding: 10,
      borderRadius: 10,
      backgroundColor: '#f3f6fb',
      shadowOffset: {width: 10, height: 10},
      shadowColor: '#000',
      shadowOpacity: 2,
      shadowRadius: 20,
      elevation: 5,
    },
  
    doctorImage: {
      width: 70,
      height: 70,
      borderRadius: 40,
      marginRight: 20,
      marginBottom: 30,
    },
    doctorInfo: {
      flex: 1,
      marginLeft: 30,
      flexDirection: 'row',
      position: 'relative',
      marginBottom: 30,
    },
    doctorName: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    doctorSpeciality: {
      fontSize: 15,
      color: '#aaa',
    },
    doctorButtonText: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#f3f6fb',
    },
    button: {
      alignItems: 'center',
      backgroundColor: '#f3f6fb',
      padding: 10,
      marginTop: 30,
      marginBottom: 10,
      borderRadius: 20,
      shadowOffset: {width: 0, height: 10},
      shadowColor: '#000',
      shadowOpacity: 0.2,
      shadowRadius: 20,
      elevation: 5,
      backgroundColor: '#f3f6fb',
    },
    text: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#009387',
    },
    doctorInfoRow: {
      flexDirection: 'row',
      marginBottom: 10,
      alignSelf: 'flex-end',
      position:'absolute',
      top:10,
      right:10,

      

    }
  });
  