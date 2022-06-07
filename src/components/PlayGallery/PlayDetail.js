import { useParams } from 'react-router-dom';
import _ from 'lodash';
import Button from '@mui/material/Button';
import * as React from 'react';
import LikeButton from './LikeButton';
import PLAY_DATA from '../../data/plays.json';

export default function PlayDetail(props) {
  let { playName } = useParams();
  console.log(props);
  const playNameString = playName;
  let play =  _.find(PLAY_DATA, {viewName: playNameString}); //find play in data

  if(!play) return <h2>No play specified</h2> //if unspecified

  return (
    <div>
      <section>
        <div className="about-body">
          <div className="about-section">
            <h1>{play.name}</h1>
            <h2>{play.director}</h2>
            <a target="_blank" rel="noreferrer noopener" href={play.link}>
              <Button variant="contained">
                  Click Here For Entire Show
              </Button>
            </a>
          </div>
          <h2>Our Team</h2>
          <div className="about-row">
              <GenActor teamInfo={play.team}/>
          </div>
        </div>
      </section>
    </div>
  );
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

