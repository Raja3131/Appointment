import React from "react";
import { Text, View, TextInput, Button, Alert,StyleSheet } from "react-native";
import { useForm, Controller } from "react-hook-form";
import Api from '../api/Api'

 const PatientDetails=()=> {
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
      reset()

    })
    .catch(err=>{
      console.log(err)
    })
  }

  return (
    <View>
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
          />
        )}
        name="age"
      />

      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
  },
});
 export default PatientDetails;
