import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase/app';
import 'firebase/firestore';

 var firebaseConfig = {
  apiKey: "AIzaSyAHFPwUloEUJUwCZy2WqotE7Dr9itPbyoI",
  authDomain: "fitkit-a5310.firebaseapp.com",
  projectId: "fitkit-a5310",
  storageBucket: "fitkit-a5310.appspot.com",
  messagingSenderId: "950746999580",
  appId: "1:950746999580:web:0e45d5cc8c651e30e068d9",
  measurementId: "G-P3ZHRD90HY"
};

firebase.initializeApp(firebaseConfig);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
