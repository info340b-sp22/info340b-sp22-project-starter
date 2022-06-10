import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import 'whatwg-fetch';
import './index.css';
import App from './components/App';
import historyData from "./data/historyContent.json";
import contactInfo from "./data/contact.json";
import playsInfo from "./data/plays.json";
import futurePlays from "./data/futurePlays.json";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlHN1kd0Pqq_QdZi7aoSmkRl3tGoKstrY",
  authDomain: "ctc-official.firebaseapp.com",
  projectId: "ctc-official",
  storageBucket: "ctc-official.appspot.com",
  messagingSenderId: "549727310344",
  appId: "1:549727310344:web:1345762ae87207926777bd",
  measurementId: "G-WFKXJB83T5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <App content={historyData} contact={contactInfo} plays={playsInfo} futurePlays={futurePlays}/>
    </BrowserRouter>
);

