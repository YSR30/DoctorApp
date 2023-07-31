import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../Screens/Screen1';
import Screen2 from '../Screens/Screen2';
import LoginScreen from '../Screens/LoginScreen';
import Register from '../Screens/Register';


const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="Screen2" component={Screen2} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name='Register' component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;