import React from 'react';
import { Outlet } from 'react-router-dom';

export default function PlayPage(props) {
  return (
    <div>
      <h2>Check out our latest plays!</h2>
      <Outlet />
    </div>
  )
}