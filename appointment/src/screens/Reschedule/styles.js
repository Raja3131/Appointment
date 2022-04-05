import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    header: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    label: {
      fontSize: 18,
      marginBottom: 5,
    },
    input: {
      borderColor: '#009387',
      borderWidth: 1,
      borderRadius: 10,
      padding: 10,
      width: '100%',
      marginBottom: 20,
      backgroundColor: '#888',
    },
    datePicker:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      marginBottom: 20,



    },
    datePickerButton: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      marginBottom: 20,
      backgroundColor: '#00a680',
      borderRadius: 10,
      padding: 10,
      borderColor: '#00a680',
      borderWidth: 1,

    },
    datePickerButtonText: {
      color: '#000',
      fontSize: 18,
      fontWeight: 'bold',
      marginRight: 10,
      marginLeft: 10,
    },
    timeSlot: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      marginBottom: 20,
      flexWrap: "wrap",
      margin: 20,

    },
    timeSlotItem: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      width: '20%',
      height:45,
      backgroundColor: '#888',
      borderRadius: 10,
      padding: 10,
      borderWidth: 1,
      borderColor:'#888',
      padding: 10,
      margin: 5,

    },
    timeSlotItemSelect: {
      backgroundColor: '#00a680',
      borderColor: '#00a680',
      borderWidth: 1,
      width: '20%',
      borderRadius: 10,
      padding: 10,
    },
    timeSlotItemText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
      
    },
    button:{
      backgroundColor: '#00a680',
      borderRadius: 10,
      padding: 10,
      margin: 20,
      width: '50%',
      alignItems: 'center',
      
    },
    buttonText:{
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    timeSlotButtonText:{
      color: '#000',
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
      
    }
    
    
  });