import { StyleSheet } from 'react-native';

export const styles =StyleSheet.create({
    appointmentDetailsContainer:{
        marginLeft:20,
        marginRight:20,
        marginTop:20,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#00bfff',
        borderWidth:1,
        borderRadius:5,
        borderColor:'#fff',
        padding:10,
        height:180,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
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
        marginTop:20
      },
      buttonText:{
        color:'#000',
        fontSize:20
      },
      nameText:{
        fontSize:20,
        fontWeight:'bold',
        marginTop:20
      },
      dateText:{
        fontSize:20,
        marginTop:20
      },
      timeText:{
        fontSize:20,
        marginTop:20
      },
      doctorText:{
        fontSize:20,
        marginTop:20
        
      }
})
