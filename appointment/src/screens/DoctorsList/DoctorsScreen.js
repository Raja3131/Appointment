import React from 'react';
import {useState, useEffect} from 'react';
import {
  StatusBar,
  FlatList,
  Button,
  Pressable,
  ScrollView,
  Image,
  Animated,
  Text,
  View,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Easing,
  SafeAreaViewBase,
  SafeAreaView,
} from 'react-native';
const {width, height} = Dimensions.get('screen');
import {SearchBar} from 'react-native-elements';
import {StackNavigator} from 'react-navigation';

import {useFocusEffect, useNavigation} from '@react-navigation/native';
import doctors from '../../db/doctors';
import {styles} from './styles';

const DoctorsScreen = ({navigation}) => {
  const {setOptions, toggleDrawer} = useNavigation();

  const [selectedId, setSelectedId] = useState(null);
  const [animatePress, setAnimatePress] = useState(new Animated.Value(1));
  const [doctorsList, setDoctorsList] = useState();

  useEffect(() => {
    setDoctorsList(doctors);
  }, []);
  const animateIn = () => {
    Animated.timing(animatePress, {
      toValue: 0.5,
      duration: 500,
      useNativeDriver: true, // Add This line
    }).start();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <Animated.FlatList
          data={doctors}
          keyExtractor={item => item.id.toString()}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                onPress={() => animateIn}
                // style={styles.doctor}
                style={[
                  styles.doctorContainer,
                  selectedId === item.id
                    ? styles.doctorContainerSelected
                    : null,
                ]}>
                <Image source={item.image} style={styles.doctorImage} />
                <View style={styles.doctorInfo}>
                  <Text style={styles.doctorName}>{item.name}</Text>
                  {/* <Text style={styles.doctorSpeciality}>{item.speciality}</Text> */}
                  <Pressable
                    onPress={() =>
                      navigation.navigate('DoctorProfile', {
                        selectDoctor: item.id,
                      })
                    }
                    style={styles.button}
                    onPressIn={animateIn}>
                    <Text style={styles.text}>View Profile</Text>
                  </Pressable>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};


export default DoctorsScreen;
