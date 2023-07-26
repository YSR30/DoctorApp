import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
    const navigation = useNavigation();

  const handleSkip = () => {
    navigation.navigate('Screen2');
  };

  return (
    <View>
      <View style={styles.ImageContainer}>
        <Image source={require('../assets/Doctor-1.jpg')} style={styles.image} />
        <Image source={require('../assets/Doctor-2.png')} style={styles.image} />
      </View>
      <View style={styles.BottomImageContainer}>
        <Image source={require('../assets/Doctor-3.webp')} style={styles.BottomImage} />
      </View>
      <View style={styles.HeaderContainer}>
        <Text style={styles.Header}>AT</Text>
        <View>
          <Text style={styles.Header1}>ANYWHERE</Text>
          <Text style={styles.Header1}>ANYTIME</Text>
        </View>
      </View>
      <View>
        <Text style={styles.text}>
          BOOK your appointment online and connect with a doctor to get medical advice at your place place with your
          perferred timings
        </Text>
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
    ImageContainer:{
        justifyContent:'space-around',
        flexDirection:'row'
    },
    image:{
        width:119,
        height:119 ,
        marginTop:'35%',
        borderWidth:8,
        borderColor:'#C4C4C4'
    },
    BottomImage:{
        width:320,
        height:140,
        justifyContent:'center',
        borderWidth:8,
        borderColor:'#C4C4C4'
    },
    BottomImageContainer:{
        marginTop:'10%',
        justifyContent:'center',
        marginHorizontal:'9%',
    },
    HeaderContainer:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        marginTop:"12%"
    },
    Header1:{
        fontFamily:'Abhaya Libre',
        fontSize:25,
        fontWeight:'400',
        letterSpacing:0,
        lineHeight:45,
        alignContent:'flex-start',
        paddingRight:'20%',
    },
    Header:{
        fontFamily: 'Abhaya Libre',
        fontSize: 70,
        fontWeight: '400',
         lineHeight: 94,
        letterSpacing: 0,
    },
    text:{
        fontFamily: 'Abhaya Libre',
        fontSize: 22,
        fontWeight: '400',
        letterSpacing: 0,
        textAlign:'center',
        marginHorizontal:'5%',
        marginTop:'5%'
     },
     skipText:{
      flexDirection:'row',
      justifyContent:'space-between',
      marginLeft:'85%',
      marginTop:'15%',
      fontSize:20
     }
});

export default SplashScreen;