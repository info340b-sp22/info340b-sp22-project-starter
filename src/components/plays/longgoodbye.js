import React from 'react';
import { Link } from "react-router-dom";


export default function LongGoodBye() {
    return (
        <div class="about-body">
    <div class="about-section">
      <h1>”A Long Goodbye"</h1>
      <h2>Director: Chenxu Song</h2>
      <a target="_blank" href="https://www.bilibili.com/video/BV1aL411c73i?spm_id_from=333.999.0.0">
        <button>
          Click Here For Entire Show
        </button>
      </a> 
    </div>

    <h2 >Our Team</h2>
    <div class="about-row">
      <div class="column">
        <div class="card">
          <img src="../img/goodbye/elviGoodBye.jpg" alt="elvi"/>
          <div class="about-container">
            <h2>Mrs. Roger</h2>
            <p class="title">Featured by</p >
            <p>Elvi </p >
            <p>elvi@uw.com</p >
          </div>
        </div>
      </div>
    </div>
  </div>
    );
}