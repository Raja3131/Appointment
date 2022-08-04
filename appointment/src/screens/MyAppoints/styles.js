import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f6fb',

  },
  appointment: {
    backgroundColor: '#009387',
    margin: 10,
    padding: 10,
    borderRadius: 10,
    elevation: 5,

  },
 pressableView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

 },
 appointmentButton: {
    backgroundColor: '#555',
    padding: 10,
    borderRadius: 10,
    elevation: 5,
    shadowOffset: 5,
    
    
 },

  appointmentText: {
    fontSize: 16,
    color: '#333',
    fontFamily: 'Ubuntu-Italic',
    fontWeight: 'bold',

  },
  title: {
    fontSize: 24,
    color: '#555',
    margin: 20,
    fontFamily: 'Ubuntu-Italic',
    

  },
  addButton: {
    backgroundColor: '#009387',
    padding: 10,
    borderRadius: 10,
    elevation: 5,
    width: '50%',
    alignItems: 'center',
    marginTop: 20,
    

  },
  addText: {
    fontSize: 16,
    color: '#fff',
  
  },
  appointmentButtonText: {
    fontSize: 16,
    color: '#fff',
  },
  cancelButton: {
    backgroundColor: '#a71e51',
    padding: 10,
    borderRadius: 10,
    elevation: 10,
    width: '50%',
    alignItems: 'center',
    marginTop: 20,
    marginLeft: '25%',
  },
  doctorText:{
    fontSize:16,
    color:'#fff',
    fontFamily:'Ubuntu-Italic',
    fontWeight:'bold',
  }
});
