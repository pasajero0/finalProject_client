import React, {Component} from 'react';
import NavbarIcons from './NavbarIcons';
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

        let navbarMenuContentStyle = {left: '-3000px'}

        let boxClass = ['navIcon'];

        if(this.state.menuOpened) {
            boxClass.push('open');
            navbarMenuContentStyle = {left: '0'}
        }

        return (
            <>
                <nav className="navbar">
                    <div className="container">
                        <div className="navbarContent">
                            <div className="navbarMenuContainer">
                                <div className={boxClass.join(' ')} onClick={this.toogleMenu.bind(this)}> 
                                  <span></span>
                                  <span></span>
                                  <span></span>
                                  <span></span>
                                </div>
                                <div id='navbarMenuContent' className="navbarMenuContent" style={navbarMenuContentStyle}>
                                    <ul className="navbarNav">
                                        <li className="navbarNav__item">
                                            <NavLink to="#" className='navbarNav__link'>Category1</NavLink>
                                        </li>
                                        <li className="navbarNav__item">
                                            <NavLink to="#" className='navbarNav__link'>Category2</NavLink>
                                        </li>
                                        <li className="navbarNav__item">
                                            <NavLink to="#" className='navbarNav__link'>Category3</NavLink>
                                        </li>
                                        <li className="navbarNav__item">
                                            <NavLink to="#" className='navbarNav__link'>Category4</NavLink>
                                        </li>
                                        <li className="navbarNav__item">
                                            <NavLink to="#" className='navbarNav__link'>Category5</NavLink>
                                        </li>
                                    </ul>
                                </div>
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