import React, {Component} from 'react';
import {FaSearch} from 'react-icons/fa';
import {FaRegUser} from 'react-icons/fa';
import {FiShoppingCart} from 'react-icons/fi';
import './NavbarIcons.scss';

class NavbarIcons extends Component {
    render() {
        return (
            <>
                <ul className='NavbarIconsMenu'>
                    <li className='NavbarIconsMenu__item'>
                        <input className='NavbarIconsMenu__search' type='search' name='search' placeholder='Search'/>
                        <a href='#' className='NavbarIconsMenu__link'>
                            <FaSearch className='NavbarIconsMenu__icon'/>
                        </a>
                    </li>
                    <li className='NavbarIconsMenu__item'>
                        <a href='/login' className='NavbarIconsMenu__link'>
                            <FaRegUser className='NavbarIconsMenu__icon'/>
                        </a>
                    </li>
                    <li className='NavbarIconsMenu__item'>
                        <a href='#' className='NavbarIconsMenu__link'>
                            <FiShoppingCart className='NavbarIconsMenu__icon'/>
                        </a>
                    </li>
                </ul>
            </>
        )
    }
}

export default NavbarIcons;