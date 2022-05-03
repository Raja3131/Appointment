import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#009387',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    borderRadius: 10,
    color: '#fff',
    elevation: 5,
    shadowOffset: {width: 0, height: 2},
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 2,
    
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 20,
    paddingTop: 30,
    paddingBottom: 30,
  },
  appointment: {
    flex: 1,
    marginTop: 20,
    flexDirection: 'row',
    borderColor: '#888',
    justifyContent: 'space-between',
    padding: 10,
    margin: 10,

  },
  appointmentText: {
    fontSize: 18,
    color: '#888',
    padding: 10,
    marginLeft: 1,
  },
  appointmentName:{
    fontSize: 18,
    color: '#888',
    padding: 10,

  }
});

  
 