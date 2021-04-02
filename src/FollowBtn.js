import React, { useState, useEffect } from 'react';
import "./FollowBtn.css";
import { MediumOutlined,
    FacebookOutlined,
    InstagramOutlined,
    TwitterOutlined,
    YoutubeOutlined } from "@ant-design/icons"

const FollowBtn = () => {
    const [open, setOpen] = useState(false)

    const boxHandler = () => {
        setOpen(!open)
    }

    return (
        <div>
            <div className="socialShare">
                <div className="socialBox pointer ">
                    <span onClick={boxHandler} >
                        <MediumOutlined />
                    </span>

                    <div className="socialGallery ">
                        <div className="socialToolBox ">
                            <a
                                style={{
                                    visibility: open ? 'visible' : 'hidden',
                                    opacity: open ? '1' : '0'
                                }}
                                className="facebook" href="#">
                                <FacebookOutlined />
                            </a>
                            <a
                                style={{
                                    visibility: open ? 'visible' : 'hidden',
                                    opacity: open ? '1' : '0'
                                }}
                                className="instagram" href="#">
                                <InstagramOutlined />
                            </a>
                            <a
                                style={{
                                    visibility: open ? 'visible' : 'hidden',
                                    opacity: open ? '1' : '0'
                                }}
                                className="twitter" href="#">
                                <TwitterOutlined />
                            </a>
                            <a
                                style={{
                                    visibility: open ? 'visible' : 'hidden',
                                    opacity: open ? '1' : '0'
                                }}
                                className="youtube" href="#">
                                <YoutubeOutlined />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FollowBtn;
