import React from 'react';

import {Text,View,Pressable,} from 'react-native';
import styles from './styles'


const CustomButton = ({onPress, children,disabled, style}) => {
    return (
        <Pressable onPress={onPress} disabled={disabled} style={[styles.button, style]}>
            <Text style={styles.buttonText}>{children}</Text>
        </Pressable>
      
    );
}

export default CustomButton;