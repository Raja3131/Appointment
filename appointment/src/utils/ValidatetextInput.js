import React, { useState, useCallback, useEffect } from 'react';
import { TextInput } from 'react-native';

const ValidatedTextInput = ({ value, onChange, ...props }) => {
    const [validatedValue, setValidatedValue] = useState('');

    const validateOnChange = useCallback(
        newValue => {
            if (newValue === undefined) return;

            // Do validation of newValue here
            if (!new RegExp(/^([^.,-]*)$/).test(newValue)) return; //Must not contain numbers
            //check max value not exceed than 120
            if (newValue.length > 120) return;

            setValidatedValue(newValue);
            onChange && onChange(newValue);
        },
        [setValidatedValue, onChange],
    );

    useEffect(() => {
        validateOnChange(value);
    }, [validateOnChange, value]);

    return (
        <TextInput
            value={validatedValue}
            onChange={event => validateOnChange(event.target.value)}
            style={textInputStyle}
            {...props}
        />
    );
};

const textInputStyle = {
    border: '1px solid black',
    maxWidth: 500,
    height: 50,
    textAlign: 'center',
    fontSize: 20,
};

export default ValidatedTextInput;