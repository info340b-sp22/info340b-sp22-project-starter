import React from 'react';
import { Link } from "react-router-dom";


const NavBar= () =>{
  return (
    <div>
      <nav>
        <li>
          <Link id="link_Styles" to="/History">Club History</Link>
        </li>
        <li>
          <Link id="link_Styles" to="/PlayPage">Play Gallery</Link>
        </li>
        <li>
          <Link id="link_Styles" to="/About">About Us</Link>
        </li>
        <li>
          <Link id="link_Styles" to="/Form">Registration</Link>
        </li>
      </nav>
    </div>
  );
}

export default NavBar;

