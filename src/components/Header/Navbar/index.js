import React, {Component} from 'react';
import {FaBars} from "react-icons/fa";
import NavbarIcons from './NavbarIcons'
import './Navbar.scss';

class Navbar extends Component {

    render() {

        const openCloseMenu = () => {
            const hamburger = document.getElementById('nav-icon');
            if (hamburger.classList.contains('open')){
                document.getElementById('navbarMenuContent').setAttribute("style", "left:-3000px");
                hamburger.classList.remove('open');
            } else {
                document.getElementById('navbarMenuContent').setAttribute("style", "left:0px");
                hamburger.className = 'open';
            }
        }

        return (
            <>
                <nav className="navbar">
                    <div className="container">
                        <div className="navbarContent">
                            <div className="navbarMenuContainer">
                                <div id="nav-icon" onClick={openCloseMenu}>
                                  <span></span>
                                  <span></span>
                                  <span></span>
                                  <span></span>
                                </div>
                                {/*<FaBars onClick={openMenu} className='burgerIcon'/>*/}
                                <div id='navbarMenuContent' className="navbarMenuContent">
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