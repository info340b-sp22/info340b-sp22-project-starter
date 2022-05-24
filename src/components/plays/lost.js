import React from 'react';
import { Link } from "react-router-dom";


export default function Lost(props) {
    return (
        <div class="about-body">
            <div class="about-section">
                <h1>"Lost"</h1>
                <h2>Director: XieMin Pan</h2>
                <a target="_blank" href="https://www.bilibili.com/video/BV1wL4y1V7eK?spm_id_from=333.999.0.0">
                    <button>
                        Click Here For Entire Show
                    </button>
                </a>   
            </div>

            <h2>Our Team</h2>
            <div class="about-row">
            <div class="column">
                <div class="card">
                <img src="../img/lost/fiona.jpg" alt="Fiona"/>
                <div class="about-container">
                    <h2>Amy</h2>
                    <p class="title">Featured by</p >
                    <p>Fiona</p >
                    <p>fangyu@uw.com</p >
                </div>
                </div>
            </div>

            <div class="column">
                <div class="card">
                <img src="../img/lost/elvi.jpg" alt="Elvi" />
                <div class="about-container">
                    <h2>Hanna</h2>
                    <p class="title">Featured by</p >
                    <p>Elvi</p >
                    <p>elvi@uw.com</p >
                </div>
                </div>
            </div>

            <div class="column">
                <div class="card">
                <img src="../img/lost/mary.jpg" alt="Mary" />
                <div class="about-container">
                    <h2>Dr. Evan</h2>
                    <p class="title">Featured by</p >
                    <p>Chloe</p >
                    <p>chloe@uw.com</p >
                </div>
                </div>
            </div>
            </div>
        </div>
    );
}