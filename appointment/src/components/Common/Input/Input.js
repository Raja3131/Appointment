import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {useState} from 'react';
import styles from './styles';
import colors from '../../../styles/theme/colors';

const Input = ({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
  style,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const getBorderColor = () => {
    if (isFocused) {
      return colors.primary;
    } else {
      return colors.green;
    }
  };
  return (
    <View
      style={[
        styles.containerStyle,
        
      ]}>
      <Text style={styles.labelStyle}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        autoCorrect={false}
        style={[styles.inputStyle]}
        value={value}
        onChangeText={onChangeText}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...props}

      
      />
    </View>
  );
};

export default Input;
