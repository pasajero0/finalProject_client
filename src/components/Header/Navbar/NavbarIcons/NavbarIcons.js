import React, {Component} from 'react';
import {FaRegUser} from 'react-icons/fa';
import {FiShoppingCart} from 'react-icons/fi';
import {NavLink} from 'react-router-dom';
import Search from '../Search/Search.js';
import './NavbarIcons.scss';

class NavbarIcons extends Component {
    render() {
        return (
            <>
                <Search/>
                <ul className="NavbarIconsMenu">
                    <li className='NavbarIconsMenu__item'>
                        <NavLink to="/login" className='NavbarIconsMenu__link'>
                            <FaRegUser className='NavbarIconsMenu__icon'/>
                        </NavLink>
                    </li>
                    <li className='NavbarIconsMenu__item'>
                        <NavLink to="#" className='NavbarIconsMenu__link'>
                            <FiShoppingCart className='NavbarIconsMenu__icon'/>
                        </NavLink>
                    </li>
                </ul>
            </>
        )
    }
}

export default NavbarIcons;