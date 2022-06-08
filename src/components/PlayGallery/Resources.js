import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import _ from 'lodash';
import Button from '@mui/material/Button';
import LikeButton from './LikeButton';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faSpinner } from '@fortawesome/free-solid-svg-icons'

const PLAY_DATA = '../../plays.json'

export default function Resources({setAlertMessage}) { //setAlertMessage callback as prop
  const [trackData, setTrackData] = useState({'viewName': '', 'team':[]}); //tracks to show
  const [isQuerying, setIsQuerying] = useState(false); //for spinner

  const { playName } = useParams();
  console.log(playName);
  const playNameString = playName; //get album from URL

  useEffect(()=>{
    // setIsQuerying(true);
    // setAlertMessage(null);
    fetch(PLAY_DATA)
      .then(response => response.json())
      .then(function(data) {
        console.log(data);
        let play =  _.find(data, {viewName: playNameString}); //find play in data
        if (play.viewName === '') {
          setAlertMessage('No play specified');
        }
        // setTrackData(trackData => ({
        //   ...trackData,
        //   ...play
        // }));
        setTrackData(play);
      })
      .catch(function(err) {
        setAlertMessage(err.message);
      })
      .then(() => setIsQuerying(false));
  },[playNameString, setAlertMessage])

  return (
    <div>
      {/* {isQuerying && <FontAwesomeIcon icon={faSpinner} spin size="4x" aria-label="Loading..." aria-hidden="false"/>} */}
      <div className="about-body">
        <div className="about-section">
          <h1>{trackData.name}</h1>
          <h2>{trackData.director}</h2>
          <a target="_blank" rel="noreferrer noopener" href={trackData.link}>
            <Button variant="contained">
                Click Here For Entire Show
            </Button>
          </a>
        </div>
        <h2>Our Team</h2>
        <div className="about-row">
            <GenActor teamInfo={trackData.team}/>
        </div>
      </div>
    </div>
  )
}


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
