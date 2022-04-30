import React from 'react';
import {useState, useEffect} from 'react';
import {
  StatusBar,
  FlatList,
  Pressable,
  ScrollView,
  Image,
  Animated,
  View,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Easing,
  SafeAreaViewBase,
  SafeAreaView,
} from 'react-native';
const {width, height} = Dimensions.get('screen');
import {StackNavigator} from 'react-navigation';
import { VStack, Input, Button, IconButton, Icon, NativeBaseProvider,Text, Center, Box, Divider, Heading } from "native-base";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

import {useFocusEffect, useNavigation} from '@react-navigation/native';
import doctors from '../../db/doctors';
import {styles} from './styles';
import axios from 'axios'

const DoctorsScreen = ({navigation}) => {
  const {setOptions, toggleDrawer} = useNavigation();

  const [selectedId, setSelectedId] = useState(null);
  const [animatePress, setAnimatePress] = useState(new Animated.Value(1));
  const [doctorsList, setDoctorsList] = useState([]);
  const [searchTerm,setSearchTerm] = useState('')
  const [searchValue,setSearchValue] = useState([])

  useEffect(() => {
    axios.get('http://testingapi.wynkemr.com/DoctorMaster/Getalldoctorssearch/1062')
    .then(res => {
      setDoctorsList(res.data.Doctorsearchpatients);
      setSearchValue(res.data.Doctorsearchpatients)
     
    })
  }, [])

    

  const animateIn = () => {
    Animated.timing(animatePress, {
      toValue: 0.5,
      duration: 500,
      useNativeDriver: true, // Add This line
    }).start();
  };

  const search = (text) => {
    setSearchTerm(text)
    const newData = doctors.filter(item => {
      const itemData = `${item.DoctorName}`;
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    setSearchValue(newData)
  }
  
  return (

    <SafeAreaView style={styles.container}>
      <NativeBaseProvider>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Feather name="arrow-left" size={25} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.headerText}>Doctors</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Search')}>
            <Feather name="search" size={25} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.searchBar}>
        <Input
          placeholder="Search"
          onChangeText={text => search(text)}
          value={searchTerm}
          style={styles.searchInput}
        />
      </View>
      <View style={styles.body}>
        <FlatList
          data={searchValue}
          keyExtractor={item => item.DoctorId}
          renderItem={({item}) => (
            <View style={styles.card}>
              <View style={styles.cardContent}>
                <View style={styles.cardContentHeader}>
                  <Text style={styles.cardContentHeaderText}>
                    {item.DoctorName}
                  </Text>
                  <Image>{item.Photopath}</Image>
                </View>
                <View style={styles.cardContentBody}>
                  <Text style={styles.cardContentBodyText}>
                    {item.Specialization}
                  </Text>
                </View>
              </View>
            </View>
          )}
        />
      </View>
      </NativeBaseProvider>
    </SafeAreaView>

  );
};


export default DoctorsScreen;
