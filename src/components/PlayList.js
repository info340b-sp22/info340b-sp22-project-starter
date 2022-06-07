import React, {useState} from 'react'; //import React Component
import { Link } from 'react-router-dom';
import LikeButton from './LikeButton';

export default function PlayList(props) {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <section className='plays'>
      <div className="searchInput_Container">
        <input id="searchInput" type="text" placeholder="Search here..." onChange={(event) => {
          setSearchTerm(event.target.value);
        }}/>
      </div>
      <div>
          {
            props.plays
              .filter((val) => {
                if(searchTerm === ""){
                  return true;
                }else if(val.name.toLowerCase().includes(searchTerm.toLowerCase())){
                  return true;
                }else {
                  return false;
                }
              })
              .map((val) => <GenButton plays={val} key={val.name}/>)
          }
        </div>
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

