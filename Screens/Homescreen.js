import  * as React from 'react';
import {View, SafeAreaView, Text, StyleSheet} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {Listitems} from '../Components/Listitems';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ChattScreen from './Chatscreen';
import Chatscreen from './Chatscreen';
import {TouchableOpacity, Image,Button} from 'react-native';
import { StreamChat } from 'stream-chat';

const Tab = createBottomTabNavigator();

const client = StreamChat.getInstance('q95x9hkbyd6p');
const userToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoicm9uIn0.eRVjxLvd4aqCEHY_JRa97g6k7WpHEhxL7Z4K4yTot1c';
const user = {
  id: 'ron',
};

const filters = {
  example: 'example-apps',
  members: { $in: ['ron'] },
  type: 'messaging',
};
const sort = { last_message_at: -1 };
const options = {
  state: true,
  watch: true,
};






  function createchannel(){
    const channel = client.channel('messaging', 'travel', { 
      name: 'Awesome channel about traveling', 
  }); 
  // Here, 'travel' will be the channel ID 
   channel.create();
   console.log("Channel created");
}


  

function DrawScreen() {
  return (
    <SafeAreaView>
     <Button
  onPress={() => {

    createchannel();
  }}
  title="Create Channel"
  color="#841584"
  accessibilityLabel="Create Channel"
/>

    </SafeAreaView>
  );
}
function SettingsScreen() {
  return (
    <SafeAreaView>
      <TouchableOpacity
      activeOpacity={0.7}
          
          style={styles.touchableOpacityStyle}>
          <Image
            source={{
              uri:
                'https://raw.githubusercontent.com/AboutReact/sampleresource/master/plus_icon.png',
            }}
            style={styles.floatingButtonStyle}
          />


      </TouchableOpacity>
    </SafeAreaView>
  );
}

const MesagesScreen = (props) => {

  return(

<SafeAreaView>

<ChattScreen/>
</SafeAreaView>
  );
}

function ChannelScreen({navigation, route}) {
  return (
    <SafeAreaView>
      <Text>Channel Screen</Text>
    </SafeAreaView>
  );
}

/** Channel list navigation will be placed here   */




export default function App() {
  return (
   
      <View style={styles.container}>
       
        <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-home'
                : 'ios-home-outline';
            } else if (route.name === 'Community') {
              iconName = focused ?'ios-planet' : 'ios-planet';
            }else if (route.name === 'Inbox') {
              iconName = focused ? 'ios-chatbubbles' : 'ios-chatbubbles';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'blue',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={DrawScreen} />
        <Tab.Screen name="Community" component={SettingsScreen} />
       <Tab.Screen name="Inbox"   component={Chatscreen}/>
      </Tab.Navigator>
      </View>
      
  
  );
}
// You can import Ionicons from @expo/vector-icons/Ionicons if you use Expo or
// react-native-vector-icons/Ionicons otherwise.


// (...)


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
  TouchableOpacity:{
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 70,
    bottom: 70,
  },

  floatingButtonStyle: {
    resizeMode: 'contain',
    width: 50,
    height: 50,
    
  },


});




