import React from 'react';
import "./Band.css"
import {Avatar, Col, Row} from "antd";
import Logo from "./assets/img__3.jpeg";
import Grtfl from "./assets/cover__grtfl FW.jpg";
import Talk from "./assets/cover__talk.jpg";
import { AudioOutlined, FireOutlined } from "@ant-design/icons";


const Band = () => {
    return (
        <div className="bandPage__container">
            <div className="bandPage__text" >
                <h3>THE BAND</h3>
                <p>Love music!</p>
                <p>We have created a fictional band website. Lorem ipsum...</p>
            </div>

            <Row>
                <Col span={8} className="band__item" >
                    <p>Talk</p>
                    <Avatar
                        src={ Logo }
                        size={{
                            sm: 150,
                            md: 190,
                            lg: 210,
                            xl: 240,
                        }}
                        // style={{ backgroundColor : 'red' }}
                        className="band__avatar" />
                </Col>
                <Col span={8} className="band__item" >
                    <p>Black Mamba</p>
                    <Avatar src={ Grtfl }
                            size={{
                                sm: 150,
                                md: 190,
                                lg: 210,
                                xl: 240,
                            }} />
                </Col>
                <Col span={8} className="band__item" >
                    <p>Gratiful</p>
                    <Avatar
                        // src={ Logo }
                        icon={ <AudioOutlined /> }
                        size={{
                            sm: 150,
                            md: 190,
                            lg: 210,
                            xl: 240,
                        }} />
                </Col>

                {/*<Col span={8} className="band__item" >*/}
                {/*    <p>Gratiful</p>*/}
                {/*    <Avatar*/}
                {/*        // src={ Logo }*/}
                {/*        icon={ <FireOutlined /> }*/}
                {/*        size={240} />*/}
                {/*</Col>*/}
            </Row>
        </div>
    );
};

export default Band;
