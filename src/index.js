import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './components/App';
import historyData from "./data/historyContent.json";
import contactInfo from "./data/contact.json";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <App content={historyData} contact={contactInfo}/>
    </BrowserRouter>
);

