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
    autoplaySpeed: 2000,
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
      <div className="promoBanner__content">
          <SlickSlider {...settings} className="promoBanner__slick">
            <NavLink to="/women" className="promoBanner__link">
              <div className="promoBanner__textContainer">
                <p className="promoBanner__text">
                women campaign collection
								</p>
              </div>
            </NavLink>
            <NavLink to="/men" className="promoBanner__link">
							<div className="promoBanner__textContainer">
								<p className="promoBanner__text">
									men campaign collection
								</p>
							</div>
            </NavLink>
            <NavLink to="/women-accessories" className="promoBanner__link">
							<div className="promoBanner__textContainer">
								<p className="promoBanner__text">
									luxury women accessories
								</p>
							</div>
            </NavLink>
            <NavLink to="/men-shoes" className="promoBanner__link">
							<div className="promoBanner__textContainer">
								<p className="promoBanner__text">
									luxury men shoes
								</p>
							</div>
            </NavLink>
            <NavLink to="/men-sport" className="promoBanner__link">
							<div className="promoBanner__textContainer">
								<p className="promoBanner__text">
									men sport collection
								</p>
							</div>
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