import React from 'react';
import { FaTwitter, FaFacebookF, FaGooglePlusG, FaPinterestP } from 'react-icons/fa';
import './SocMedia.scss';


const SocMedia = () => {
  return (
    <div className="socMedia">
      <a href="https://twitter.com" target="a_blank" title="twitter" className="socMedia__icon">
        <FaTwitter />
      </a>
      <a href="https://facebook.com" target="a_blank" title="facebook" className="socMedia__icon">
        <FaFacebookF />
      </a>
      <a href="https://google.com" target="a_blank" title="google+" className="socMedia__icon">
        <FaGooglePlusG />
      </a>
      <a href="https://pinterest.com" target="a_blank" title="pinterest" className="socMedia__icon">
        <FaPinterestP />
      </a>
    </div>
  );
};

export default SocMedia;