import React from 'react';
import PropTypes from 'prop-types';
import SlickSlider from 'react-slick';
import { NavLink } from 'react-router-dom';

import './Slider.scss';

const propTypes = {
  imagesBig: PropTypes.array.isRequired,
  imagesSmall: PropTypes.array.isRequired,
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
    autoplaySpeed: 3000,
    pauseOnHover: true

  }
};

const links = [
  "/women/product/slim-fit-knit-herringbone-blazer-345706",
  "/men/product/slim-fit-vintage-jeans-345692",
  "/women-shoes/product/white-leather-plimsolls-with-black-heel-tab-345720",
  "/women-accessories/product/two-tone-leather-wallet-345731",
  "/women-beauty/product/evening-whispers-perfume-and-candle-pack-345760"
];

const Slider = ({ imagesBig, imagesSmall, settings }) => (
  <div className="slider">
    <SlickSlider {...settings} className="slider slider_big">

      {imagesBig.map((image, i) =>
        <div key={image.id}>
          <NavLink to={links[i]}>
            <img className="slider__img" src={image.src} alt={image.alt} />
          </NavLink>
        </div>)}

    </SlickSlider>

    <SlickSlider {...settings} className="slider slider_small">
      {imagesSmall.map((image, i) =>
        <div key={image.id}>
          <NavLink to={links[i]}>
            <img className="slider__img" src={image.src} alt={image.alt}/>
          </NavLink>
        </div>)}

    </SlickSlider>

  </div>
);

Slider.propTypes = propTypes;
Slider.defaultProps = defaultProps;

export default Slider;

