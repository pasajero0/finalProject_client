import React from 'react';
import PropTypes from 'prop-types';
import SlickSlider from 'react-slick';

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
    adaptiveHeight: true
  }
};

const ProductCarousel = ({ images, settings }) => (
  <div className="productCarousel">
    <div className="productCarousel__name">Popular products</div>
      <SlickSlider {...settings} className="productCarousel">
      {images}
    </SlickSlider>
  </div>
);

ProductCarousel.propTypes = propTypes;
ProductCarousel.defaultProps = defaultProps;

export default ProductCarousel;
