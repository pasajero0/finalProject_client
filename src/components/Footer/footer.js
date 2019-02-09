import React, { Component } from 'react';
import './footer.scss'

class Footer extends Component {
    render() {
        return (

            <footer className="footer">

                <div className="container">

                    <p className="footerLogo">UNO</p>

                    <ul className = "footerMenu">
                        <li className = "footerMenu__item"><a className = "footerMenu__link" href="/">Home</a></li>
                        <li className = "footerMenu__item"><a className = "footerMenu__link" href="/product">Product</a></li>
                        <li className = "footerMenu__item"><a className = "footerMenu__link" href="/history">History</a></li>
                        <li className = "footerMenu__item"><a className = "footerMenu__link" href="/showroom">Showroom</a></li>
                        <li className = "footerMenu__item"><a className = "footerMenu__link" href="/contact">Contact</a></li>
                    < /ul>

                </div>
            </footer>
        )
    };
};

export default Footer;

