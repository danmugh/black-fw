import React from 'react';
import "./News.css";
import {Row, Col} from 'antd';
import InstagramEmbed from "react-instagram-embed";
import Img from "./assets/Smartphones-in-the-Workplace.jpeg"

const News = () => {
    return (
        <div className="news" >

            <div className="news__text" >
                <h3>MY LATEST NEWS</h3>
                {/*<p><em>We love our fans!</em></p>*/}
                <p>Lorem ipsum dolor sit amet !</p>
                <p>consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
            </div>

            <Row  >

                <Col span={12} className="news__infos" >
                    {/*<h2 className="title">True paradise on Earth: Kerela, India</h2>*/}

                    <div className="card">
                        <div className="picture">
                            <div className="inner">
                                <div className="background">
                                    <img src={Img} alt="" className="thumbnail" />
                                    <div className="mask"></div>

                                </div>
                            </div>
                        </div>

                        <div className="content">
                            <div className="inner">
                                <div className="label">News #1</div>
                                <h2 className="title">Sit amet consectetur: Ipsum, Lorem</h2>
                                <h3 className="subtitle">Ut enim ad "Sed eiusmod tempor"</h3>
                                <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat ...</p>
                            </div>
                            <div className="fixed">
                                <div className="infos">
                                    <p className="links">
                                        <span className="link">6 min. read</span>
                                        <span className="link">39 comments</span>
                                    </p>
                                </div>
                            </div>
                        </div>


                        {/*<h2 className="title">True paradise on Earth: Kerela, India</h2>*/}
                        {/*<h2 className="title">True paradise on Earth: Kerela, India</h2>*/}

                    </div>


                </Col>
                <Col span={12} className="news__ig" >
                    <div>

                        <div className="card">
                            <div className="picture">
                                <div className="inner">
                                    <div className="background">
                                        <img src={Img} alt="" className="thumbnail" />
                                        <div className="mask"></div>

                                    </div>
                                </div>
                            </div>

                            <div className="content">
                                <div className="inner">
                                    <div className="label">News #1</div>
                                    <h2 className="title">Sit amet consectetur: Ipsum, Lorem</h2>
                                    <h3 className="subtitle">Ut enim ad "Sed eiusmod tempor"</h3>
                                    <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo consequat ...</p>
                                </div>
                                <div className="fixed">
                                    <div className="infos">
                                        <p className="links">
                                            <span className="link">6 min. read</span>
                                            <span className="link">39 comments</span>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/*<h2 className="title">True paradise on Earth: Kerela, India</h2>*/}
                            {/*<h2 className="title">True paradise on Earth: Kerela, India</h2>*/}

                        </div>

                        {/*https://www.instagram.com/p/CNLJNAhB-Ui/?utm_source=ig_web_copy_link*/}
                        {/*<InstagramEmbed*/}
                        {/*    clientAccessToken='<appId>|<clientToken>'*/}
                        {/*    url='https://instagr.am/p/Ytlfl/'*/}
                        {/*    maxWidth={350}*/}
                        {/*    hideCaption={false}*/}
                        {/*    containerTagName='div'*/}
                        {/*    injectScript*/}
                        {/*    protocol=''*/}
                        {/*    onLoading={() => {}}*/}
                        {/*    onSuccess={() => {}}*/}
                        {/*    onAfterRender={() => {}}*/}
                        {/*    onFailure={() => {}}*/}
                        {/*/>*/}

                        {/*<InstagramEmbed*/}
                        {/*    url='https://www.instagram.com/p/COAmYTchUV1/'*/}
                        {/*    clientAccessToken='123|456'*/}
                        {/*    maxWidth={120}*/}
                        {/*    hideCaption={false}*/}
                        {/*    containerTagName='div'*/}
                        {/*    protocol=''*/}
                        {/*    injectScript*/}
                        {/*    onLoading={() => {}}*/}
                        {/*    onSuccess={() => {}}*/}
                        {/*    onAfterRender={() => {}}*/}
                        {/*    onFailure={() => {}}*/}
                        {/*/>*/}

                    </div>
                </Col>

            </Row>
        </div>
    );
};

export default News;
