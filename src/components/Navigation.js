import React from 'react';
import { Link } from "react-router-dom";

const NavBar= () =>{
  return (
  <div>
    <li>
      <Link to="/">History</Link>
    </li>
    <li>
      <Link to="/PlayGallery">PlayGallery</Link>
    </li>
    <li>
      <Link to="/About">About</Link>
    </li>
  </div>
  );
}

export default NavBar;

