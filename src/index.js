import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDirPnduIfdOTnrTnpQoNYXOePK9oiZJEU",
    authDomain: "chat-react-179a7.firebaseapp.com",
    projectId: "chat-react-179a7",
    storageBucket: "chat-react-179a7.appspot.com",
    messagingSenderId: "619799514021",
    appId: "1:619799514021:web:e6111af3d1117f3823364c",
    measurementId: "G-SVVJ374JMC" 
};

export const Context = createContext(null)

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const firestore = firebase.firestore()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Context.Provider value={{
        firebase,
        auth,
        firestore
    }}>
        <App />
    </Context.Provider>
);
