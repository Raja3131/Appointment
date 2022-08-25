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
      fontSize: 18,
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
      width: '70%',
      marginBottom: 20,



    },
    datePickerButton: {
      alignItems: 'center',
      width: '100%',
      marginBottom: 20,
      backgroundColor: '#00a680',
      backgroundColor: '#a71e51',
      borderRadius: 10,
      padding: 10,
      borderColor: '#00a680',
      borderColor: '#a71e51',
      borderWidth: 1,
    },
    datePickerButtonText: {
      color: '#f3f6fb',
      fontSize: 18,
      fontWeight: 'bold',
      marginRight: 10,
      marginLeft: 10,
    },
    timeSlot: {
      flexDirection: 'row',
      alignItems: 'center',
      width: '100%',
      marginBottom: 20,
      flexWrap: "wrap",
      margin: 20,

    },
    timeSlotItem: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      width: '25%',
      height:40,
      backgroundColor: '#f3f6fb',
      borderRadius: 10,
      padding: 10,
      borderWidth: 1,
      borderColor:'#0087',
      padding: 10,
      margin: 5,

    },
    timeSlotItemSelect: {
      backgroundColor: '#009387',
      borderColor: '#009387',
      borderWidth: 1,
      width: '25%',
      borderRadius: 10,
      padding: 10,
    },
    timeSlotItemText: {
      color: '#fff',
      fontSize: 14,
      textAlign: 'center',
      
    },
    button:{
      backgroundColor: '#009387',
      borderRadius: 10,
      padding: 10,
      margin: 20,
      width: '40%',
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
      fontSize: 12,
      fontWeight: 'bold',
      textAlign: 'center',
      
    },
    appointDetailsContainer: {
     
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent:'center',
      height:180,
      width: '80%',
      padding: 10,
      borderRadius: 10,
      backgroundColor: '#009387',
      shadowOffset: {width: 10, height: 10},
      shadowColor: '#000',
      shadowOpacity: 2,
      shadowRadius: 20,
      elevation: 5,
      marginBottom: 20
    },
    detailsText: {
      fontSize: 18,
      textAlign: 'center',
      color: '#fff',
      marginBottom: 20,
      fontFamily: 'Ubuntu-Italic',

    },
    buttonDisabled:{
      backgroundColor: '#E7E7E7',
      borderRadius: 10,
      padding: 10,
      margin: 20,
      width: '40%',
      alignItems: 'center',
      
    }
    
    
  });