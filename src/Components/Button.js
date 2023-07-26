import React from 'react';
import { TouchableOpacity, Text ,StyleSheet } from 'react-native';

const Btn = ({ text, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText} >{text}</Text>
    </TouchableOpacity>
  );
};

export default Btn;


const styles = StyleSheet.create({
  button: {
    backgroundColor: '#0A9EF1',
    padding: 12,
    borderRadius: 30,
    alignSelf: 'center',
    width: '90%',
    marginVertical: '10%',
    height: '7%',
  },
  buttonText: {
    color: 'white',
    fontSize: 22,
    textAlign: 'center',
  },
});