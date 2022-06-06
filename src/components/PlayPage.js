import React from 'react';
import { Outlet } from 'react-router-dom';

export default function PlayPage(props) {
  return (
    <div>
      <p>Check out our latest plays!</p>
      <Outlet />
    </div>
  )
}