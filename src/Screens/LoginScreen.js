import React, { useState } from 'react';
import { ScrollView, View, StyleSheet, ImageBackground, Text, TouchableOpacity ,KeyboardAvoidingView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Btn from '../Components/Button';
import PhoneInput from 'react-native-phone-number-input';


const LoginScreen = () => {
  const[value,setValue] = useState();

  const navigation = useNavigation();

  const handleRegister =() =>{
    navigation.navigate('Register')
  }

  return (
    <ImageBackground source={require('../assets/Background.png')} style={styles.imageBackground}>
            <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}
      >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.headerText}>Welcome Back</Text>
        <Text style={styles.subHeaderText}>Login to your own account!</Text>
      
      {/* <TextInputComponent
        placeholder="Phone Number"
        placeholderTextColor="#fff"
        fontSize={22}
      /> */}

<View style={styles.phoneInputContainer}>
        <PhoneInput
        
            placeholder="Phone Number"
            value={value}
            onChange={setValue}
            textContainerStyle={styles.phoneInputText}
            flagButtonStyle={styles.flagButtonStyle}
            codeTextStyle={{ color: '#000' }} 
          />
        </View>

      <Btn
      Style={styles.button}
        text="Continue"
      />
      <Text style={styles.otpText}>We'll send OTP for Verification</Text>
      <Btn
      Style={styles.fbButton}
        text="Login with Facebook"
      />
      <TouchableOpacity style={styles.googleButton}>
        <Text style={styles.googleButtonText}>Login with Google</Text>
      </TouchableOpacity>
      <Btn
      Style={styles.button}
        text="Register"
        onPress={handleRegister}
      />
      </ScrollView>
      </KeyboardAvoidingView>
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
  phoneInputContainer:{
    marginTop: '10%',
    borderRadius: 30, 
    overflow: 'hidden', 
  },
  phoneInputText:{
    opacity:0.5,
  },
  flagButtonStyle: {
    backgroundColor: '#FFFFFF', 
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#0A9EF1',
    padding: 12,
    borderRadius: 30,
    alignSelf: 'center',
    width: '100%',
    marginVertical: '5%',
    height: '7%',
    opacity: 0.5, 
   },
  otpText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 20,
    marginLeft: '17%',
  },
  fbButton: {
    backgroundColor: '#4267B2',
    padding: 12,
    borderRadius: 30,
    alignSelf: 'center',
    width: '100%',
    marginVertical: '3%',
    height: '7%',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.7,
  },
  fbButtonText: {
    color: 'white',
    fontSize: 16,
  },
  googleButton: {
    backgroundColor: '#FFFFFF',
    padding: 12,
    borderRadius: 30,
    alignSelf: 'center',
    width: '100%',
    marginVertical: '3%',
    height: '7%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  googleButtonText: {
    color: 'black',
    fontSize: 22,
    textAlign: 'center',
  },
});

export default LoginScreen;
