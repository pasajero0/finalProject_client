import React from 'react';
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import SocMedia from '../SocMedia/SocMedia';
import Map from './FooterMap/FooterMap';
import './FooterContacts.scss';

const FooterContacts = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer__content">
            <div className="footer__map"><Map/></div>
            <div className="footer__contacts">
              <p className="footer__logo">
              </p>
              <p className="footer__address">
                69-25 Harrison Str<br />
                New York, NY 100-13
              </p>

              <p className="footer__phone">
                <a className="phone__link" href="tel:1(212)1234567">
                  <FaPhone />
                  <span>1 (212) 123 45 67</span>
                </a>
              </p>

              <p className="footer__email">
                <a className="email__link" href="mailto:welcome@unostore.com">
                  <FaEnvelope />
                  <span>welcome@unostore.com</span>
                </a>
              </p>
              <SocMedia />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterContacts;
