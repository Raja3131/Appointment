
import {StyleSheet} from 'react-native';
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
      color: '#fff',
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
    },
    buttons:{
      flex:1,
      flexDirection:'row',
      justifyContent:'space-around',



    }
  });