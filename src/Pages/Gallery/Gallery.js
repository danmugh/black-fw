import React from 'react';
import "./Gallery.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import SwiperCore, { Pagination, EffectCoverflow, A11y } from 'swiper';
// import Swiper from 'react-id-swiper';
import Zoom from 'react-reveal/Zoom';


import 'swiper/components/effect-coverflow/effect-coverflow.min.css';


import Image__3 from "../../assets/img__3.jpeg";
import Image__2 from "../../assets/img__2.jpg";
import Image__4 from "../../assets/img__4.jpeg";
import Image__5 from "../../assets/img__5.jpeg";
import Image__6 from "../../assets/img__6.jpeg";
import Image__7 from "../../assets/img__7.jpeg";
import Image__8 from "../../assets/img__8.JPG";
import Image__9 from "../../assets/img__9.jpg";
import Image__10 from "../../assets/img__10.jpg";
import Image__11 from "../../assets/img__11.JPG";
import Image__12 from "../../assets/img__12.jpg";
import Image__13 from "../../assets/img__13.jpg";
import Image__14 from "../../assets/img__14.jpg";

SwiperCore.use([ Pagination, EffectCoverflow, A11y ]);

const Gallery = () => {

    return (

        <div className="Gallery__Container" >

            <div className="Gallery__text" >
                <h3>GALLERY</h3>
                <p>Love images!</p>
                <p>We have created a fictional image website. Lorem ipsum...</p>
            </div>

            <Zoom duration={1500} >
                <Swiper
                    spaceBetween={0}
                    slidesPerView={3}
                    style={{
                        backgroundColor: 'black',
                        height: '300px',
                        width: '100VW'
                    }}

                    effect='coverflow'
                    grabCursor={true}
                    centeredSlides={false}

                    EffectCoverflow
                    pagination={{ clickable: true }}

                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide className="swiper-slide__1" >
                        <img
                            className="Gallery__image"
                            src={Image__2} />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide__1" >
                        <img
                            className="Gallery__image"
                            src={Image__5} />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide__1" >
                        <img
                            className="Gallery__image"
                            src={Image__4} />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide__1" >
                        <img
                            className="Gallery__image"
                            src={Image__5} />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide__1" >
                        <img
                            className="Gallery__image"
                            src={Image__6} />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide__1" >
                        <img
                            className="Gallery__image"
                            src={Image__2} />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide__1" >
                        <img
                            className="Gallery__image"
                            src={Image__7} />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide__1" >
                        <img
                            className="Gallery__image"
                            src={Image__8} />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide__1" >
                        <img
                            className="Gallery__image"
                            src={Image__9} />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide__1" >
                        <img
                            className="Gallery__image"
                            src={Image__10} />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide__1" >
                        <img
                            className="Gallery__image"
                            src={Image__11} />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide__1" >
                        <img
                            className="Gallery__image"
                            src={Image__12} />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide__1" >
                        <img
                            className="Gallery__image"
                            src={Image__13} />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide__1" >
                        <img
                            className="Gallery__image"
                            src={Image__14} />
                    </SwiperSlide>


                </Swiper>
            </Zoom>

        </div>

    );
};

export default Gallery;
