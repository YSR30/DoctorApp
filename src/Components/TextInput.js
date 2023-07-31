import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const TextInputComponent = ({ placeholder, value, onChangeText, secureTextEntry }) => {
  return (
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        placeholderTextColor='#FFFFFF'
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        autoCapitalize="none"
        autoCorrect={false} 
      />
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  input: {
    color: '#FFFFFF',
    marginVertical: '3%',
   width: '90%',
   borderRadius: 50,
   backgroundColor: '#C4C4C4',
   padding: '4%',
 marginLeft: 20 ,
 opacity: 0.5,
 fontSize: 20,
  },
});

export default TextInputComponent;
