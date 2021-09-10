import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { StyleSheetProperties, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';



const Chatscreen = () => {

    useLayoutEffect(() => {
    navigation.setOptions({
        title:"Carin",
        headerStyle:{backgroundColor: "#fff"},
        
    })
        return () => {
            cleanup
        };
    }, [input])
    return (
       <SafeAreaView>
           <ScrollView>

           </ScrollView>
       </SafeAreaView>
    );
};

export default Chatscreen

const styles = StyleSheet.create({})
