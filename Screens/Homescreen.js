
import React from 'react';
import { ScrollView } from 'react-native';

import { SafeAreaView } from 'react-native';
import {StyleSheet, Text,  View} from 'react-native';
import Listitems from '../Components/Listitems';



const Homescreen = () =>{



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