import React from 'react';
import PropTypes from 'prop-types';
import SlickSlider from 'react-slick';
import { NavLink } from 'react-router-dom';

import './PromoBanner.scss';

const propTypes = {
  settings: PropTypes.object
};

const defaultProps = {
  settings: {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true

  }
};

// const links = [
//   "/women/product/slim-fit-knit-herringbone-blazer-345706",
//   "/men/product/slim-fit-vintage-jeans-345692",
//   "/women-shoes/product/white-leather-plimsolls-with-black-heel-tab-345720",
//   "/women-accessories/product/two-tone-leather-wallet-345731",
//   "/women-beauty/product/evening-whispers-perfume-and-candle-pack-345760"
//       ];

const PromoBanner = ({ settings }) => (
  <section className="promoBanner">
    <div className="container">
      <div className="promoBanner">
          <SlickSlider {...settings} className="promoBanner">
            <NavLink to="/women">
              <div className="promoBanner_text">women campaign collection</div>
            </NavLink>
            <NavLink to="/men">
              <div className="promoBanner_text">men campaign collection</div>
            </NavLink>
            <NavLink to="/women-accessories">
              <div className="promoBanner_text">luxury women accessories</div>
            </NavLink>
            <NavLink to="/delivery">
              <div className="promoBanner_text">SHIPPING COSTS & DELIVERY OPTIONS</div>
            </NavLink>
            <NavLink to="/About us">
              <div className="promoBanner_text">About us</div>
            </NavLink>
          </SlickSlider>
      </div>
    </div>
  </section>
);

PromoBanner.propTypes = propTypes;
PromoBanner.defaultProps = defaultProps;

export default PromoBanner;

// {images.map(image =>
// <div key={image.id}>
// <img className="promoBanner__img" src={image.src} alt={image.alt} />