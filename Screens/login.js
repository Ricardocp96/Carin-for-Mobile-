import React from 'react'
import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import { Button, Input, Image } from 'react-native';
import { Asset } from 'expo-asset';
const LoginScreen = () => {

    return(
        <View> 
            <StatusBar style="light"/>
            <Image
            source={ 
                require('./guy.png') 
                
            }
            style={{width: 200, height: 200}}
            />
            
           
           
            </View>
        
        
        );
};


export default LoginScreen;

const styles = StyleSheet.create({});