import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyARPA_10ui6CkIeWh4HPWcOZqRsriN0Meo",
  authDomain: "test-161f9.firebaseapp.com",
  databaseURL: "https://test-161f9.firebaseio.com",
  projectId: "test-161f9",
  storageBucket: "test-161f9.appspot.com",
  messagingSenderId: "218133323958"
};
firebase.initializeApp(config);

export default firebase;
