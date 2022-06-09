import React from 'react';
import { Outlet } from 'react-router-dom';

export default function PlayPage(props) {
  return (
    <div>
      <h2>Check out our previous plays!</h2>
      <Outlet />
    </div>
  )
}