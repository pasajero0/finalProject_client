import React, {Component} from 'react';
import {FaBars} from "react-icons/fa";
import NavbarIcons from './NavbarIcons'
import {NavLink} from 'react-router-dom';
import './Navbar.scss';

class Navbar extends Component {

    state = {
        menuOpened: false
    }

    toogleMenu() {
        this.setState({menuOpened: !this.state.menuOpened});
    }

    render() {
        return (
            <>
                <nav className="navbar">
                    <div className="container">
                        <div className="navbarContent">
                            <div className="navbarMenuContainer">
                                <div className={this.state.menuOpened ? 'navIcon open' : 'navIcon'} onClick={this.toogleMenu.bind(this)}>
                                  <span></span>
                                  <span></span>
                                  <span></span>
                                  <span></span>
                                </div>

                                {/*<div id='navbarMenuContent' className="navbarMenuContent" style={this.state.menuOpened ? leftPosShow : leftPosHide}>*/}
                                    {/*<ul className="navbarNav">*/}
                                        {/*<li className="navbarNav__item">*/}
                                            {/*<NavLink to="#" className='navbarNav__link'>Category1</NavLink>*/}
                                        {/*</li>*/}
                                        {/*<li className="navbarNav__item">*/}
                                            {/*<NavLink to="#" className='navbarNav__link'>Category2</NavLink>*/}
                                        {/*</li>*/}
                                        {/*<li className="navbarNav__item">*/}
                                            {/*<NavLink to="#" className='navbarNav__link'>Category3</NavLink>*/}
                                        {/*</li>*/}
                                        {/*<li className="navbarNav__item">*/}
                                            {/*<NavLink to="#" className='navbarNav__link'>Category4</NavLink>*/}
                                        {/*</li>*/}
                                        {/*<li className="navbarNav__item">*/}
                                            {/*<NavLink to="#" className='navbarNav__link'>Category5</NavLink>*/}
                                        {/*</li>*/}
                                    {/*</ul>*/}
                                {/*</div>*/}
                                <NavLink to="/" className='mainLogo__link'>
                                    <h1 className="mainLogo">Uno</h1>
                                </NavLink>
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