import logo from './../favicon.ico';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import History from './History';
import NavBar from './Navigation';
import PlayGallery from './PlayGallery';
import About from './About';


export default function App(props) {
  return (
    <div className="App">
      <NavBar />
      <header>
        <h1>Chinese Theater Club</h1>
      </header>
      <Routes>
        <Route path="/" element={<History content={props.content}/>} />
        <Route path='/PlayGallery' element={<PlayGallery />} />
        <Route path='/About' element={<About contact={props.contact}/>} />
      </Routes>
      <footer>&copy; Copyright 2022 Chinese Theater Club</footer>
    </div>
  );
}
