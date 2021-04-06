import React from 'react';
import "./Hero.css";
import FW_Cover from "./assets/img__1.jpg";
import FW_Cover_2 from "./assets/img__2.jpg";
import { BrowserRouter as Router, Link } from "react-router-dom";


const Hero = () => {
    return (
        <div>
            <section className="section__container" >
                <div className="hero__wrapper" >
                    <img
                        src={FW_Cover_2}
                        className="hero__image" />
                    <div className="hero__content" >
                        <h1>Luxury Villa in Beverly Hills, California</h1>
                        <p>$4, 380, 000</p>

                        <Router>
                            <Link
                                to="#"
                                className="hero__button" >
                                View Home
                            </Link>
                        </Router>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Hero;
