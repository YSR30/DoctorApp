import React from 'react';
import { TouchableOpacity, Text ,StyleSheet } from 'react-native';

const Btn = ({ text, onPress, Style}) => {
  return (
    <TouchableOpacity 
    onPress={onPress}
    style={Style}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Btn;


const styles = StyleSheet.create({
  buttonText: {
    color: 'white',
    fontSize: 22,
    textAlign: 'center',
  },
});