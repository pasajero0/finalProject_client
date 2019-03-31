import React from 'react';
import PropTypes from 'prop-types';
import SlickSlider from 'react-slick';

import './ProductCarousel.scss';

const propTypes = {
  images: PropTypes.array.isRequired,
  settings: PropTypes.object,
  titie: PropTypes.string,
};

const defaultProps = {
  settings: {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    adaptiveHeight: true
  },
  title: ''
};

const ProductCarousel = ({ images, settings, title }) => (
  <div className="productCarousel">
    <div className="productCarousel__name">{title}</div>
    <SlickSlider {...settings} className="productCarousel">
      {images}
    </SlickSlider>
  </div>
);

ProductCarousel.propTypes = propTypes;
ProductCarousel.defaultProps = defaultProps;

export default ProductCarousel;