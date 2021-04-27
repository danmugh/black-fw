import React from 'react';
import "./News.css";
import {Row, Col} from 'antd';
import Fade from 'react-reveal/Fade';

import InstagramEmbed from "react-instagram-embed";
import Img from "../../assets/Smartphones-in-the-Workplace.jpeg";
import Img__2 from "../../assets/vidz__2.jpeg";

const News = () => {

    let page = (
        <Row  >

            <Col span={12} className="news__infos" >
                {/*<h2 className="title">True paradise on Earth: Kerela, India</h2>*/}

                <Fade left>
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
                                        <span className="link">Published in March</span>
                                    </p>
                                </div>
                            </div>
                        </div>


                        {/*<h2 className="title">True paradise on Earth: Kerela, India</h2>*/}
                        {/*<h2 className="title">True paradise on Earth: Kerela, India</h2>*/}

                    </div>
                </Fade>


            </Col>
            <Col span={12} className="news__ig" >
                <Fade right>
                    <div>

                        <div className="card">
                            <div className="picture">
                                <div className="inner">
                                    <div className="background">
                                        <img src={Img__2} alt="" className="thumbnail" />
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
                                            <span className="link">Published in April</span>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/*<h2 className="title">True paradise on Earth: Kerela, India</h2>*/}
                            {/*<h2 className="title">True paradise on Earth: Kerela, India</h2>*/}

                        </div>

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
                </Fade>

            </Col>

        </Row>
    )

    if ( isMobile() ) {
        page = (
            <div className="card__container" >
                <div className="card" >
                    <div className="picture">
                        <div className="inner">
                            <div className="background">
                                <img src={Img} alt="" className="thumbnail"/>
                                <div className="mask"></div>

                            </div>
                        </div>
                    </div>

                    <div className="content">
                        <div className="inner">
                            <div className="label">News #1</div>
                            <h2 className="title">Sit amet consectetur: Ipsum, Lorem</h2>
                            <h3 className="subtitle">Ut enim ad "Sed eiusmod tempor"</h3>
                            <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore
                                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                nisi ut
                                aliquip ex ea commodo consequat ...</p>
                        </div>
                        <div
                            style={{ textAlign: 'left' }}
                            className="fixed"  >
                            <div className="infos">
                                <p className="links">
                                    <span className="link">Published in March</span>
                                </p>
                            </div>
                        </div>
                    </div>


                    {/*<h2 className="title">True paradise on Earth: Kerela, India</h2>*/}
                    {/*<h2 className="title">True paradise on Earth: Kerela, India</h2>*/}

                </div>
                <br/>
                <div className="card" >
                    <div className="picture">
                        <div className="inner">
                            <div className="background">
                                <img src={Img__2} alt="" className="thumbnail"/>
                                <div className="mask"></div>

                            </div>
                        </div>
                    </div>

                    <div className="content">
                        <div className="inner">
                            <div className="label">News #1</div>
                            <h2 className="title">Sit amet consectetur: Ipsum, Lorem</h2>
                            <h3 className="subtitle">Ut enim ad "Sed eiusmod tempor"</h3>
                            <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore
                                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                nisi ut
                                aliquip ex ea commodo consequat ...</p>
                        </div>
                        <div
                            style={{ textAlign: 'left' }}
                            className="fixed"  >
                            <div className="infos">
                                <p className="links">
                                    <span className="link">Published in March</span>
                                </p>
                            </div>
                        </div>
                    </div>


                    {/*<h2 className="title">True paradise on Earth: Kerela, India</h2>*/}
                    {/*<h2 className="title">True paradise on Earth: Kerela, India</h2>*/}

                </div>

            </div>

        )
    }

    return (
        <div className="news" >

            <div className="news__text" >
                <h3>MY LATEST NEWS</h3>
                {/*<p><em>We love our fans!</em></p>*/}
                <p>Lorem ipsum dolor sit amet !</p>
                <p>consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
            </div>

            { page }

            {/*<Row  >*/}

            {/*    <Col span={12} className="news__infos" >*/}
            {/*        /!*<h2 className="title">True paradise on Earth: Kerela, India</h2>*!/*/}

            {/*        <div className="card">*/}
            {/*            <div className="picture">*/}
            {/*                <div className="inner">*/}
            {/*                    <div className="background">*/}
            {/*                        <img src={Img} alt="" className="thumbnail" />*/}
            {/*                        <div className="mask"></div>*/}

            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}

            {/*            <div className="content">*/}
            {/*                <div className="inner">*/}
            {/*                    <div className="label">News #1</div>*/}
            {/*                    <h2 className="title">Sit amet consectetur: Ipsum, Lorem</h2>*/}
            {/*                    <h3 className="subtitle">Ut enim ad "Sed eiusmod tempor"</h3>*/}
            {/*                    <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore*/}
            {/*                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut*/}
            {/*                        aliquip ex ea commodo consequat ...</p>*/}
            {/*                </div>*/}
            {/*                <div className="fixed">*/}
            {/*                    <div className="infos">*/}
            {/*                        <p className="links">*/}
            {/*                            <span className="link">Published in March</span>*/}
            {/*                        </p>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}


            {/*            /!*<h2 className="title">True paradise on Earth: Kerela, India</h2>*!/*/}
            {/*            /!*<h2 className="title">True paradise on Earth: Kerela, India</h2>*!/*/}

            {/*        </div>*/}


            {/*    </Col>*/}
            {/*    <Col span={12} className="news__ig" >*/}
            {/*        <div>*/}

            {/*            <div className="card">*/}
            {/*                <div className="picture">*/}
            {/*                    <div className="inner">*/}
            {/*                        <div className="background">*/}
            {/*                            <img src={Img} alt="" className="thumbnail" />*/}
            {/*                            <div className="mask"></div>*/}

            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                </div>*/}

            {/*                <div className="content">*/}
            {/*                    <div className="inner">*/}
            {/*                        <div className="label">News #1</div>*/}
            {/*                        <h2 className="title">Sit amet consectetur: Ipsum, Lorem</h2>*/}
            {/*                        <h3 className="subtitle">Ut enim ad "Sed eiusmod tempor"</h3>*/}
            {/*                        <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore*/}
            {/*                            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut*/}
            {/*                            aliquip ex ea commodo consequat ...</p>*/}
            {/*                    </div>*/}
            {/*                    <div className="fixed">*/}
            {/*                        <div className="infos">*/}
            {/*                            <p className="links">*/}
            {/*                                <span className="link">Published in April</span>*/}
            {/*                            </p>*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                </div>*/}

            {/*                /!*<h2 className="title">True paradise on Earth: Kerela, India</h2>*!/*/}
            {/*                /!*<h2 className="title">True paradise on Earth: Kerela, India</h2>*!/*/}

            {/*            </div>*/}

            {/*            /!*<InstagramEmbed*!/*/}
            {/*            /!*    url='https://www.instagram.com/p/COAmYTchUV1/'*!/*/}
            {/*            /!*    clientAccessToken='123|456'*!/*/}
            {/*            /!*    maxWidth={120}*!/*/}
            {/*            /!*    hideCaption={false}*!/*/}
            {/*            /!*    containerTagName='div'*!/*/}
            {/*            /!*    protocol=''*!/*/}
            {/*            /!*    injectScript*!/*/}
            {/*            /!*    onLoading={() => {}}*!/*/}
            {/*            /!*    onSuccess={() => {}}*!/*/}
            {/*            /!*    onAfterRender={() => {}}*!/*/}
            {/*            /!*    onFailure={() => {}}*!/*/}
            {/*            /! >/*/}

            {/*        </div>*/}
            {/*    </Col>*/}

            {/*</Row>*/}
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

export default News;
