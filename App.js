import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './Screens/login';
import RegisterScreen from './Screens/Register';
import { NavigationContainer } from '@react-navigation/native';
import Homescreen from './Screens/Homescreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddChattScreen from './Screens/AddChattScreen';
import { ThemeProvider } from "react-native-rapi-ui";
const Stack = createNativeStackNavigator();

const globalScreenOptions = {
 

}
export default function App() {
  return (

    <NavigationContainer > 
    

    
<ThemeProvider>


      <Stack.Navigator

       screenOptions={globalScreenOptions}>
        
      <Stack.Screen     name = "Login" component={LoginScreen} />
      <Stack.Screen     name = "Register" component={RegisterScreen} />
      <Stack.Screen     name = "Carin"     component={Homescreen}/>
      <Stack.Screen     name= "AddChat"    component={AddChattScreen} />
   
      </Stack.Navigator>
      </ThemeProvider>
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