import React, { useState, useEffect } from 'react';
import "./Videos.css";
import { PlayCircleOutlined } from "@ant-design/icons";
import { Row, Col } from 'antd';
import YouTube from "react-youtube";


const Videos = () => {
    const [trailerUrl, setTrailerUrl] = useState("YHGadROIUXE");
    const [showVideosList, setVideosList] = useState(false);

    const playHandle = () => {
        // alert('Hey, now you play videos')
        setVideosList(true)
    }

    const GRTFL = () => {

        setTrailerUrl("bI8NAf2c5IY")

        // if (trailerUrl) {
        //     setTrailerUrl("");
        // } else {
        //     setTrailerUrl("bI8NAf2c5IY")
        // }
    }

    const Talk = () => {

        setTrailerUrl('YHGadROIUXE')

    }

    const BlackMamba = () => {

        setTrailerUrl("jY4LwBUVyP4")

    }

    const MamaAfirca = () => {

        setTrailerUrl("0jYichq_24Y")

    }

    const BestBoys = () => {

        setTrailerUrl('HqJ1qP05Si0')

    }


    const opts = {
        height: '380',
        width: '100%',
        playerVars: {
            autoplay: 1,
        }

    }

    return (
        <div>
            <div className="videos__wrapper" >

                {/*<p className="videos__text" >WATCH MY <span>*/}
                {/*    <PlayCircleOutlined className="play__icon"*/}
                {/*                        onClick={playHandle} />*/}
                {/*</span> <span style={{ display: 'inline-block', width: '10px' }} > </span>VIDEOS</p>*/}

                <div className="videos__typography" >
                    <span>WATCH MY</span>
                    {/*<span style={{ display: 'inline-block', width: '10px' }} > </span>*/}
                    <span>
                        <PlayCircleOutlined className="play__icon"
                                            onClick={playHandle} />
                    </span>
                    {/*<span style={{ display: 'inline-block', width: '10px' }} > </span>*/}
                    <span>VIDEOS</span>
                </div>
            </div>
            {
                showVideosList &&
                <div className="videosList__wrapper" >
                    <Row>
                        <Col span={7} className="videosList__items" >
                            <div className="items">
                                <a className="items__link" onClick={GRTFL} >
                                    GRTFL
                                </a>
                                <a className="items__link" onClick={Talk} >
                                    Talk T.I.N.D
                                </a>
                                <a  className="items__link" onClick={BlackMamba} >
                                    Black Mamba
                                </a>
                                <a className="items__link" onClick={MamaAfirca} >
                                    Mama Afirca
                                </a>
                                <a  className="items__link" onClick={BestBoys} >
                                    Best Boys
                                </a>

                            </div>
                        </Col>
                        <Col span={17} className="videosList__youtube" >
                            <YouTube videoId={trailerUrl} opts={opts}/>
                        </Col>

                    </Row>
                </div>
            }

        </div>
    );
};

export default Videos;
