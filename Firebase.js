import * as firebase from 'firebase';
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyATWxamZRMUX60t0EVK8qmDZdkr9gchJvQ",
    authDomain: "carin-f2cdf.firebaseapp.com",
    projectId: "carin-f2cdf",
    storageBucket: "carin-f2cdf.appspot.com",
    messagingSenderId: "809444901806",
    appId: "1:809444901806:web:bf7dd173e9b28b14513e3f",
    measurementId: "G-M8VW8YVWPZ"
  };
  let app;

  if(firebase.apps.length ===0){

  app= firebase.initializeApp(firebaseConfig)


  }else{
   app=firebase.app();

  }
  const firebaseapp= firebase.initializeApp(firebaseConfig)

  const db = app.firestore();
  const auth = firebase.auth();

export {db, auth};