import React from 'react';
import { View, StyleSheet, ImageBackground, Text } from 'react-native';
import TextInputComponent from '../Components/TextInput';
import Btn from '../Components/Button';

const LoginScreen = () => {
  return (
    <ImageBackground source={require('../assets/Background.png')} style={styles.imageBackground}>
      <View style={styles.container}>
        <Text style={styles.headerText}>Welcome Back</Text>
        <Text style={styles.subHeaderText}>Login to your own account!</Text>
        </View>
        <TextInputComponent 
        style={styles.input}
        placeholder="Phone Number"
        placeholderTextColor="#fff"
        fontSize={'22'} />
        <Btn
        text={'Continue'}/>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  subHeaderText: {
    fontSize: 16,
    color: 'white',
    marginBottom: 20,
  },
});

export default LoginScreen;
