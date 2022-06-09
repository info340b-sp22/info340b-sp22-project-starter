import React from 'react';
import { Link } from "react-router-dom";

//navigation bar for user to go different pages.
const NavBar= () =>{
  return (
    <div>
      <nav>
        <li>
          <Link className='nav-link' to="/History">Club History</Link>
        </li>
        <li>
          <Link className='nav-link'to="/PlayPage">Play Gallery</Link>
        </li>
        <li>
          <Link className='nav-link' to="/About">About Us</Link>
        </li>
        <li>
          <Link className='nav-link' to="/Form">Playing Now</Link>
        </li>
      </nav>
    </div>
  );
}

export default NavBar;

