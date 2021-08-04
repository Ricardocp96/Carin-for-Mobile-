import React, {useState} from "react";
import {StyleSheet, Text, View} from 'react-native';
import { StatusBar} from 'expo-status-bar';
import { KeyboardAvoidingView } from "react-native";
import { Button, Input, Image } from 'react-native-elements';
import {auth } from "../firebase";



const RegisterScreen = ({navigation}) => {
const [uname, setName] = useState('')
const [email, setEmail] = useState('')
const [imageaurl, setaiamage] = useState('')
const [password, setPassword] = useState('')

//userLayoutEffect (() => {
//navigation.setOptios({
  //headerBactitle: " Back to Login",
//});

//},[navigation])
const register = () =>{

auth
.createUserWithEmailAndPassword(email,password)
.then(authUser => {
  authUser.user.update({
    displayName: uname,
    photoURL: imageaurl || require('../guy.png'), 
  })

})
.catch((error) => alert(error.message));
};
return (
<KeyboardAvoidingView behavior="padding" style={styles.container}>
<StatusBar style="light" />
<Text h3 style={{marginBottom: 50}}>Create a Carin account</Text>
<View style={styles.inputContainer}>
<Input 
placeholder="Username"
autoFocus type ="text"
value={uname}
onChangeText={(text) => setName(text)}
/>
<Input 
placeholder="Email"
autoFocus type ="email"
value={email}
onChangeText={(text) => setEmail(text)}
/>

<Input 
placeholder="Password"
type="password"
secureTextEntry
value={password}
onChangeText={(text) => setPassword(text)}
/>

<Input 
placeholder="Profilepic optional"

value={imageaurl}
onChangeText={(text) => setaiamage(text)}
onSubmitEditing={register}
/>
</View>

<Button containerStyle={styles.button} raised title="Register" onPress={register} />
  </KeyboardAvoidingView>
  
  );

};

export default RegisterScreen;

const styles =StyleSheet.create({
  container:{
    flex: 1,
    flex: 1,
    alignItems: "center",
    justifyContent:"center",
    padding:10,
    backgroundColor:"white",

  },

  inputContainer: {
    width:300,
},
  button: {

    width:200,
    marginTop:10,
  },

});