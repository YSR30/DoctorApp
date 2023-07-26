import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const TextInputComponent = ({ placeholder, value, onChangeText, secureTextEntry }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        autoCapitalize="none"
        autoCorrect={false} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  input: {
    color: '#fff',
    marginVertical: '5%',
   width: '90%',
   borderRadius: 50,
   borderColor: '#fff',
   backgroundColor: '#C4C4C4',
   padding: '4%',
 marginLeft: 20 ,
 opacity: 0.5,
 fontSize: 20,
  },
});

export default TextInputComponent;
