import React, { useState, useEffect } from 'react';
import "./SocialMedia.css";
import { MediumOutlined,
    FacebookOutlined,
    InstagramOutlined,
    TwitterOutlined,
    MailOutlined,
    YoutubeOutlined } from "@ant-design/icons"

const SocialMedia = () => {

    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                handleShow(true)
            } else handleShow(false)
        });
    }, [])

    return (
        <div className={`${!show && 'hide_icon'}`} >

            <a
                className='button ctrlBtn'
                // href='#'
                tabIndex='1'>
                <MediumOutlined />
            </a>

            {/*<div className='button ctrlBtn' tabIndex='1' >*/}
            {/*    <p className="follow-me">Follow me</p>*/}
            {/*</div>*/}

            <ul className='tip ctrl'>
                <li className='slice facebook__icon'>
                    <div>
                        <FacebookOutlined  />
                    </div>
                </li>
                <li className='slice'>
                    <div>
                        <InstagramOutlined />
                    </div>
                </li>
                <li className='slice'>
                    <div>
                        <TwitterOutlined />
                    </div>
                </li>
                <li className='slice'>
                    <div>
                        <YoutubeOutlined />
                    </div>
                </li>
                <li className='slice'>
                    <div>
                        <MailOutlined />
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default SocialMedia;
