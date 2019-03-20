import React from 'react';
import PropTypes from 'prop-types';
import SlickSlider from 'react-slick';
// import { URL_PRODUCT_IMAGES } from '../../config/app';

import './ProductCarousel.scss';

const propTypes = {
  images: PropTypes.array.isRequired,
  settings: PropTypes.object,
};

const defaultProps = {
  settings: {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true
  }
};

const Slider = ({ images, settings }) => (
  <div className="carousel">
    <div className="carousel__name">Popular products</div>
      <SlickSlider {...settings} className="carousel">
      {images.map(image =>
        <div key={image.id}>
          <img className="carousel__img" src={image.src} alt={image.alt} />
        </div>)}
    </SlickSlider>
  </div>
);

Slider.propTypes = propTypes;
Slider.defaultProps = defaultProps;

export default Slider;
