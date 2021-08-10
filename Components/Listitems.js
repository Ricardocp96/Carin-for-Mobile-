import React from 'react';

import { StyleSheet, Text, View } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';
const Listitems = () => {
    return (
       //<SafeAreaView>
       // <ScrollView>
            <ListItem>
             <Avatar
                rounded
                source={require("./ricardo.jpg")}
                /> 
            <ListItem.Content>
                <ListItem.Title style ={{fontWeight: "800"}} >

                    Gongda  developer Network
                </ListItem.Title>
                <ListItem.Subtitle>
                    Thanks for resources Njah
                </ListItem.Subtitle>
            </ListItem.Content>
           
            </ListItem>
       // </ScrollView>

            
       //</SafeAreaView>



    );
};

export default Listitems;

const styles = StyleSheet.create({});
