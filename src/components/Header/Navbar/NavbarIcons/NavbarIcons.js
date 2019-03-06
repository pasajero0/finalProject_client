import React from 'react';
import { FaRegUser } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import AddProductToCartIcon from '../../../AddProductToCartIcon/AddProductToCartIcon';
// import {FiShoppingBag} from 'react-icons/fi';
import Search from '../Search/Search';

import './NavbarIcons.scss';

const NavbarIcons = () => {
    return (
        <>
            <Search/>
            <ul className="navbarIcons">
                <li className="navbarIcons__item">
                    <NavLink to="/login" className="navbarIcons__link">
                        <FaRegUser className="navbarIcons__icon"/>
                    </NavLink>
                </li>
                <li className="navbarIcons__item">
                    <NavLink to="/cart" className="navbarIcons__link navbarIcons__cartLink">
                        <AddProductToCartIcon className="navbarIcons__icon addProductToCartIcon"/>
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