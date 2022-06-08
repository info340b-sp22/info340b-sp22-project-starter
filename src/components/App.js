import React, { useState } from 'react';

import { Routes, Route, Navigate } from 'react-router-dom';
import { Alert } from 'react-bootstrap';

import History from './History';
import NavBar from './Navigation';
import About from './About';
import Form from './Form';
import PlayList from './PlayGallery/PlayList';
import PlayDetail from './PlayGallery/PlayDetail';
import PlayPage from './PlayGallery/PlayPage';
import Resources from './PlayGallery/Resources';


export default function App(props) {
  const [alertMessage, setAlertMessage] = useState(null);

  return (
    <div className="App">
      <NavBar />
      <header>
        <h1>Chinese Theater Club</h1>
      </header>
      {alertMessage &&
        <Alert variant="danger" dismissible onClose={() => setAlertMessage(null)}>{alertMessage}</Alert>
      }
      <main>
        <Routes>
          <Route path="/History" element={<History content={props.content}/>} />
          {/* add routes for all plays pages user can click */}
          <Route path="/PlayPage" element={<PlayPage />} >
            <Route path=":playName" element={<Resources setAlertMessage={setAlertMessage}/>}/>
            <Route index element={<PlayList plays={props.plays}/>} />
          </Route>
          <Route path='/About' element={<About contact={props.contact}/>} />
          <Route path='/Form' element={<Form />} />
          <Route path='*' element={<Navigate to="/History" />} />
        </Routes>
      </main>
      <footer>&copy; Copyright 2022 Chinese Theater Club</footer>
    </div>
  );
}
