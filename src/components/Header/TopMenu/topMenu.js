import React, {Component} from 'react';
import { FaRegHeart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";

import '../header.scss';


//создание компонента в топовом меню, справа от иконок соцсетей
class TopMenu extends Component  {
    render(){
        return (
           <ul className="topPanelMenu">
                <li><FaRegEnvelope className="topPanelMenu__icon"/><a href="mailto:Sayhello@unostore.com">Sayhello@unostore.com</a></li>
                <li><FaRegUser className="topPanelMenu__icon"/><button>Login</button></li>
                <li><FaRegHeart className="topPanelMenu__icon"/><button>Wishlist</button></li>
                <li><FaSearch className="topPanelMenu__icon"/><input type="search" name="search" placeholder="Search"/></li>
           </ul>
        )
    }
}

export default TopMenu;