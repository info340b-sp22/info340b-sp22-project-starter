import React from 'react'; //import React Component
import { Link } from 'react-router-dom';
import LikeButton from './LikeButton';


export default function PlayList(props) {
  let playButton = props.plays.map((play) => <GenButton plays={play} key={play.name}/>);

  return (
    <section className='plays'>
      {playButton}
    </section>
  );
}

function GenButton(props) {
  let {viewName, name, img, alt} = props.plays;
  return(
    <div className="gallery">
      <Link to= {"/PlayPage/" + viewName}>
        <img src={img} alt={alt}/>
        <p>{name}</p>
      </Link>
      <div>
        <LikeButton/>
      </div>
    </div>
  );
}

