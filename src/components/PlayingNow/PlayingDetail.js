import { useParams } from 'react-router-dom';
import _ from 'lodash';
import React, {useState,  createContext} from "react"
import SeatAvailability from "./SeatAvailability"
import SeatMatrix from "./SeatMatrix"
import PLAY_DATA from '../../data/playing.json';

const MovieContext = createContext();

export {MovieContext}

//This function reads data from "plays.json" to generate play page for each play
export default function PlayingDetail(props) {
  let { playName } = useParams();
  const playNameString = playName;
  let play =  _.find(PLAY_DATA, {viewName: playNameString}); //find play in data
  const [movies, EditMovies] = useState({
		moviePrice: 10,
		totalSeats: 0,
		seatNumbers: []
	})


  return (
    <div>
      <section>
            <h1>{play.name}</h1>
            <div className="movieMain moiveContainer">
			        <MovieContext.Provider value={{ movies, changeState: EditMovies }}>
                <SeatMatrix />
                <SeatAvailability />
              </MovieContext.Provider>
              </div>
      </section>
    </div>
  );
}



