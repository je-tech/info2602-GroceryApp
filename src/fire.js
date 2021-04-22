import firebase from 'firebase';

  var firebaseConfig = {
    apiKey: "AIzaSyC50TMKZ00ktKzOiWU-HOdl0ucVThs3xOM",
    authDomain: "info2602-6986b.firebaseapp.com",
    projectId: "info2602-6986b",
    storageBucket: "info2602-6986b.appspot.com",
    messagingSenderId: "956053049390",
    appId: "1:956053049390:web:48af8116812e2ad5704fbf"
};

const authentication =firebase.initializeApp(firebaseConfig);

export default authentication;

