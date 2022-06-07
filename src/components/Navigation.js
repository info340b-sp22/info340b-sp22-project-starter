import React from 'react';
import { Link } from "react-router-dom";


const NavBar= () =>{
  return (
  <div>
    <nav>
      <li>
        <Link id="link_Styles" to="/History">History</Link>
      </li>
      <li>
        <Link id="link_Styles" to="/PlayPage">PlayPage</Link>
      </li>
      <li>
        <Link id="link_Styles" to="/About">About</Link>
      </li>
      <li>
        <Link id="link_Styles" to="/Form">Form</Link>
      </li>
    </nav>
  </div>
  );
}

export default NavBar;

