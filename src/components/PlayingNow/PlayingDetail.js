import { Link, useParams } from 'react-router-dom';
import _ from 'lodash';
import Button from '@mui/material/Button';
import * as React from 'react';
import PLAY_DATA from '../../data/playing.json';

// import SeatAvailability from './SeatAvailability';


//This function reads data from "plays.json" to generate play page for each play
export default function PlayingDetail(props) {
  let { playName } = useParams();
  const playNameString = playName;
  let play =  _.find(PLAY_DATA, {viewName: playNameString}); //find play in data

  return (
    <div>
      <section>
        <div className="about-body">
            <h1>{play.name}</h1>

        </div>
      </section>
    </div>
  );
}
