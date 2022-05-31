import React from 'react';
import {Routes, Route, NavLink } from "react-router-dom";



function GenPlays(props) {
    let {cardAdd, viewName, name, director, link, img, alt, team} = props.plays;
    return(
        this[viewName] = function(){
            return (
                <section>
                <div className="about-body">
                    <div className="about-section">
                        <h1>{name}</h1>
                        <h2>{director}</h2>
                        <a target="_blank" href={link}>
                            <button>
                                Click Here For Entire Show
                            </button>
                        </a> 
                    </div>

                    <h2>Our Team</h2>
                    <div className="about-row">
                        <GenActor teamInfo={team}/>
                    </div>
                </div>
            </section>
            );
        }
    );
}

function GenActor(props) {
    let actors = props.teamInfo.map(function(actor){
        let actors = actor.map(function(info){
            let [img, alt, role, name, email] = info;
            return(
                <div className="column">
                    <div className="card">
                        <img src={img} alt={alt}/>
                        <div className="about-container">
                            <h2>{role}</h2>
                            <p className="title">Featured by</p>
                            <p>{name}</p>
                            <p>{email}</p>
                        </div>
                    </div>
                </div>
            );
        });
        return actors;
    });
    return actors;
}

function GenButton(props) {
    
    let {cardAdd, viewName, name, director, link, img, alt, team} = props.plays;
        return(
            <div className="gallery">
                    <NavLink to= {cardAdd}>
                        <div>
                            <img src={img} alt={alt}/>
                            <p>{name}</p>
                        </div>
                    </NavLink>
                </div>
        );
    }

// function GenRoute(props) {
//     let view = props.view;
//     let addr = props.plays;
//     let routes;
//     for (let i = 0; i<view.length; i++){
//         routes.concate{view[i]}
//     }
//     return (
//         <Route path={cardAdd} element={{view}[viewName] } />
//     );
// }


  export default function PlayGallery(props) {
    let {cardAdd, viewName, name, director, link, img, alt, team} = props.plays;
    let playCard = props.plays.map((play) => <GenPlays plays={play} key={play.name} />);
    let playButton = props.plays.map((play) => <GenButton plays={play} key={play.name}/>);
    let card1 = playCard[0];
    // let playRoutes = <GenRoute plays={cardAdd} view={playCard}/>;
    // console.log("playCard");
    // console.log(playCard);
    // console.log("playRoutes");
    console.log(playCard[0]);
    // console.log(playRoutes);
    return (
        <section>
            {playButton}
            {/* <Routes>
                {playRoutes}
            </Routes> */}
            
        </section>
    );
  }

