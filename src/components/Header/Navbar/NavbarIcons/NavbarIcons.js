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
            <ul className="NavbarIcons">
                <li className="NavbarIcons__item">
                    <NavLink to="/login" className="NavbarIcons__link">
                        <FaRegUser className="NavbarIcons__icon"/>
                    </NavLink>
                </li>
                <li className="NavbarIcons__item">
                    <NavLink to="/cart" className="NavbarIcons__link NavbarIcons__cartLink">
                        <FiShoppingBag className="NavbarIcons__icon"/>
                        <div className="productsQuantity">
                            <span className="productsQuantity__number">3</span>
                        </div>
                    </NavLink>
                </li>
            </ul>
        </>
    )
};

export default NavbarIcons;