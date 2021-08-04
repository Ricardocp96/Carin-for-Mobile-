
import React, {useState} from "react";
import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import { Button, Input, Image } from 'react-native-elements';
import { Asset } from 'expo-asset';
import { KeyboardAvoidingView } from "react-native";


const LoginScreen = ({navigation}) => {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

// Sigin function 

const signIn = () => {};
    return(
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.container}> 
            <StatusBar style="light"/>
            <Image
            source={ 
                require('./guy.png') 
                
            }
            style={{width: 200, height: 200,marginTop:3 }}
            />
            
           <View style={styles.inputContainer}>

             <Input placeholder="Email"  autoFocus type="email"
             value={email}
             onChangeText={(text) => setEmail(text)}
             />
             <Input placeholder="Password"  secureTextEntry type="password"
             
             value={password}
             onChangeText={(text) => setPassword(text)}
             />
             

           </View>
           <Button  containerStyle={styles.button} onPress={signIn}  title="Login"  />
           <Button  onPress={() => navigation.navigate("Register")}   containerStyle={styles.button} type="outline" title="Register" />
            </View>
            </KeyboardAvoidingView>
        
        );
};


export default LoginScreen;

const styles = StyleSheet.create({
container:{
    flex: 1,
    alignItems: "center",
    justifyContent:"center",
    padding:10,
    backgroundColor:"white",


},
    inputContainer: {
        width:300,
    },
    button:{
        marginRight:40,
    marginLeft:40,
        width: 200,
        marginTop:10,
        backgroundColor:'#1E6738',
        borderRadius:10,
        borderWidth: 1,
        borderColor: '#fff'
    },
});