import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import './slider-animations.css';
import './Testimony.css';

import Quote from "./assets/quote__2.png";
import Bg1 from "./assets/testimony__1.jpeg";
import Bg2 from "./assets/testimony__2.jpeg";
import Bg3 from "./assets/testimony__3.jpeg";
import Bg4 from "./assets/testimony__4.jpeg";
import Bg5 from "./assets/testimony__5.jpeg";
import Bg6 from "./assets/testimony__6.jpeg";

import {Avatar} from "antd";

const content = [
    {
        title: 'Tortor Dapibus Commodo Aenean Quam',
        description:
            'Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui.',
        button: 'Discover',
        image: 'https://i.imgur.com/DCdBXcq.jpg',
        user: 'Erich Behrens',
        userProfile: 'https://i.imgur.com/0Clfnu7.png'
    },
    {
        title: 'Vulputate Mollis Ultricies Fermentum Parturient',
        description:
            'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.',
        button: 'Read More',
        image: 'https://i.imgur.com/ZXBtVw7.jpg',
        // image: { Bg3 },
        user: 'Luan Gjokaj',
        userProfile: 'https://i.imgur.com/JSW6mEk.png'
    },
    {
        title: 'Tortor Dapibus Commodo Aenean Quam',
        description:
            'Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui.',
        button: 'Discover',
        image: 'https://i.imgur.com/DCdBXcq.jpg',
        user: 'Erich Behrens',
        userProfile: 'https://i.imgur.com/0Clfnu7.png'
    },
    {
        title: 'Phasellus volutpat metus',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam.',
        button: 'Buy now',
        image: 'https://i.imgur.com/DvmN8Hx.jpg',
        user: 'Bruno Vizovskyy',
        userProfile: 'https://i.imgur.com/4KeKvtH.png'
    }
];


const Testimony = () => (
    <div>
        <Slider className="slider-wrapper"
                autoplay={2000}
        >
            { content.map((item, index) => (
                <div
                    key={index}
                    className="slider-content"
                    style={{ background: `url('${item.image}') no-repeat center center` }}
                >
                    <div className="inner">
                        <h1>WHAT FANS SAY</h1>
                        <br/>
                        <span className="span__avatar" >

                            {/*<Avatar*/}
                            {/*    src={ Quote }*/}
                            {/*    size={{*/}
                            {/*        sm: 75,*/}
                            {/*        md: 95,*/}
                            {/*        lg: 105,*/}
                            {/*        xl: 105,*/}
                            {/*    }}*/}
                            {/*/>*/}

                            <img src={ Quote } className="img__quote" />

                        </span>

                        <p>{item.description}</p>
                        <div className="center__user" >
                            <section>
                                <img src={item.userProfile} alt={item.user} />
                                <span>
							        Posted by <strong>{item.user}</strong>
						        </span>
                            </section>
                        </div>

                    </div>

                </div>
            )) }
        </Slider>
    </div>
);


export default Testimony;