
import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009387',
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 3,
    backgroundColor: '#009387',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: '#f3f6fb',
    fontSize: 30,
    fontFamily: 'Ubuntu-Italic',
    backgroundColor: '#009387',
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18,
    fontFamily: 'Ubuntu-Italic',
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#808080',
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
  errorMsg: {
    color: '#FF0000',
    fontSize: 16,
  },

  signIn: {
    width: '50%',
    height: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
  },
  textSign: {
    fontSize: 16,
    fontFamily: 'Ubuntu-Italic',
    color: '#f3f6fb',
  },
  buttons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    marginTop: 40,
    width: '40%',
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#009387',
    elevation: 5,
    shadowOffset: 5,
    shadowColor: '#000',
    shadowOpacity: 2,
    shadowRadius: 20,

  },
  buttonDisabled: {
    width: '40%',
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#d3d3d3',
    elevation: 5,
    shadowOffset: 5,
    shadowColor: '#000',
    shadowOpacity: 2,
    shadowRadius: 20,
    marginTop: 40,

  },
  textDisabled: {
    color: '#f3f6fb',
    fontSize: 16,
    fontFamily: 'Ubuntu-Italic',
  },
  buttonText: {
    color: '#f3f6fb',
    fontSize: 16,
    fontFamily: 'Ubuntu-Italic',
    fontWeight: 'bold'


  },
  dobContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    height:80,
  },
  dateButton: {
    width: '40%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#f5f5f5',
    elevation: 5,
    shadowOffset: 5,
    shadowColor: '#000',
    shadowOpacity: 2,
    shadowRadius: 20,

  },
  dropDown:{
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30,
    top: 20,
    right: 10,
  }
});