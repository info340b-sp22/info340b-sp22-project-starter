import logo from './../favicon.ico';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import History from './History';
import NavBar from './Navigation';
import PlayGallery from './PlayGallery';
import About from './About';


function App() {
  return (
    <body>
      <NavBar />
      {/* <Router>
        <NavBar />
        <Routes>
          <Route path='' exact component={History} />
          <Route path='/PlayGallery' component={PlayGallery} />
          <Route path='/About' component={About} />
        </Routes>
      </Router> */}

      <header>
        <h1>Chinese Theater Club</h1>
      </header>
    <main>
      <History />
    </main>
    <footer>&copy; Copyright 2022 Chinese Theater Club</footer>
    </body>
  );
}

export default App;
