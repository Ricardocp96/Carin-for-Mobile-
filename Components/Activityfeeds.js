import React from 'react';
import SafeAreaView from 'react-native-safe-area-view';
import {
    StreamApp,
    FlatFeed,
    Activity,
    LikeButton,
} from 'expo-activity-feed';

const CustomActivity = (props) => {
  return (
    <Activity
      {...props}
      Footer={
        <LikeButton {...props} />
      }
    />
  );
};

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }} forceInset={{ top: 'always' }}>
      <StreamApp
          apiKey="9d6rbk6hu6dj"
          appId="1138202"
          token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiUmljYXJkbyJ9.o1_8HIM1Lo0OYKB9mvTxDSEaJyvts6XwXH0SjCZ_idA"
      >
        <FlatFeed Activity={CustomActivity} />
      </StreamApp>
    </SafeAreaView>
  );
};

export default App;