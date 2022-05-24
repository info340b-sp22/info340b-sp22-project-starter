import logo from './../favicon.ico';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import History from './History';
import NavBar from './Navigation';
import PlayGallery from './PlayGallery';
import About from './About';
import DogHeart from './plays/dogheart';
import Birds from './plays/birds';
import Lost from './plays/lost';
import LongGoodBye from './plays/longgoodbye';


export default function App(props) {
  return (
    <div className="App">
      <NavBar />
      <header>
        <h1>Chinese Theater Club</h1>
      </header>
      <Routes>
        <Route path="/" element={<History content={props.content}/>} />
        <Route path='/PlayGallery' element={<PlayGallery plays={props.plays}/>} />
        <Route path='/About' element={<About contact={props.contact}/>} />
        <Route path='/plays/dogheart' element={<DogHeart />}/>
        <Route path='/plays/birds' element={<Birds />}/>
        <Route path='/plays/lost' element={<Lost />}/>
        <Route path='/plays/longgoodbye' element={<LongGoodBye />}/>

      </Routes>
      <footer>&copy; Copyright 2022 Chinese Theater Club</footer>
    </div>
  );
}
