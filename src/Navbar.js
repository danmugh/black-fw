import React, { useState, useEffect } from 'react';
import "./Navbar.css"
import { BrowserRouter as Router, Link } from "react-router-dom";
import { menuData } from "./menuData";
import { MenuFoldOutlined, CloseOutlined } from "@ant-design/icons";
import Logo from "./assets/Police BLACK FW.png"
import { Button } from 'antd';


const Navbar = () => {

    const [show, handleShow] = useState(false);
    const [menu, setMenu] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                handleShow(true)
            } else handleShow(false)
        });
        // return () => {
        //     window.addEventListener('scroll')
        // }
    }, [])

    const handleMenu = () => {
        setMenu(!menu)
    };


    return (
        <nav className={`nav ${show && 'nav__black'}`} >
            <div className="logo" style={{ display: `${menu ? 'none' : 'block' }`  }} >
                <Router>
                    <Link to="#" className="navLink" >
                        {/*Logo*/}
                        <img className="black__police" src={ Logo } />
                    </Link>
                </Router>
            </div>

            <MenuFoldOutlined
                className="menu__bars"
                onClick={ handleMenu }
                style={{ fontSize: '30px',
                        color: 'white',
                        display: `${menu ? 'none' : 'block' }` }} />

            {/*<div></div>*/}

            <div className="navMenu" >
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

            <div>
                <nav className={menu ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-items'  >
                        <li className='navbar-toggle'>
                            <a href="#">

                                <CloseOutlined
                                    onClick={handleMenu}
                                    className='close-icon'
                                    style={{ color: 'white', fontSize: '35px'}} />
                            </a>
                        </li>


                    </ul>
                </nav>
            </div>

        </nav>
    );
};

export default Navbar;
