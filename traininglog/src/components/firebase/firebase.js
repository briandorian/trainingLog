import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

var firebaseConfig = {
    apiKey: "AIzaSyBL4Ujn33jIO-v5iTQUHh0z-jthlIZWfY0",
    authDomain: "traininglog-af36d.firebaseapp.com",
    databaseURL: "https://traininglog-af36d.firebaseio.com",
    projectId: "traininglog-af36d",
    storageBucket: "traininglog-af36d.appspot.com",
    messagingSenderId: "730187346365",
    appId: "1:730187346365:web:66535efcd56a15310e62d4",
    measurementId: "G-EZZZXH9W6W"
  };

class Firebase {
    constructor() {
        app.initializeApp(config);
        this.auth = app.auth();
        this.db = app.database();
    }
    
    /*** Authentication  ***/
    doCreateUserWithEmailAndPassword = (email, password) => 
        this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) => 
        this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => 
        this.auth.signOut();

    doPasswordReset = email => 
        this.auth.sendPasswordResetEmail(email);
    
    /*** Database ***/
    user = uid => this.db.ref(`users/${uid}`);
    users = () => this.db.ref('users');

    addActivity = (uid, activity) => {
        const ref = this.db.ref().child(`users/${uid}/activities`);
        ref.push(activity);
    };

    updateActivity = (uid, activity, activityKey) => {
        const ref = this.db.ref().child(`users/${uid}/activities/${activityKey}`);
        ref.update(activity);
    }
}
export default Firebase;