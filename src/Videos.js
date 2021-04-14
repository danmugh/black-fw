import React from 'react';
import "./Videos.css";
import { PlayCircleOutlined } from "@ant-design/icons";
import { Row, Col } from 'antd';

const Videos = () => {

    const playHandle = () => {
        alert('Hey, now you play videos')
    }

    return (
        <div>
            <div className="videos__wrapper" >

                <p className="videos__text" >WATCH MY <span>
                    <PlayCircleOutlined className="play__icon"
                                        onClick={playHandle} />
                </span>   VIDEOS</p>
            </div>
            <div className="videosList__wrapper" >
                <Row>
                    <Col span={10} className="videosList__items" >
                        <div className="items">
                            <a className="items__link">
                                GRTFL
                            </a>
                            <a className="items__link">
                                Talk T.I.N.D
                            </a>
                            <a  className="items__link">
                                Black Mamba
                            </a>
                            <a className="items__link">
                                Mama Afirca
                            </a>
                            <a  className="items__link">
                                Best Boys
                            </a>

                        </div>
                    </Col>
                    <Col span={14} className="videosList__youtube" >

                    </Col>

                </Row>
            </div>
        </div>
    );
};

export default Videos;
