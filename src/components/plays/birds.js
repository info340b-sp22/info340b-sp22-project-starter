import React from 'react';
import { Link } from "react-router-dom";


export default function Birds() {
    return (
        <section>
        <div class="about-body">
            <div class="about-section">
            <h1>”A Thousand Paper Cranes"</h1>
            <h2>Director: Leon </h2>
            <a target="_blank" href="https://www.bilibili.com/video/BV1pa411v72g?spm_id_from=333.999.0.0">
                <button>
                    Click Here For Entire Show
                </button>
            </a> 
            
            </div>

            <h2>Our Team</h2>
            <div class="about-row">
            <div class="column">
                <div class="card">
                    <img src="../img/bird/chenxi.jpg" alt="chenxi" />
                <div class="about-container">
                    <h2>Chenxi Yu</h2>
                    <p class="title">Featured by</p >
                    <p>Shawna </p >
                    <p>shawna@uw.com</p >
                </div>
                </div>
            </div>

            <div class="column">
                <div class="card">
                <img src="../img/bird/xiaoniao.jpg" alt="xiaoniao" />
                <div class="about-container">
                    <h2>Xiaoniao Yu</h2>
                    <p class="title">Featured by</p >
                    <p>Serena </p >
                    <p>serena@uw.com</p >
                </div>
                </div>
            </div>

            </div>
        </div>
        </section>
    );
}