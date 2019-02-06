import React, {Component} from 'react';
import { FiShoppingCart } from "react-icons/fi";

import '../header.scss';


//создание компонента в топовом меню, справа от иконок соцсетей
class NavMenu extends Component  {
    
    render(){
        return (
        <div className="nav">
            <img className="logo" src="../logo.png" alt="UNO"/>
            <ul className="navMenu">
                <li className="navMenu__item">Home</li>
                <li className="navMenu__item">Catalogue</li>
                <li className="navMenu__item">Page</li>
                <li className="navMenu__item">Page</li>
            </ul>
            <button  className="navBasket"><FiShoppingCart/></button>
        </div>
        )
    }
}

export default NavMenu;