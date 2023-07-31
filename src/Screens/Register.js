import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import TextInputComponent from '../Components/TextInput'

export default function Register() {
  return (
    <ImageBackground source={require('../assets/Background.png')} style={styles.imageBackground}>
    <View>
      <Text>Register</Text>
      <Text>Create your Account!</Text>
    </View>
    <TextInputComponent
    placeholder="Username"
    placeholderTextColor="#fff"
    fontSize={22}/>
    </ImageBackground>
  )
}