import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyD138NBELku1RlHvcvsazxvL7qCfZOHKqo",
    authDomain: "todo-scheduler-f6eaf.firebaseapp.com",
    projectId: "todo-scheduler-f6eaf",
    storageBucket: "todo-scheduler-f6eaf.appspot.com",
    messagingSenderId: "926280004900",
    appId: "1:926280004900:web:e38f6129fa50dba3b06fb1",
    measurementId: "G-4JENCZSBCN"

});

const db = firebaseApp.filestore();

export default db ;