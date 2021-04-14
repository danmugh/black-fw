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
                        <div className="list" >
                            <ol>
                                <li><a >Formget Online Form Builder Create Online Forms</a></li>
                                <li><a >Formget Online Form Builder Create Online Forms</a></li>
                                <li><a >Formget Online Form Builder Create Online Forms</a></li>
                            </ol>
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
