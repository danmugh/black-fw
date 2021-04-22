import React, { useState, useEffect } from 'react';
import "./Contact.css";
import { Row, Col, Input, Button } from 'antd';
import { HomeOutlined, MailOutlined, PhoneOutlined, UserOutlined, SendOutlined } from "@ant-design/icons";
import TextArea from "antd/es/input/TextArea";
import Gallery from "./Gallery";
import GallerySmallDevice from "./Gallery2";


const Contact = () => {
    const [loadings, setLoadings] = useState(false);

    const enterLoading = () => {

        setLoadings(true)
    }

    setTimeout(() => {
        setLoadings(false)
    }, 6000);

    let page = (
        <Row className="row" >
            <Col span={12} className="contact__infos" >
                {/*<h3>URBAN INFLUENCE</h3>*/}

                <div className="infos__wrapper" >
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
                </div>

            </Col>
            <Col span={12} className="contact__form" >

                <form className="form" >
                    <div className="form__text" >
                        <h4>Let's talk !</h4>
                    </div>
                    <Input
                        placeholder="Enter your name"
                        className="input"
                        // size="small"
                        // prefix={<UserOutlined />}
                    />
                    <br />
                    <br />
                    <Input
                        type="email"
                        placeholder="Enter your email"
                        className="input"
                        // prefix={<UserOutlined />}
                    />
                    <br />
                    <br />

                    <TextArea placeholder="Type your message..."
                              className="textArea"
                              maxLength={200}
                              rows={4}
                        // bordered={false}
                              allowClear
                    />

                    {/*<textarea*/}
                    {/*    className="textArea"*/}
                    {/*    placeholder="Type your message..."*/}
                    {/*    rows="4"*/}
                    {/*/>*/}

                    <br />
                    <br />
                    <Button
                        className="submitBtn"
                        loading={loadings}
                        icon={<SendOutlined />}
                        onClick={enterLoading}>
                        Drop it
                    </Button>

                </form>

            </Col>

        </Row>
    )

    if ( isMobile() ) {
        page = (
            <div>
                <div className="contact__infos" >
                    <div className="infos__wrapper" >
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
                    </div>
                </div>
                <div className="contact__form" >
                    <form className="form" >
                        <div className="form__text" >
                            <h4>Let's talk !</h4>
                        </div>
                        <Input
                            placeholder="Enter your name"
                            className="input"
                            // size="small"
                            // prefix={<UserOutlined />}
                        />
                        <br />
                        <br />
                        <Input
                            type="email"
                            placeholder="Enter your email"
                            className="input"
                            // prefix={<UserOutlined />}
                        />
                        <br />
                        <br />

                        <TextArea placeholder="Type your message..."
                                  className="textArea"
                                  maxLength={200}
                                  rows={4}
                            // bordered={false}
                                  allowClear
                        />

                        {/*<textarea*/}
                        {/*    className="textArea"*/}
                        {/*    placeholder="Type your message..."*/}
                        {/*    rows="4"*/}
                        {/*/>*/}

                        <br />
                        <br />
                        <Button
                            className="submitBtn"
                            loading={loadings}
                            icon={<SendOutlined />}
                            onClick={enterLoading}>
                            Drop it
                        </Button>

                    </form>
                </div>
            </div>
        )
    }

    return (
        <div className="contact__container" >

            <div className="contact__text" >
                <h3>CONTACT US</h3>
                {/*<p><em>We love our fans!</em></p>*/}
                <p>We love our fans!</p>
                <p>Drop a note</p>
            </div>

            { page }

            {/*<Row className="row" >*/}
            {/*    <Col span={12} className="contact__infos" >*/}
            {/*        /!*<h3>URBAN INFLUENCE</h3>*!/*/}

            {/*        <div className="infos__wrapper" >*/}
            {/*            <div className="contactBox" >*/}
            {/*            <span className="icon">*/}
            {/*               <HomeOutlined />*/}
            {/*            </span>*/}
            {/*                <div className="text" >*/}
            {/*                    <h4>Address</h4>*/}
            {/*                    <p>Nadiope Lane 7</p>*/}
            {/*                    <p>Nakkawa, Kampala</p>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*            <div className="contactBox" >*/}
            {/*            <span className="icon">*/}
            {/*               <PhoneOutlined />*/}
            {/*            </span>*/}
            {/*                <div className="text" >*/}
            {/*                    <h4>Phone</h4>*/}
            {/*                    <p>+243 992 008 205</p>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*            <div className="contactBox" >*/}
            {/*            <span className="icon">*/}
            {/*               <MailOutlined />*/}
            {/*            </span>*/}
            {/*                <div className="text" >*/}
            {/*                    <h4>Email</h4>*/}
            {/*                    <p>booking@black-fw.com</p>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}

            {/*    </Col>*/}
            {/*    <Col span={12} className="contact__form" >*/}

            {/*        <form className="form" >*/}
            {/*            <div className="form__text" >*/}
            {/*                <h4>Let's talk !</h4>*/}
            {/*            </div>*/}
            {/*            <Input*/}
            {/*                placeholder="Enter your name"*/}
            {/*                className="input"*/}
            {/*                // size="small"*/}
            {/*                // prefix={<UserOutlined />}*/}
            {/*            />*/}
            {/*            <br />*/}
            {/*            <br />*/}
            {/*            <Input*/}
            {/*                type="email"*/}
            {/*                placeholder="Enter your email"*/}
            {/*                className="input"*/}
            {/*                // prefix={<UserOutlined />}*/}
            {/*            />*/}
            {/*            <br />*/}
            {/*            <br />*/}

            {/*            <TextArea placeholder="Type your message..."*/}
            {/*                      className="textArea"*/}
            {/*                      maxLength={200}*/}
            {/*                      rows={4}*/}
            {/*                      // bordered={false}*/}
            {/*                      allowClear*/}
            {/*            />*/}

            {/*            <br />*/}
            {/*            <br />*/}
            {/*            <Button*/}
            {/*                    className="submitBtn"*/}
            {/*                    loading={loadings}*/}
            {/*                    icon={<SendOutlined />}*/}
            {/*                    onClick={enterLoading}>*/}
            {/*                Drop it*/}
            {/*            </Button>*/}

            {/*        </form>*/}

            {/*    </Col>*/}

            {/*</Row>*/}

            {/*<div>*/}
            {/*    <div className="contact__infos" >*/}
            {/*        <div className="infos__wrapper" >*/}
            {/*            <div className="contactBox" >*/}
            {/*            <span className="icon">*/}
            {/*               <HomeOutlined />*/}
            {/*            </span>*/}
            {/*                <div className="text" >*/}
            {/*                    <h4>Address</h4>*/}
            {/*                    <p>Nadiope Lane 7</p>*/}
            {/*                    <p>Nakkawa, Kampala</p>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*            <div className="contactBox" >*/}
            {/*            <span className="icon">*/}
            {/*               <PhoneOutlined />*/}
            {/*            </span>*/}
            {/*                <div className="text" >*/}
            {/*                    <h4>Phone</h4>*/}
            {/*                    <p>+243 992 008 205</p>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*            <div className="contactBox" >*/}
            {/*            <span className="icon">*/}
            {/*               <MailOutlined />*/}
            {/*            </span>*/}
            {/*                <div className="text" >*/}
            {/*                    <h4>Email</h4>*/}
            {/*                    <p>booking@black-fw.com</p>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <div className="contact__form" >*/}
            {/*        <form className="form" >*/}
            {/*            <div className="form__text" >*/}
            {/*                <h4>Let's talk !</h4>*/}
            {/*            </div>*/}
            {/*            <Input*/}
            {/*                placeholder="Enter your name"*/}
            {/*                className="input"*/}
            {/*                // size="small"*/}
            {/*                // prefix={<UserOutlined />}*/}
            {/*            />*/}
            {/*            <br />*/}
            {/*            <br />*/}
            {/*            <Input*/}
            {/*                type="email"*/}
            {/*                placeholder="Enter your email"*/}
            {/*                className="input"*/}
            {/*                // prefix={<UserOutlined />}*/}
            {/*            />*/}
            {/*            <br />*/}
            {/*            <br />*/}

            {/*            <TextArea placeholder="Type your message..."*/}
            {/*                      className="textArea"*/}
            {/*                      maxLength={200}*/}
            {/*                      rows={4}*/}
            {/*                // bordered={false}*/}
            {/*                      allowClear*/}
            {/*            />*/}

            {/*            <br />*/}
            {/*            <br />*/}
            {/*            <Button*/}
            {/*                className="submitBtn"*/}
            {/*                loading={loadings}*/}
            {/*                icon={<SendOutlined />}*/}
            {/*                onClick={enterLoading}>*/}
            {/*                Drop it*/}
            {/*            </Button>*/}

            {/*        </form>*/}
            {/*    </div>*/}
            {/*</div>*/}


        </div>
    );
};

function isMobile() {
    const toMatch = [
        /Android/i,
        /webOS/i,
        /iPhone/i,
        // /iPad/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i
    ];

    return toMatch.some((toMatchItem) => {
        return navigator.userAgent.match(toMatchItem);
    });
}

export default Contact;