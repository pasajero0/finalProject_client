import React, {Component} from 'react';
import './Footer.scss'

class Footer extends Component {
    render() {
        return (
            <footer className='footer'>
                <div className='container'>
                    <div className="footerContent">
                        <a href="#" className="mainLogo__link">
                            <h2 className='mainLogo'>Uno</h2>
                        </a>
                        <ul className='footerMenu'>
                            <li className='footerMenu__item'>
                                <a className='footerMenu__link' href='#'>Category1</a>
                            </li>
                            <li className='footerMenu__item'>
                                <a className='footerMenu__link' href='#'>Category2</a>
                            </li>
                            <li className='footerMenu__item'>
                                <a className='footerMenu__link' href='#'>Category3</a>
                            </li>
                            <li className='footerMenu__item'>
                                <a className='footerMenu__link' href='#'>Category4</a>
                            </li>
                            <li className='footerMenu__item'>
                                <a className='footerMenu__link' href='#'>Category5</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        )
    };
}

export default Footer;
