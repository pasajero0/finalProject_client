import React from 'react';
import './Footer.scss'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='container'>
                <div className="footerContent">
                    <a href="#" className="mainLogo__link">
                        <h2 className='mainLogo'>Uno</h2>
                    </a>
                    <a className="phone" href="tel:1(212)1234567">1 (212) 123 45 67</a>
                    <a className="email" href="mailto:welcome@unostore.com">welcome@unostore.com</a>
                    {/*<ul className='footerMenu'>
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
                    </ul>*/}
                </div>
            </div>
        </footer>
    )
};

export default Footer;
