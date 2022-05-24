import React from 'react';
import {Routes, Route, Link } from "react-router-dom";
 import DogHeart from './plays/dogheart';

  export default function PlayGallery() {
    return (
        <section>
            <div class="gallery">
                <Link to= "../plays/dogheart" target="_blank">
                    <div>
                        <img src="img/dogHeart.jpg" alt="Dog Heart play poster"/>
                        <p>Dog Heart</p>
                    </div>
                </Link>
            </div>

            <div class="gallery">
                <Link to="../plays/birds" target="_blank">
                    <div>
                        <img src="img/bird.jpg" alt="Bird play poster"/>
                        <p>A Thousand Paper Cranes</p>
                    </div>
                </Link>
            </div>

            <div class="gallery">
                <Link to="../plays/lost" target="_blank">
                    <div>
                        <img src="img/lost.jpg" alt="Lost play"/>
                        <p>Lost</p>
                    </div>
                </Link>
            </div>

            <div class="gallery">
                <Link to="../plays/longgoodbye" target="_blank">
                    <div>
                        <img src="img/longGoodbye.jpg" alt="The Long Goodbye"/>
                        <p>The Long Goodbye</p>
                    </div>
                </Link>
            </div>

        </section>


        
    
    );
  }
