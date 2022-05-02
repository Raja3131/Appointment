import React from 'react';
import {
  Text,
  View,
  Pressable,
  StatusBar,
  KeyboardAvoidingView,
  ScrollView
} from 'react-native';
import styles from './styles';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import colors from '../../styles/theme/colors';
import Input from '../../components/Common/Input/Input';
import CustomButton from '../../components/Common/Button/CustomButton';

const CreateAppoint = ({handleClear, handleSubmit}) => {
  return (
    <>
    <ScrollView>
      <StatusBar backgroundColor={colors.primary} barStyle="light-content" />

      <KeyboardAvoidingView behavior="padding" style={styles.container}>

        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>WYNK!</Text>
        </View>
        <View style={styles.NameInputContainer}>
            <FontAwesome name="user-o" color={colors.primary} size={20} />  
          <Input
            label="First Name"
            placeholder="Enter First Name"
            onChangeText={handleClear}


          />
          <Input
            label="Last Name"
            placeholder="Enter Last Name"
            onChangeText={handleClear}
          />
        </View>
        <View style={styles.OtherInfoContainer}>
            <FontAwesome name="calendar-plus-o" color={colors.primary} size={20} />
            <Input
            label="Age"
            placeholder="Enter Year"
            onChangeText={handleClear}
            />
            <Input
            label="Month"
            placeholder="Enter Month"
            onChangeText={handleClear}
            />
        </View>

        <View style={styles.buttonContainer}>
          <CustomButton
            onPress={handleSubmit}
            disabled={false}
            style={styles.button}>
            <Text style={styles.buttonText}>Submit</Text>
          </CustomButton>
          <CustomButton
            onPress={handleClear}
            disabled={false}
            style={styles.button}>
            <Text style={styles.buttonText}>Clear</Text>
          </CustomButton>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
    </>
  );
};

export default CreateAppoint;
