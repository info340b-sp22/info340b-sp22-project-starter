import React from 'react';

import { Routes, Route, Navigate } from 'react-router-dom';

import History from './History';
import NavBar from './Navigation';
import About from './About';
import Form from './Form';
import PlayList from './PlayGallery/PlayList';
import PlayDetail from './PlayGallery/PlayDetail';
import PlayPage from './PlayGallery/PlayPage';
import PlayingDetail from './PlayingNow/PlayingDetail';
import PlayingList from './PlayingNow/PlayingList';
import PlayingPage from './PlayingNow/PlayingPage';



export default function App(props) {

  return (
    <div className="App">
      <NavBar />
      <header>
        <h1>Chinese Theater Club</h1>
      </header>
      <Routes>
        <Route path="/History" element={<History content={props.content}/>} />
        {/* add routes for all plays pages user can click */}
        <Route path="/PlayPage" element={<PlayPage />} >
          <Route path=":playName" element={<PlayDetail />}/>
          <Route index element={<PlayList plays={props.plays}/>} />
        </Route>
        <Route path='/About' element={<About contact={props.contact}/>} />
        <Route path='/Form' element={<Form />} />
        <Route path='*' element={<Navigate to="/History" />} />
        <Route path="/PlayingPage" element={<PlayingPage />} >
          <Route path=":playName" element={<PlayingDetail />}/>
          <Route index element={<PlayingList plays={props.playing}/>} />
        </Route>
      </Routes>
      <footer>&copy; Copyright 2022 Chinese Theater Club</footer>
    </div>
  );
}
