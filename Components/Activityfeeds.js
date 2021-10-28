import React from 'react';
import { SafeAreaView} from 'react-native';

import { STREAM_API_KEY, STREAM_API_TOKEN, STREAM_APP_ID } from '@env';

import {
  StreamApp,
  FlatFeed,
  Activity,
  StatusUpdateForm,
  LikeButton

} from 'expo-activity-feed';


const Activityfeeds = () => {
  const apiKey = '9d6rbk6hu6dj';
  const appId = '1138202';
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiUmljYXJkbyJ9.o1_8HIM1Lo0OYKB9mvTxDSEaJyvts6XwXH0SjCZ_idA';

  if (!apiKey) {
    console.error('STREAM_API_KEY should be set');
    return null;
  }

  if (!appId) {
    console.error('STREAM_APP_ID should be set');
    return null;
  }

  if (!token) {
    console.error('STREAM_TOKEN should be set');
    return null;
  }

  const renderActivity = (props) => (
    <Activity {...props} Footer={<LikeButton {...props} />} />
  );

  return (
    <SafeAreaView style={{ flex: 1 }} forceInset={{ top: 'always' }}>
      <StreamApp apiKey={apiKey} appId={appId} token={token}>
        <FlatFeed Activity={renderActivity} notify />
        <StatusUpdateForm feedGroup='timeline' />
      </StreamApp>
    </SafeAreaView>
  );
};

export default Activityfeeds;
