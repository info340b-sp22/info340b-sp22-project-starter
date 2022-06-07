import React, {useState} from "react";

export function SearchBar(props) {
  const [searchTerm, setSearchTerm] = useState("");
  let plays = props.plays;
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
            plays
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