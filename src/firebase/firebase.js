import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyC9MiK9wCKF7I0WldrtqXmj60RVW6FD_G0',
  authDomain: 'fir-app-6a063.firebaseapp.com',
  databaseURL: 'https://fir-app-6a063.firebaseio.com',
  projectId: 'fir-app-6a063',
  storageBucket: 'fir-app-6a063.appspot.com',
  messagingSenderId: '194652840505',
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };
