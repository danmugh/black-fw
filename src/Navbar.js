import React from 'react';
import "./Navbar.css"
import { BrowserRouter as Router, Link } from "react-router-dom";
import { menuData } from "./menuData";
import { MenuFoldOutlined } from "@ant-design/icons";


const Navbar = () => {

    return (
        <nav className="nav">
            <div className="logo">
                <Router>
                    <Link to="#" className="navLink" >
                        Logo
                    </Link>
                </Router>
            </div>

            <MenuFoldOutlined className="menu__bars" style={{ fontSize: '30px' }} />

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

            </div>

        </nav>
    );
};

export default Navbar;
