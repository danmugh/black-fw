import React from 'react';
import "./SocialMedia.css";
import { MediumOutlined,
    FacebookOutlined,
    InstagramOutlined,
    TwitterOutlined,
    MailOutlined,
    YoutubeOutlined } from "@ant-design/icons"

const SocialMedia = () => {

    return (
        <div>

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
