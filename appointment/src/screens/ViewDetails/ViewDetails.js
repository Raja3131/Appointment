import {View, Text} from 'react-native';
import React from 'react';
import doctors from '../../db/doctors';
import {useEffect} from 'react';

const ViewDetails = ({navigation, route}) => {
  const {name, age, gender, doctorName, address, dob} = route.params;
  useEffect(() => {
    console.log(gender);
  }, []);
  const Genders = [
    {
      id: 1,
      gender: 'male',
    },
    {
      id: 2, 
      gender: 'female',
    },
  ];
  return (
    <View>
      <Text>{name}</Text>
      <Text>{age}</Text>
      {/* <Text>{Genders.find(Gender => Gender.id === gender).gender}</Text> */}
      <Text>{Genders.find(Gender => Gender.id == gender).gender}</Text>
      <Text>{doctorName}</Text>
      <Text>{address}</Text>
      <Text>{dob}</Text>
    </View>
  );
};

export default ViewDetails;
