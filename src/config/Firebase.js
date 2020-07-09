import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCxMlMsmPAZNM_6g7gavsyYUf4GW1v7HsE',
  authDomain: 'physionext-d454f.firebaseapp.com',
  databaseURL: 'https://physionext-d454f.firebaseio.com',
  projectId: 'physionext-d454f',
  storageBucket: 'physionext-d454f.appspot.com',
  messagingSenderId: '819439708505',
  appId: '1:819439708505:web:fb68d9fb012fc0493d4448',
  measurementId: 'G-D2LM519RXX'
};

firebase.initializeApp(firebaseConfig);

export default firebase;
