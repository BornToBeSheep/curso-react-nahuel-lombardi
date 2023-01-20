import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkG9o4aUugRG-zl_RSSAvPt5yc4zrFHq0",
  authDomain: "todoseguridad-43625.firebaseapp.com",
  projectId: "todoseguridad-43625",
  storageBucket: "todoseguridad-43625.appspot.com",
  messagingSenderId: "671013027998",
  appId: "1:671013027998:web:2e46577b4511e739e33b8f"
};

// Initialize Firebase
initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


