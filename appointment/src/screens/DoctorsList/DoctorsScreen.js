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

const DoctorsScreen = ({navigation}) => {
  const {setOptions, toggleDrawer} = useNavigation();

  const [selectedId, setSelectedId] = useState(null);
  const [animatePress, setAnimatePress] = useState(new Animated.Value(1));
  const [doctorsList, setDoctorsList] = useState();
  const [searchTerm,setSearchTerm] = useState('')
  const [searchValue,setSearchValue] = useState([])

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

  const search = (text) => {
    setSearchTerm(text)
    const newData = doctors.filter(item => {
      const itemData = `${item.name.toUpperCase()}`;
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    setSearchValue(newData)
  }
  
  return (

    <SafeAreaView style={styles.container}>
      <NativeBaseProvider>
      <View style={styles.body}>
        <Center>
        <VStack my="4" space={5} w="100%" maxW="300px" divider={<Box px="2">
          <Divider />
        </Box>}>
      <VStack w="100%" space={5} alignSelf="center">
        <Heading fontSize="lg">Search</Heading>
        <Input
          placeholder="Search"
          value={searchTerm}
          onChangeText={(text) => search(text)}

          style={{borderRadius:10,
          borderWidth:5,
          borderColor:'#ccc',
          padding:10,
          margin:10,

        }}
        InputLeftElement={<Icon ml="2" size="4" color="gray.400" as={
          <FontAwesome name="search" />
        } />}
        />
      </VStack>

     
    </VStack>;
          </Center>
    
      
   
        
        <Animated.FlatList
          data={searchValue.length === 0 ? doctorsList : searchValue}
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
                  <View style={styles.doctorInfoRow}>
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
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
      </NativeBaseProvider>
    </SafeAreaView>
  );
};


export default DoctorsScreen;