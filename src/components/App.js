import logo from './../favicon.ico';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import History from './History';
import NavBar from './Navigation';
import PlayGallery from './PlayGallery';
import About from './About';


function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<History />} />
        <Route path='/PlayGallery' element={<PlayGallery />} />
        <Route path='/About' element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
