import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet, Alert} from 'react-native';

const TextInputField = (props) => {
  if (props.input === 'OTP') {
    return <TextInput {...props} />;
  } else {
    return (
      <View style={styles.inputField}>
        <Text style={styles.numCode}>+92</Text>
        <TextInput
          style={styles.input}
          onChangeText={props.onChange}
          {...props}
        />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  inputField: {
    width: '100%',
    maxWidth: 300,
    flexDirection: 'row',
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: 'green',
    borderRadius: 6,
  },
  numCode: {
    fontSize: 18,
    paddingVertical:13,
    marginHorizontal: 10,
  },
  input: {
    fontSize: 18,
  },
});

export default TextInputField;
