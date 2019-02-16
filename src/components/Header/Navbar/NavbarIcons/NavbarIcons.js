import React, {Component} from 'react';
import {FaRegUser} from 'react-icons/fa';
import {FiShoppingBag} from 'react-icons/fi';
import {NavLink} from 'react-router-dom';
import Search from '../Search/Search.js';
import './NavbarIcons.scss';

const NavbarIcons = () => {
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
                        <FiShoppingBag className='NavbarIconsMenu__icon'/>
                    </NavLink>
                </li>
            </ul>
        </>
    )
};

export default NavbarIcons;