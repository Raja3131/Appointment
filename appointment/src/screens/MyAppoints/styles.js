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
    height:140,
    width: '96%', 

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
    color: '#f3f6fb',
  
  },
  appointmentButtonText: {
    fontSize: 16,
    color: '#f3f6fb',
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
    shadowOffset: {width: 20, height: 20},
    shadowColor: '#a71e51',
    shadowOpacity: 20,
    shadowRadius: 20,

  },
  doctorText:{
    fontSize:16,
    color:'#f3f6fb',
    fontFamily:'Ubuntu-Italic',
    fontWeight:'bold',
  }
});
