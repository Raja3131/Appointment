import React from "react";
import { Text, View, TextInput, Button, Alert,StyleSheet,StatusBar,KeyboardAvoidingView } from "react-native";
import { useForm, Controller } from "react-hook-form";
import Api from '../api/Api'
import { useTheme } from '@react-navigation/native';

 const PatientDetails=({navigation})=> {
  const { colors } = useTheme();
  const theme = useTheme();
  const { control, handleSubmit,reset, formState: { errors } } = useForm({
    defaultValues: {
      name: '',
      age: ''
    }
  });


  const onSubmit =(data,e)=>{
    console.log(data)
    Api.post('/patient',data)

    .then(res=>{
      console.log(res.data)
      navigation.navigate('Doctors')
      reset()

    })
    .catch(err=>{
      console.log(err)
    })
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle= { theme.dark ? "light-content" : "dark-content" }/>
       <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <StatusBar translucent={true}></StatusBar>


      <Text style={{color: colors.text}}>Home Screen</Text>

      <Controller
        control={control}
        rules={{
         required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="Name"
          />
        )}
        name="name"
      />
      

      <Controller
        control={control}
        rules={{
         maxLength: 100,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="Age"
            autoCapitalize="words"
          />
        )}
        name="age"
      />

      <Button title="Submit" onPress={handleSubmit(onSubmit)} color='#000' />
      </KeyboardAvoidingView>
      
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009387',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 30,
  
    
   
  },
  input: {
    borderWidth: 2,
    borderColor: '#fff',
    padding: 8,
    margin: 10,
    width: 200,
    borderRadius: 6,
    fontSize: 20,
    textAlign: 'center',
    position: 'relative',
    paddingLeft: 10,
    color: '#fff',
  },
  text: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
    position:'absolute',
    top:50,

    
  },
});
 export default PatientDetails;
