import React from 'react';
import ReactDOM from 'react-dom';
import * as firebase from 'firebase/app';
import 'firebase/analytics';
import './index.css';
import { App, serviceWorker } from './app';

import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

// After installing firebase package
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// check firebase log in 'firebase login --reauth's
var firebaseConfig = {
  apiKey: 'AIzaSyAv_tCb9b4AW2WB3v9H0tVPlPGhcNLpQkk',
  authDomain: 'restaurant-app-demo-77bba.firebaseapp.com',
  projectId: 'restaurant-app-demo-77bba',
  storageBucket: 'restaurant-app-demo-77bba.appspot.com',
  messagingSenderId: '273295484065',
  appId: '1:273295484065:web:7733a0d42b51ade9423ce0',
  measurementId: 'G-F10JHLGL1B',
};

// This is where the magic happens. React renders our App component
// inside the div with the id "root"
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
