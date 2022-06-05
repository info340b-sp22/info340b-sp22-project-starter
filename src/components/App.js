import logo from './../favicon.ico';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import History from './History';
import NavBar from './Navigation';
import PlayGallery from './PlayGallery';
import About from './About';
import SearchBar from './SearchBar';
import Form from './Form';

// import DogHeart from './plays/dogheart';
// import Birds from './plays/birds';
// import Lost from './plays/lost';
// import LongGoodBye from './plays/longgoodbye';


export default function App(props) {
  // console.log(<Route path='/About' element={<About contact={props.contact}/>} />);
  // console.log("test")
  // console.log(<PlayGallery/>);
  //<PlayGallery/>
  return (
    <div className="App">
      <NavBar />
      <header>
        <h1>Chinese Theater Club</h1>
      </header>
      <Routes>
        <Route path="/SearchBar" element={<SearchBar content={props.plays}/>} />
        <Route path="/" element={<History content={props.content}/>} />
        <Route path='/PlayGallery' element={<PlayGallery plays={props.plays}/>} />
        <Route path='/About' element={<About contact={props.contact}/>} />
        <Route path='/Form' element={<Form />} />
        {/* <Route path="/PlayGallery/DogHeart" element={<card1/>} /> */}
        
        
         {/* <Route path='/PlayGallery/dogheart' element={<PlayGallery/>[playCard/>]<DogHeart />}/> */}
        {/* <Route path='/PlayGallery/birds' element={<Birds />}/>
        <Route path='/PlayGallery/lost' element={<Lost />}/>
        <Route path='/PlayGallery/longgoodbye' element={<LongGoodBye />}/> */}

      </Routes>
      <footer>&copy; Copyright 2022 Chinese Theater Club</footer>
    </div>
  );
}
