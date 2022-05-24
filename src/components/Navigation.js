import React from 'react';
import { Link } from "react-router-dom";


const NavBar= () =>{
  return (
  <nav>
    
      <a className='active'>
      <Link to="/">History</Link>
      </a>
      <a>
      <Link to="/PlayGallery">PlayGallery</Link>
      </a>
      <a>
      <Link to="/About">About</Link>
      </a>
  </nav>
  );
}

export default NavBar;

