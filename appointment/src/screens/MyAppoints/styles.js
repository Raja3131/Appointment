import { StyleSheet } from 'react-native';
import theme from '../../styles/theme';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.WHITE_COLOR,

  },
  appointment: {
    backgroundColor: theme.PRIMARY_COLOR,
    margin: 10,
    padding: 10,
    borderRadius: 10,
    elevation: 5,
    height: 100,
    width: '96%',
    alignSelf: 'center',

  },
  pressableView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: -20,

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
    marginTop: -5,
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
    color: theme.WHITE_COLOR,

  },
  appointmentButtonText: {
    fontSize: 16,
    color: theme.WHITE_COLOR,
  },
  cancelButton: {
    backgroundColor: '#b03562',
    padding: 10,
    borderRadius: 10,
    elevation: 20,
    width: '50%',
    alignItems: 'center',
    marginLeft: '25%',
    shadowOffset: { width: 20, height: 20 },
    shadowColor: '#a71e51',
    shadowOpacity: 20,
    shadowRadius: 20,

  },
  doctorText: {
    fontSize: 16,
    color: theme.WHITE_COLOR,
    fontFamily: 'Ubuntu-Italic',
    fontWeight: 'bold',
  }
});
