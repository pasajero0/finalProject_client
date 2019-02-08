import React, {Component} from 'react';
import './Footer.scss'

export default class Footer extends Component {
    render() {
        return (
            <footer className='footer'>
                <div className='container'>
                    <p className='mainLogo'>Uno</p>
                    <ul className='footerMenu'>
                        <li className='footerMenu__item'>
                            <a className='footerMenu__link' href='#'>Home</a>
                        </li>
                        <li className='footerMenu__item'>
                            <a className='footerMenu__link' href='#'>Product</a>
                        </li>
                        <li className='footerMenu__item'>
                            <a className='footerMenu__link' href='#'>History</a>
                        </li>
                        <li className='footerMenu__item'>
                            <a className='footerMenu__link' href='#'>Showroom</a>
                        </li>
                        <li className='footerMenu__item'>
                            <a className='footerMenu__link' href='#'>Contact</a>
                        </li>
                    </ul>
                </div>
            </footer>
        )
    };
};

