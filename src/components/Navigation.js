import React from 'react';
import { Link } from "react-router-dom";


const NavBar= () =>{
  return (
  <div>
    <nav>
    <li>
      <Link id="link_Styles" to="/">History</Link>
    </li>
    <li>
      <Link id="link_Styles" to="/PlayGallery">PlayGallery</Link>
    </li>
    <li>
      <Link id="link_Styles" to="/About">About</Link>
    </li>
    </nav>
  </div>
  );
}

export default NavBar;

