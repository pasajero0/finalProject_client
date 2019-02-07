import React, { Component } from 'react';
import './footer.scss'

export default class Footer extends Component {
    render() {
        return (

        <footer className="footer">

            <div className="container">

                <p className="footerLogo">UNO< /p>

                <ul className = "footerMenu">
                    <li className = "footerMenu__item"><a className = "footerMenu__link" href="/">Home</a></li>
                    <li className = "footerMenu__item"><a className = "footerMenu__link" href="/product">Product</a></li>
                    <li className = "footerMenu__item"><a className = "footerMenu__link" href="/history">History</a></li>
                    <li className = "footerMenu__item"><a className = "footerMenu__link" href="/showroom">Showroom</a></li>
                    <li className = "footerMenu__item"><a className = "footerMenu__link" href="/contact">Contact</a></li>
                < /ul>

            < /div>
        < /footer>
        )
    };
};



//            <ul className="footer__socialIcons">
//                <li className = "footer__socialIcons__item"><a href="#"><i class="fab fa-twitter"></i></a></li>
//                <li className = "footer__socialIcons__item"><a href="#"><i class="fab fa-facebook-f"></i></a></li>
//                <li className = "footer__socialIcons__item"><a href="#"><i class="fab fa-google-plus-g"></i></a></li>
//                <li className = "footer__socialIcons__item"><a href="#"><i class="fab fa-pinterest-p"></i></a></li>
//                <li className = "footer__socialIcons__item"><a href="#"><i class="fas fa-wifi"></i></a></li>
//
//            < /ul>
