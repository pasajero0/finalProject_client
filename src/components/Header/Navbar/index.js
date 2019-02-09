import React, {Component} from 'react';
import {FaBars} from "react-icons/fa";
import NavbarIcons from './NavbarIcons'
import './Navbar.scss';

class Navbar extends Component {

    render() {
        return (
            <>
                <nav className="navbar">
                    <div className="container">
                        <div className="navbarContent">
                            <div className="navbarMenuContainer">
                                <FaBars className='burgerIcon'/>
                                <div className="navbarMenuContent">
                                    <div className='navbarMenuClose'>
                                        <div className='closeIcon'>X</div>
                                        <a href="#" className="navbarMenuLogo__link">
                                            <p className="navbarMenuLogo">Uno</p>
                                        </a>
                                    </div>
                                    <ul className="navbarNav">
                                        <li className="navbarNav__item">
                                            <a href="#" className="navbarNav__link">Category1</a>
                                        </li>
                                        <li className="navbarNav__item">
                                            <a href="#" className="navbarNav__link">Category2</a>
                                        </li>
                                        <li className="navbarNav__item">
                                            <a href="#" className="navbarNav__link">Category3</a>
                                        </li>
                                        <li className="navbarNav__item">
                                            <a href="#" className="navbarNav__link">Category4</a>
                                        </li>
                                        <li className="navbarNav__item">
                                            <a href="#" className="navbarNav__link">Category5</a>
                                        </li>
                                    </ul>
                                </div>
                            <a href="/" className="mainLogo__link">
                                <h1 className="mainLogo">Uno</h1>
                            </a>
                            </div>
                            <NavbarIcons/>
                        </div>
                    </div>
                </nav>
            </>
        )
    }
}

export default Navbar;