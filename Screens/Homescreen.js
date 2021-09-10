/* eslint-disable react/display-name */
import React from 'react';
import {View, SafeAreaView, Text, StyleSheet} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {Listitems} from '../Components/Listitems';
/** This is where you will put your channel component which container MessageList and MessageInput component  */
function ChannelScreen({navigation, route}) {
  return (
    <SafeAreaView>
      <Text>Channel Screen</Text>
    </SafeAreaView>
  );
}

/** Channel list navigation will be placed here   */
const ChannelListDrawer = (props) => {
  return (
    <SafeAreaView>
    <Listitems/>
    </SafeAreaView>
  );
};

const Drawer = createDrawerNavigator();

export default function App() {
  return (
   
      <View style={styles.container}>
        <Drawer.Navigator
          drawerContent={ChannelListDrawer}
          drawerStyle={styles.drawerNavigator}>
          <Drawer.Screen name="ChannelScreen" component={ChannelScreen} />
        </Drawer.Navigator>
      </View>
  
  );
}

const styles = StyleSheet.create({
  channelScreenSaveAreaView: {
    backgroundColor: 'white',
  },
  channelScreenContainer: {flexDirection: 'column', height: '100%'},
  container: {
    flex: 1,
  },
  drawerNavigator: {
    backgroundColor: '#FF5A00FF',
    width: 350,
  },
  chatContainer: {
    backgroundColor: 'white',
    flexGrow: 1,
    flexShrink: 1,
  },
});
