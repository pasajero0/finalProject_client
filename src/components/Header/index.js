import React, {Component} from 'react';
import Navbar from './Navbar';

import './Header.scss';

class Header extends Component {

    render() {
        return (
            <header className='header'>
                <Navbar/>
            </header>
        )
    }
}

export default Header;