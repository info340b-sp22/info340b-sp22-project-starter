import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import _ from 'lodash';
import Button from '@mui/material/Button';
import LikeButton from './LikeButton';

const PLAY_DATA = '../../playsDetail.json'

//This function fetches data from "plays.json" to generate play page for each play
export default function Resources() {
  const [playData, setPlayData] = useState({'viewName': '', 'team':[]}); //tracks to show
  const [alertMessage, setAlertMessage] = useState(null);

  const { playName } = useParams();

// rerenders the page whenever the specified play changes.
  useEffect(()=>{
    setAlertMessage(null);
    fetch(PLAY_DATA)
      .then(response => response.json())
      .then(function(data) {
        if (data.status >= 400) {
          throw new Error("Server responds with error!");
        }
        let play =  _.find(data, {viewName: playName}); //find play in data
        console.log(!play);
        if (!play) {
          setAlertMessage('No such play in the gallery!');
        }
        setPlayData(play);
      })
      .catch(function(err) {
        setAlertMessage(err.message);
      })
  },[playName, setAlertMessage])

// renders the detailed content
  if (alertMessage === null) {
    return (
      <div className="details">
        <section>
          <h1>{playData.name}</h1>
          <h2>{playData.director}</h2>
          <a target="_blank" rel="noreferrer noopener" href={playData.link}>
            <Button variant="contained">
                Click Here For Entire Show
            </Button>
          </a>
        </section>
        <h2>Our Team</h2>
        <div className="about-row">
            <GenActor teamInfo={playData.team}/>
        </div>
      </div>
    )
  } else {
    return (
      <div className='message'>
        <div className='error'>
          <p>{alertMessage}</p>
        </div>
      </div>
    )
  }
}

//a helper method that generates actor information needed by play pages.
function GenActor(props) {
  let actors = props.teamInfo.map(function(actor){
    let {img, role, name, email} = actor;
    return(
      <div className="column" key={name}>
        <div className="card" >
          <img src={img} alt={name}/>
          <div className="about-container">
            <h2>{role}</h2>
            <p className="title">Featured by</p>
            <p>{name}</p>
            <p>{email}</p>
            <LikeButton/>
          </div>
        </div>
      </div>
    );
  });
  return actors;
}
