import React, { Component } from 'react';
import 'swiper/swiper-bundle.css';
import "./Gallery2.css";
import Swiper from "swiper";

import Image__3 from "./assets/img__3.jpeg";
import Image__2 from "./assets/img__2.jpg";
import Image__4 from "./assets/img__4.jpeg";
import Image__5 from "./assets/img__5.jpeg";
import Image__6 from "./assets/img__6.jpeg";
import Image__7 from "./assets/img__7.jpeg";
import Image__8 from "./assets/img__8.JPG";
import Image__9 from "./assets/img__9.jpg";
import Image__10 from "./assets/img__10.jpg";
import Image__11 from "./assets/img__11.JPG";
import Image__12 from "./assets/img__12.jpg";
import Image__13 from "./assets/img__13.jpg";
import Image__14 from "./assets/img__14.jpg";



class Gallery2 extends Component {

    componentDidMount() {
        this.swiper = new Swiper('.swiper-container', {
            effect: 'coverflow',
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: 'auto',
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            },
            pagination: {
                el: '.swiper-pagination',
            },
        });
    }

    render() {
        return (
            <div className="main-container" >

                <div className="Gallery__text" >
                    <h3>GALLERY</h3>
                    <p>Love images!</p>
                    <p>We have created a fictional image website. Lorem ipsum...</p>
                </div>

                <div className="swiper-container">
                    <div className="swiper-wrapper">

                        <div className="swiper-slide" >
                            <img
                                className="Gallery__image"
                                src={Image__2} />
                        </div>
                        <div className="swiper-slide" >
                            <img
                                className="Gallery__image"
                                src={Image__3} />
                        </div>
                        <div className="swiper-slide" >
                            <img
                                className="Gallery__image"
                                src={Image__4} />
                        </div>
                        <div className="swiper-slide" >
                            <img
                                className="Gallery__image"
                                src={Image__5} />
                        </div>
                        <div className="swiper-slide" >
                            <img
                                className="Gallery__image"
                                src={Image__6} />
                        </div>
                        <div className="swiper-slide" >
                            <img
                                className="Gallery__image"
                                src={Image__4} />
                        </div>
                        <div className="swiper-slide" >
                            <img
                                className="Gallery__image"
                                src={Image__2} />
                        </div>
                        <div className="swiper-slide" >
                            <img
                                className="Gallery__image"
                                src={Image__7} />
                        </div>
                        <div className="swiper-slide" >
                            <img
                                className="Gallery__image"
                                src={Image__8} />
                        </div>
                        <div className="swiper-slide" >
                            <img
                                className="Gallery__image"
                                src={Image__9} />
                        </div>
                        <div className="swiper-slide" >
                            <img
                                className="Gallery__image"
                                src={Image__10} />
                        </div>
                        <div className="swiper-slide" >
                            <img
                                className="Gallery__image"
                                src={Image__11} />
                        </div>
                        <div className="swiper-slide" >
                            <img
                                className="Gallery__image"
                                src={Image__12} />
                        </div>
                        <div className="swiper-slide" >
                            <img
                                className="Gallery__image"
                                src={Image__13} />
                        </div>
                        <div className="swiper-slide" >
                            <img
                                className="Gallery__image"
                                src={Image__14} />
                        </div>


                        {/*<div className="swiper-slide image__3" > </div>*/}
                        {/*<div className="swiper-slide image__4" > </div>*/}
                        {/*<div className="swiper-slide image__5" > </div>*/}
                        {/*<div className="swiper-slide image__6" > </div>*/}
                        {/*<div className="swiper-slide image__7" > </div>*/}
                        {/*<div className="swiper-slide image__8" > </div>*/}
                    </div>
                </div>
            </div>

        )
    }
}


export default Gallery2;
