import React, {useState} from "react";
import data from "../data/TemplateData.json";
import {Routes, Route, NavLink } from "react-router-dom";

export function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <div className="card">
        <div className="searchInput_Container">
          <input id="searchInput" type="text" placeholder="Search here..." onChange={(event) => {
            setSearchTerm(event.target.value);
          }} />
        </div>
        <div>
          {
            data 
              .filter((val) => {
                if(searchTerm == ""){
                  return val;
                }else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
                  return val;
                }
              })
              .map((val) => {
                return(
                  <div className="gallery" key={val.id}>
                      <img src={val.image} alt="" />
                      <h3>{val.title}</h3>
                      <p className="director">{val.director}</p>
                  </div> 
                )
              })
          }
        </div>
      </div>
      
      
    </>
    
  )
}

export default SearchBar;