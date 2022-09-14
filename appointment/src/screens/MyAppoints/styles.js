import { StyleSheet,Dimensions } from 'react-native';
import { useWindowDimensions } from 'react-native';
import theme from '../../styles/theme';
const { height, width } = useWindowDimensions()

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.WHITE_COLOR,

  },
  appointment: {
    marginVertical: 10,
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 15,
    width: width / 1.1,
    marginHorizontal: 20,
    borderRadius: 20,

    height: height / 8,

    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 1.5,

  },
  pressableView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
    width: '30%',
    alignItems: 'center',
    marginLeft: '15%',
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
  },
  viewButton:{
    padding:5,
    backgroundColor: '#555555',
    marginLeft:20,
    width:'20%',
    padding: 10,
    borderRadius: 10,
    elevation: 20,
    marginLeft: '10%',
  },
  text:{
    fontSize: 18,
    color: "white",
    textAlign: "center",
  }

});
