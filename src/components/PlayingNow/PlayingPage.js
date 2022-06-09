import React from 'react';
import { Outlet } from 'react-router-dom';

export default function PlayPage(props) {
  return (
    <div>
      <h2>Check out our current plays and buy tickets!</h2>
      <Outlet />
    </div>
  )
}