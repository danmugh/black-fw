import React from 'react';
import "./Hero.css";

import FW_Cover from "../../assets/img__1.jpg";
// import FW_Cover_2 from "./assets/img__2.jpg";
import FW_Cover_3 from "../../assets/hero__1.jpeg";

import { BrowserRouter as Router, Link } from "react-router-dom";
import Zoom from 'react-reveal/Fade';

const Hero = () => {
    return (
        <div>
            <section className="section__container" >
                <div className="hero__wrapper" >
                    {/*<img*/}
                    {/*    src={FW_Cover_3}*/}
                    {/*    className="hero__image" />*/}

                        <div className="hero__content" >
                            {/*<h1>Millionaires weren't born millionaire. It was just an hardworking attempt they did. You should just put all your energy and effort.Don't stop believing on your dreams. A dream is alike an utopia unreleazable but if you trust at , it will happen.</h1>*/}
                            <Zoom
                                left cascade
                                duration={1500}
                            >
                                <h1>
                                    Lorem ipsum dolor sit amet, sed sit do eiusmod tempor aliquet. Maecenas vel facilisis est velit egestas...
                                </h1>
                            </Zoom>
                            {/*<h1>Lorem ipsum dolor sit amet</h1>*/}
                            {/*<h1>sed sit do eiusmod tempor aliquet.</h1>*/}
                            {/*<h1>Maecenas vel facilisis est velit egestas.</h1>*/}

                            {/*<h1>Millionaires weren't born millionaire.</h1>*/}
                            {/*<h1>It was just an hardworking attempt they did.</h1>*/}
                            {/*<h1>You should just put all your energy and effort...</h1>*/}
                            {/*<h1>Don't stop believing on your dreams. A dream is alike an utopia unreleazable but if you trust at , it will happen.</h1>*/}

                            {/*Millionaires weren't born millionaire. It was just an hardworking attempt they did. You should just put all your energy and effort.Don't stop believing on your dreams. A dream is alike an utopia unreleazable but if you trust at , it will happen.*/}
                            {/*Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Maecenas accumsan lacus vel facilisis volutpat est velit egestas. Nunc aliquet bibendum enim facilisis.*/}

                            {/*<p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>*/}
                            <Zoom left>
                                <Router>
                                    <Link
                                        to="#"
                                        className="hero__button" >
                                        See More
                                    </Link>
                                </Router>
                            </Zoom>
                        </div>

                </div>
            </section>
        </div>
    );
};

export default Hero;
