
import React from 'react';
import { ScrollView } from 'react-native';

import { SafeAreaView } from 'react-native';
import {StyleSheet, TouchableOpacity,  View} from 'react-native';
import { Avatar } from 'react-native-elements';
import Listitems from '../Components/Listitems';
import { useLayoutEffect } from 'react';
import { AntDesign,SimpleLineIcons } from '@expo/vector-icons';
import { ThemeProvider } from 'react-native-elements';






const Homescreen = ({navigation}) =>{

useLayoutEffect(() => {


navigation.setOptions({

    title: "Carin",
    headerStyle: {backgroundColor: "#fff"},
    headerTitleStyle:{color:"black"},
    headerTintColor: "black",
    
    headerLeft: () =>(
      <View style={{marginleft: 20}}   
      
     
      
      
      >
        <TouchableOpacity activeOpacity={0.5} >
          <Avatar rounded source={require("./Carin_logo.jpg")} />
          </TouchableOpacity>
      </View>

     
    ),

    headerRight: () =>(

<View  style={{
           flexDirection: "row",
           justifyContent: "space-between",
           width: 80,
           marginRight: 20,
     }}
     >  
 <TouchableOpacity activeOpacity={0.5} >
         <AntDesign name="camerao" size={24} color="purple" />
       
          </TouchableOpacity>
        <TouchableOpacity  onPress={() => navigation.navigate("AddChat")  }   activeOpacity={0.5} >

          <SimpleLineIcons name="pencil" size={24} color="purple" />
        </TouchableOpacity>
</View>

    ),

});
 }, []);
    


return(
 
 <SafeAreaView>


     <ScrollView>
     <Listitems/>

     </ScrollView>
 </SafeAreaView>

    );


};

export default Homescreen;

const styles = StyleSheet.create({});




