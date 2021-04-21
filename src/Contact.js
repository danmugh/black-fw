import React, { useState, useEffect } from 'react';
import "./Contact.css";
import { Row, Col } from 'antd';
import { Input } from 'antd';
import { HomeOutlined, MailOutlined, PhoneOutlined, UserOutlined } from "@ant-design/icons";


const Contact = () => {
    

    return (
        <div className="contact__container" >

            <div className="contact__text" >
                <h3>CONTACT US</h3>
                {/*<p><em>We love our fans!</em></p>*/}
                <p>We love our fans!</p>
                <p>Drop a note</p>
            </div>
            <Row>
                <Col span={10} className="contact__infos" >
                    {/*<h3>URBAN INFLUENCE</h3>*/}

                    <div className="contactBox" >
                        <span className="icon">
                           <HomeOutlined />
                        </span>
                        <div className="text" >
                            <h4>Address</h4>
                            <p>Nadiope Lane 7</p>
                            <p>Nakkawa, Kampala</p>
                        </div>
                    </div>
                    <div className="contactBox" >
                        <span className="icon">
                           <PhoneOutlined />
                        </span>
                        <div className="text" >
                            <h4>Phone</h4>
                            <p>+243 992 008 205</p>
                        </div>
                    </div>
                    <div className="contactBox" >
                        <span className="icon">
                           <MailOutlined />
                        </span>
                        <div className="text" >
                            <h4>Email</h4>
                            <p>booking@black-fw.com</p>
                        </div>
                    </div>

                </Col>
                <Col span={14} className="contact__form" >
                    {/*<h3>WHO IS BLACK FW</h3>*/}
                    {/*<p><strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut*/}
                    {/*    labore*/}
                    {/*    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi*/}
                    {/*    ut*/}
                    {/*    aliquip ex ea commodo consequat.</strong></p>*/}
                    {/*<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore*/}
                    {/*    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut*/}
                    {/*    aliquip ex ea commodo consequat.*/}
                    {/*</p>*/}

                    <form className="form" >
                        <Input
                            placeholder="Enter your name"
                            className="input"
                            // size="small"
                            prefix={<UserOutlined />}
                        />
                        <br />
                        <br />
                        <Input
                            placeholder="Enter your email"
                            className="input"
                            // size="small"
                            prefix={<UserOutlined />}
                        />
                        <br />
                        <br />
                        <Input
                            placeholder="Type your message"
                            className="input"
                            // size="small"
                            prefix={<UserOutlined />}
                        />
                    </form>

                </Col>

            </Row>

            {/*<section className="contact" >*/}
            {/*    <div className="content" >*/}
            {/*        <h2>*/}
            {/*            Contact Us*/}
            {/*        </h2>*/}
            {/*        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>*/}
            {/*    */}
            {/*    </div>*/}

            {/*    <div className="container" >*/}
            {/*        <div className="contactInfo">*/}
            {/*            <div className="box">*/}
            {/*                <div className="icon">*/}
            {/*                    <AudioOutlined />*/}
            {/*                </div>*/}
            {/*                <div className="text">*/}
            {/*                    <h3>Address</h3>*/}
            {/*                    <p>Nadiope Lane 7,</p>*/}
            {/*                    <p>Nakkawa, Kampala,</p> */}
            {/*                    <p>556670</p>*/}
            {/*                    /!* <p>Nadiope Lane 7, <br>Nakkawa, Kampala, </br>556670</p> *!/*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*            <div className="box">*/}
            {/*                <div className="icon">*/}
            {/*                    <AudioOutlined />*/}
            {/*                </div>*/}
            {/*                <div className="text">*/}
            {/*                    <h3>Phone</h3>*/}
            {/*                    <p>+243 992 008 205</p>*/}
            {/*                </div>*/}

            {/*            </div>*/}
            {/*            <div className="box">*/}
            {/*                <div className="icon">*/}
            {/*                    <FireOutlined />*/}
            {/*                </div>*/}
            {/*                <div className="text">*/}
            {/*                    <h3>Email</h3>*/}
            {/*                    <p>danmmwx@gmail.com</p>*/}
            {/*                </div>*/}
            {/*                */}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <div className="contactForm">*/}
            {/*            /!* <form>*/}
            {/*                <img src="https://images.pexels.com/photos/531844/pexels-photo-531844.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />*/}
            {/*            </form> *!/*/}
            {/*        </div>*/}
            {/*    */}
            {/*    </div>*/}
            {/*</section>*/}

        </div>
    );
};

export default Contact;