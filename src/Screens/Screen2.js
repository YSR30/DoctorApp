import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Screen2 = () => {
    const navigation = useNavigation();

    const handleSkip = () => {
      navigation.navigate('Login');
    };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/CircleMap.png')}
        style={styles.image}
      />
      <View style={styles.textContainer}>
        <Text style={styles.text}>Get consulted with experts</Text>
        <Text style={styles.text}>Through VIDEO CALL,</Text>
        <Text style={styles.text}>CHAT and VISIT</Text>
      </View>
      <View style={styles.anotherView}>
        <Text style={styles.anotherText}>Feeling UNWELL or or looking forward to get suggestions with your preference?</Text>
      </View>
      <View>
      <TouchableOpacity onPress={handleSkip}>
        <Text style={styles.skipText}>Skip</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  image: {
    width: 350,
    height: 350,
    marginBottom: '20%',
  },
  textContainer: {
    marginBottom: 20,
  },
  text: {
    fontSize: 22.5,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  anotherView: {
    padding: 10,
    borderRadius: 8,
  },
  anotherText: {
    fontSize: 17,
    textAlign: 'center',
  },
  skipText:{
    flexDirection:'row',
    marginLeft:'75%',
    marginTop:'20%',
    fontSize:20
   }
});

export default Screen2;