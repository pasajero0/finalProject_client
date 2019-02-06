import React, {Component} from 'react';
import SocMedia from './SocMedia/socMedia.js';
import TopMenu from './TopMenu/topMenu.js';
import NavMenu from './NavMenu/navMenu.js';

import './header.scss';


class Header extends Component  {
    
    render(){
        return (
            <div>
                <div className="topMenu">
                     <SocMedia/>
                     <TopMenu/>
                </div>
                <NavMenu/>
            </div>
           
        )
    }
}

export default Header;