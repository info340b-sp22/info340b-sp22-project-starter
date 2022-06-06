import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import History from './History';
import NavBar from './Navigation';
import About from './About';
import SearchBar from './SearchBar';
import Form from './Form';
import PlayList from './PlayList';
import PlayDetail from './PlayDetail';
import PlayPage from './PlayPage';


export default function App(props) {
  return (
    <div className="App">
      <NavBar />
      <header>
        <h1>Chinese Theater Club</h1>
      </header>
      <Routes>
        <Route path="/SearchBar" element={<SearchBar content={props.plays}/>} />
        <Route path="/History" element={<History content={props.content}/>} />
        <Route path="/PlayPage" element={<PlayPage />} >
          <Route path=":playName" element={<PlayDetail />}/>
          <Route index element={<PlayList plays={props.plays}/>} />
        </Route>
        <Route path='/About' element={<About contact={props.contact}/>} />
        <Route path='/Form' element={<Form />} />
        <Route path='*' element={<Navigate to="/History" />} />
      </Routes>
      <footer>&copy; Copyright 2022 Chinese Theater Club</footer>
    </div>
  );
}
