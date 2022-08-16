import { StyleSheet } from 'react-native';
import { color } from '@mui/system';

export const styles =StyleSheet.create({
    appointmentDetailsContainer:{
        // flexDirection:'column',
        // justifyContent:'center',
        // alignItems:'center',
        // backgroundColor:'#00bfff',
        // borderWidth:1,
        // borderRadius:5,
        // borderColor:'#fff',
        // padding:10,
        // height:180,
        flexDirection: 'column',
      alignItems: 'center',
      justifyContent:'center',
      height:180,
      width: '80%',
      padding: 10,
      borderRadius: 10,
      backgroundColor: '#E9E6E6',
      shadowOffset: {width: 10, height: 10},
      shadowColor: '#000',
      shadowOpacity: 2,
      shadowRadius: 20,
      elevation: 5,
    },
    container: {
        flex: 1,
        backgroundColor: '#f3f6fb',
        alignItems: 'center',
        justifyContent: 'center',
    
      },
      button:{
        backgroundColor:'#00bfff',
        width:200,
        height:50,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10,
        marginTop:40
      },
      buttonText:{
        color:'#555',
        fontSize:20,
        fontFamily:'Ubuntu-Italic',
        fontWeight:'bold'

      },
      nameText:{
        fontSize:20,
        fontWeight:'bold',
        marginTop:20,
        fontFamily:'Ubuntu-Italic',
        
      },
      dateText:{
        fontSize:20,
        marginTop:20
      },
      timeText:{
        fontSize:20,
        marginTop:20,
        fontFamily:'Ubuntu-Italic'

      },
      doctorText:{
        fontSize:20,
        marginTop:20
        
      },textContainer:{
        fontSize:20,
        // fontWeight:'bold',
        marginTop:40,
        fontFamily:'Ubuntu-Italic',
        color:'#00bfff',
        marginBottom:20,
      }
})
