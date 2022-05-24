import React from 'react';
import { Link } from "react-router-dom";


export default function DogHeart() {
    return (
        <section>
            <div class="about-body">
                <div class="about-section">
                    <h1>"Dog Heart"</h1>
                    <h2>Director: XieMin Pan</h2>
                    <a target="_blank" href="https://www.bilibili.com/video/BV1ZF411g7Dd?spm_id_from=333.337.search-card.all.click">
                        <button>
                            Click Here For Entire Show
                        </button>
                    </a> 
                    
                </div>

                <h2>Our Team</h2>
                <div class="about-row">
                    <div class="column">
                        <div class="card">
                            <img src="../img/Dogheart/liuxu.jpg" alt="Xu Liu" />
                            <div class="about-container">
                                <h2>Professor Philip</h2>
                                <p class="title">Featured by</p>
                                <p>Xu Liu</p>
                                <p>Xuliu@uw.com</p>
                            </div>
                        </div>
                    </div>

                    <div class="column">
                        <div class="card">
                            <img src="../img/Dogheart/yanqing.jpg" alt="YanQing"/>
                            <div class="about-container">
                                <h2>Sharikov</h2>
                                <p class="title">Featured by</p>
                                <p>YanQing</p>
                                <p>yanqing@uw.com</p>
                            </div>
                        </div>
                    </div>

                    <div class="column">
                        <div class="card">
                            <img src="../img/Dogheart/evan.jpg" alt="evan"/>
                            <div class="about-container">
                                <h2>Dr. Evan</h2>
                                <p class="title">Featured by</p>
                                <p>Mia Li</p>
                                <p>Mia@uw.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}