import { View, Text, ImageBackground, StyleSheet } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import TextInputComponent from '../Components/TextInput'
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler'
import Btn from '../Components/Button'

export default function Register() {

  const navigation = useNavigation();

  const handleBack = () => {
    navigation.goBack();
}
  return (
    <ImageBackground source={require('../assets/Background.png')} style={styles.imageBackground}>
      <ScrollView>
      <Icon name="arrow-left" size={25} color="#FFFFFF" onPress={handleBack} style={styles.backIcon} />
    <View style={styles.HeaderContainer}>
      <Text style={styles.RegisterText}>Register</Text>
      <Text style={styles.CreateText}>Create your Account!</Text>
    </View>

    <TextInputComponent
    placeholder="Username"
    placeholderTextColor="#fff"
    fontSize={22}/>
        <TextInputComponent
    placeholder="Email"
    placeholderTextColor="#fff"
    fontSize={22}/>
        <TextInputComponent
    placeholder="Mobile Number"
    placeholderTextColor="#fff"
    fontSize={22}/>
        <TextInputComponent
    placeholder="NIRC Number"
    placeholderTextColor="#fff"
    fontSize={22}/>
        <TextInputComponent
    placeholder="Password"
    placeholderTextColor="#fff"
    fontSize={22}
    secureTextEntry={true}/>
        <TextInputComponent
    placeholder="Confirm Password"
    placeholderTextColor="#fff"
    fontSize={22}
    secureTextEntry={true}/>
    <Btn
      Style={styles.button}
        text="Continue"
      />
    </ScrollView>
    </ImageBackground>
  )
};

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  backIcon: {
    position: 'absolute',
    top: 60,
    left: 25,
},
  HeaderContainer: {
    marginTop: '25%',
    paddingHorizontal: '5%',
    marginBottom: '10%',
  },
    RegisterText: {
    color: '#ffffff',
    fontSize: 35,
  },
  CreateText: {
    color: "#ffffff",
    fontSize: 25,
  },
  TextInputContainer: {
    alignItems: 'flex-start',
    marginTop: '7%',
    padding: 10,
    borderRadius: 20,
    paddingHorizontal:'10%',
    width: '100%',
    marginRight: 10
    },
    button: {
      backgroundColor: '#0A9EF1',
      padding: 12,
      borderRadius: 30,
      alignSelf: 'center',
      width: '90%',
      marginVertical: '5%',
      height: '7%',
      opacity: 0.5, 
     },
});
