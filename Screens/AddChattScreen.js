import React, {useLayoutEffect, useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Input } from 'react-native-elements';
import { FontAwesome5 } from '@expo/vector-icons'; 

const AddChattScreen = ({navigation}) => {
    const [input, setInput] = useState("");
    useLayoutEffect(() =>{
      navigation.setOptions({

      title: "Creae a new Channel",
      headerBackTitle: "Channels",
      });

    }, [navigation]);

 const createChat=async () => {


  
 }
    return (
        <View  style={styles.container}>

        <Input 
        placeholder="Enter channel name"
        value={input}
        onChangeText={(text)  => setInput(text)}
        leftIcon={
          <FontAwesome5 name="layer-group" size={24} color="purple" />
        }

        

        />
        <Button onPress={createChat} title='Create new Channel'/>
        </View>
    );
};

export default AddChattScreen;

const styles = StyleSheet.create({});
