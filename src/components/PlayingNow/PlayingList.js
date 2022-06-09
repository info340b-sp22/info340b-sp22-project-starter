import React,  {useState} from 'react';
import { Link } from "react-router-dom";
import LikeButton from '../LikeButton';


export default function PlayingNow(props) {
    const [searchTerm, setSearchTerm] = useState("");
  
    //a search button user can use to find the play name matching user typed in. 
    let searchInput =
    <div className="searchInput_Container">
      <input id="searchInput" type="text" placeholder="Search here..." onChange={(event) => {
        setSearchTerm(event.target.value);
      }}/>
    </div>
  
    //display function finds all plays contained in plays.json file and uses genbutton helper method to generate each small playcard in the playgallery page.
    let display =
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
  
    return (
      <section className='plays'>
        {searchInput}
        {display}
      </section>
    );
  }
  
  //funtion that generates playcards for all plays.
  function GenButton(props) {
    let {viewName, name, director, img, alt, description} = props.plays;
    return(
      <div className="gallery">
        <Link to= {"/PlayingPage/" + viewName}>
          <img src={img} alt={alt}/>
          <p>{name}</p>
        </Link>
        <p>{director}</p>
        <p>{description}</p>
        <div>
          <LikeButton/>
        </div>
      </div>
    );
  }
  
  

