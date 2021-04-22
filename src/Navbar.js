import React, { useState, useEffect } from 'react';
import "./Navbar.css"
import { BrowserRouter as Router, Link } from "react-router-dom";
import { menuData } from "./menuData";
import { MenuFoldOutlined } from "@ant-design/icons";
import Logo from "./assets/Police BLACK FW.png"
import { Button } from 'antd';


const Navbar = () => {

    const [show, handleShow] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 160) {
                handleShow(true)
            } else handleShow(false)
        });
        // return () => {
        //     window.addEventListener('scroll')
        // }
    }, [])

    return (
        <nav className={`nav ${show && 'nav__black'}`} >
            <div className="logo" >
                <Router>
                    <Link to="#" className="navLink" >
                        {/*Logo*/}
                        <img className="black__police" src={ Logo } />
                    </Link>
                </Router>
            </div>

            <MenuFoldOutlined className="menu__bars" style={{ fontSize: '30px', color: 'white' }} />

            {/*<div></div>*/}

            <div className="navMenu">
                {menuData.map((item, index) => (
                    <Router>
                        <Link to={item.link} key={index} className="navLink" >
                            {item.title}
                        </Link>
                    </Router>
                ))}
            </div>

            <div className="navBtn" >
                <Button
                    // shape="round"
                    className="navBtn__item" >Contact </Button>
            </div>

        </nav>
    );
};

export default Navbar;
