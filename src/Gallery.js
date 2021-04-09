import React from 'react';
import "./Gallery.css";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper-bundle.css';

// import 'swiper/components/effect-coverflow/effect-coverflow.min.css';

import SwiperCore, { Pagination, EffectCoverflow, A11y } from 'swiper';

// import Swiper from 'react-id-swiper';

import Image__3 from "./assets/img__3.jpeg";
import Image__2 from "./assets/img__2.jpg";
import Image__4 from "./assets/img__4.jpeg";
import Image__5 from "./assets/img__5.jpeg";
import Image__6 from "./assets/img__6.jpeg";

SwiperCore.use([ Pagination, EffectCoverflow, A11y ]);

const Gallery = () => {

    return (

        <div className="Gallery__Container" >

            <div className="Gallery__text" >
                <h3>GALLERY</h3>
                <p>Love images!</p>
                <p>We have created a fictional image website. Lorem ipsum...</p>
            </div>

            <Swiper
                spaceBetween={30}
                slidesPerView={3}

                EffectCoverflow
                pagination={{ clickable: true }}

                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>
                    <img
                        className="Gallery__image"
                        src={Image__3} />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="Gallery__image"
                        src={Image__2} />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="Gallery__image"
                        src={Image__4} />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="Gallery__image"
                        src={Image__5} />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="Gallery__image"
                        src={Image__6} />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="Gallery__image"
                        src={Image__2} />
                </SwiperSlide>

            </Swiper>
        </div>

    );
};

export default Gallery;
