import { useParams } from 'react-router';
import React, { useState } from 'react';

export default function UserPage(props) {
  const [msg, setMsg] = useState(null);
  const { userName } = useParams();

  const setMessage = (str) => {
    setMsg(str);
  }

  let plays = props.futurePlays.map((ele) => <GenFuturePlays futurePlays={ele} key={ele.name} setMsg={setMessage}/>);
  return (
    <div>
      <h3>Welcome! User {userName}</h3>
        <div className="alert loginAlert" role="alert">
          {msg}
        </div>
      {plays}
    </div>
  );
}

function GenFuturePlays(props) {
  let {name, director, img, alt, description} = props.futurePlays;

  const handleClick = (e) => {
    props.setMsg('An email about ticket purchase has been sent to your inbox!')
  }

  return (
    <div className="about-row">
    <div className="column" key={name}>
      <div className="card" >
        <img src={img} alt={alt}/>
        <div className="about-container">
          <h3>{name}</h3>
          <p className="title">Directed by</p>
          <p>{director}</p>
          <p className="title">Description</p>
          <p>{description}</p>
          <button onClick={handleClick}>Buy Ticket</button>
        </div>
      </div>
    </div>
    </div>
  );
}