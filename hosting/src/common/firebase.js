import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";


firebase.initializeApp(require('../../firebase-config'));
export default firebase;
