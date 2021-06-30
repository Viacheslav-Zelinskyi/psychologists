import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyC8oQrgI_87OS7lp0wrSugW8kDz_0fd-Qo",
    authDomain: "test-task-3528f.firebaseapp.com",
    projectId: "test-task-3528f",
    storageBucket: "test-task-3528f.appspot.com",
    messagingSenderId: "656031592572",
    appId: "1:656031592572:web:d3287b30f87e5e4c23d9f9",
    measurementId: "G-LNRC35B5KJ"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase;
