import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#555',

  },
  appointment: {
    backgroundColor: '#fff',
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
 },

  appointmentText: {
    fontSize: 16,
    color: '#333',
  },
  title: {
    fontSize: 24,
    color: '#555',
    margin: 20,
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
  
  }
});
