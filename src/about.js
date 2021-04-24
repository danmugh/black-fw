import React from 'react';
import { Row, Col } from 'antd';
import "./about.css";

const About = () => {
    return (
        <div className="aboutPage__container" >
            <Row>
                <Col span={16} className="biography" >
                    <h3>WHO IS BLACK FW</h3>
                    <p><strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore
                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                        ut
                        aliquip ex ea commodo consequat.</strong></p>
                    <p><strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat.</strong>
                    </p>

                </Col>
                <Col span={8} className="profile" >
                    {/*<div className="" />*/}
                </Col>

            </Row>
        </div>
    );
};

export default About;
