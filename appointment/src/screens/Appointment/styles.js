
import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
    docInfo: {
      flex: 1,
      marginLeft: 20,
      flexDirection: 'row',
      position: 'relative',
      marginTop: 30,
      fontFamily: 'Ubuntu-Italic',
    },
    docName: {
      fontSize: 24,
      fontFamily: 'Ubuntu-Italic',
    },
    docSpeciality: {
      fontSize: 18,
      marginTop: 10,
      color: '#888',
      position: 'absolute',
      right: 180,
      top: 20,
      fontFamily: 'Ubuntu-Italic',
    },
    docAbout: {
      marginTop: 10,
      fontSize: 16,
      color: '#888',
      width: '80%',
      lineHeight: 25,
    },
    docImage: {
      width: 100,
      height: 100,
      borderRadius: 100,
    },
    datePicker: {
      flex: 1,
      marginTop: 20,
      flexDirection: 'row',
      borderColor: '#888',
    },
    datePickerButton: {
      paddingVertical: 12,
      paddingHorizontal: 30,
      backgroundColor: '#009387',
      borderRadius: 10,
      width: '60%',
      height: 60,
      marginTop: 20,
      marginLeft: 5,
      justifyContent: 'center',
      alignItems: 'center',
    },
    datePickerButtonText: {
      fontSize: 18,
      color: '#fff',
      fontFamily: 'Ubuntu-Italic',
      marginLeft: 10,
    },
  
    timeSlot: {
      flex: 2,
      marginTop: 20,
      flexDirection: 'row',
      borderWidth: 0.2,
      borderColor: '#888',
      flexWrap: 'wrap',
    },
    timeSlotItem: {
      width: '35%',
      height: 50,
      borderWidth: 0.3,
      borderColor: '#888',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#E9E6E6',
      borderRadius: 10,
      marginTop: 5,
      marginLeft: 5,
      borderColor: '#fff',
      color: '#000',
    },
  
    timeSlotItemText: {
      fontSize: 18,
      color: '#000',
      fontFamily: 'Ubuntu-Italic',
    },
    timeSlotItemSelect: {
      backgroundColor: '#009387',
    },
    bookButton: {
      margin: 40,
      backgroundColor: '#009387',
      borderRadius: 10,
      width: '80%',
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
    },
    bookButtonText: {
      fontSize: 18,
      color: '#fff',
      fontWeight: 'bold',
    },
    datePickerText: {
      fontSize: 18,
      color: '#fff',
      fontWeight: 'bold',
      marginLeft: 20,
      marginTop: 20,
      backgroundColor: '#0093',
      borderRadius: 10,
      padding: 10,
      width: '30%',
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
    },
    CalendarIconStyle: {
      position: 'absolute',
      left: 10,
      top: -10,
    },
    continueButton: {
      paddingVertical: 6,
      paddingHorizontal: 30,
      backgroundColor: '#fff',
      borderRadius: 10,
      width: '50%',
      height: 40,
      marginTop: 20,
      marginLeft: 5,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: '#009387',
    },
    continueButtonText: {
      fontSize: 14,
      color: '#009387',
      fontWeight: 'bold',
    },
  });
  