import React, { useState, useEffect } from 'react';
import "./Navbar.css"
import { BrowserRouter as Router, Link } from "react-router-dom";
import { menuData } from "./menuData";
import { MenuFoldOutlined, CloseOutlined } from "@ant-design/icons";
import Logo from "../../assets/Police BLACK FW.png"
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
                        // display: `${menu ? 'none' : 'block' }`,
                        color: 'white' }} />

            {/*<div> </div>*/}

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
                    <div className='nav-menu-items'  >
                        <div className='navbar-toggle'>
                            <a href="#">

                                <CloseOutlined
                                    onClick={handleMenu}
                                    className='close-icon'
                                    style={{ color: 'white', fontSize: '35px'}} />
                            </a>
                        </div>

                        <div className="nav-list" >
                            <ul>
                                <li><a href="#hero" data-after="Home">Home</a></li>
                                <li><a href="#about" data-after="About">About</a></li>
                                <li><a href="#band" data-after="Band">Band</a></li>
                                <li><a href="#lyrics" data-after="Lyrics">Lyrics</a></li>
                                <li><a href="#image" data-after="Image">Image</a></li>
                                <li><a href="#gallery" data-after="Gallery">Gallery</a></li>
                                <li><a href="#contact" data-after="Contact">Contact</a></li>
                            </ul>
                        </div>

                    </div>
                </nav>
            </div>

        </nav>
    );
};

// <div className="nav-list">
//     <ul>
//
//         <Router>
//             <li>
//                 <Link to="#hero"
//                       key="01"
//                       data-after="Home"
//                       className="navLink">
//                     Home
//                 </Link>
//                 {/*<a href="#hero" data-after="Home">Home</a>*/}
//             </li>
//             <li>
//                 <Link to=""
//                       key="02"
//                       data-after="About"
//                       className="navLink">
//                     About us
//                 </Link>
//             </li>
//             <li>
//                 <Link to=""
//                       key="03"
//                       data-after="Band"
//                       className="navLink">
//                     Band
//                 </Link>
//             </li>
//             <li>
//                 <Link to=""
//                       key="04"
//                       data-after="Gallery"
//                       className="navLink">
//                     Gallery
//                 </Link>
//             </li>
//             <li>
//                 <Link to=""
//                       key="05"
//                       data-after="Videos"
//                       className="navLink">
//                     Videos
//                 </Link>
//             </li>
//         </Router>
//
//     </ul>
// </div>

export default Navbar;
