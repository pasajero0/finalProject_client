import React from 'react';
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import SocMedia from '../SocMedia/SocMedia';
import Map from './FooterMap/FooterMap';
import './FooterContacts.scss';

const FooterContacts = () => {
  return (
    <>
      <footer className="footerContacts">
        <div className="container">
          <div className="footerContacts__content">
            <div className="footerContacts__map">
              <Map />
            </div>
            <div className="footerContacts__contacts">
              <p className="footerContacts__logo">
              </p>
              <p className="footerContacts__address">
                69-25 Harrison Str<br />
                New York, NY 100-13
              </p>

              <p className="footerContacts__phone">
                <a className="footerContacts__phoneLink" href="tel:1(212)1234567">
                  <FaPhone />
                  <span>1 (212) 123 45 67</span>
                </a>
              </p>

              <p className="footerContacts__email">
                <a className="footerContacts__emailLink" href="mailto:welcome@unostore.com">
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
