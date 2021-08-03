import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './Screens/login';
import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const globalScreenOptions = {

  headerStyle:{backgroundColor: "#6F2DBD"},
  headerTitleStyle: {color: "white"},
  headerTintColor: "white",
 
}
export default function App() {
  return (
    <NavigationContainer> 
      <Stack.Navigator screenOptions={globalScreenOptions}>
      <Stack.Screen name = "Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer> 


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
