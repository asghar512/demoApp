import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import Splash from './screens/Splash';
import SecondScreen from './screens/SecondScreen';
import MaskScreen from './screens/MaskScreen';
import ThirdScreen from './screens/ThirdScreen'
import FourthScreen from './screens/FourthScreen'
const Stack = createNativeStackNavigator();
LogBox.ignoreAllLogs();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="Splash" component={Splash} />
        <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
        <Stack.Screen options={{ headerShown: false }} name="Home" component={HomeScreen} />
        <Stack.Screen options={{ headerShown: false }} name="SecondScreen" component={SecondScreen} />
        <Stack.Screen options={{ headerShown: false }} name="MaskScreen" component={MaskScreen} />
        <Stack.Screen options={{ headerShown: false }} name="ThirdScreen" component={ThirdScreen} />
        <Stack.Screen options={{ headerShown: false }} name="FourthScreen" component={FourthScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
