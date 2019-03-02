import React from 'react';
import PropTypes from 'prop-types';
import SlickSlider from 'react-slick';

import './Slider.scss';

const propTypes = {
  images: PropTypes.array.isRequired,
  settings: PropTypes.object,
};

const defaultProps = {
  settings: {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  }
};

const Slider = ({ images, settings }) => (
  <div className="slider">
      <SlickSlider {...settings} className="slider">
        {images.map(image =>
          <div key={image.id}>
              <img className="slider__img" src={image.src} alt={image.alt} />
              <a href={image.link}></a>
          </div>)}
      </SlickSlider>
  </div>
);

Slider.propTypes = propTypes;
Slider.defaultProps = defaultProps;

export default Slider;
