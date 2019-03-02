import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ProductsList from '../../components/ProductsList/ProductsList';
import Slider from '../../components/Slider/Slider';

const sliderImagesDir = process.env.PUBLIC_URL;

const propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      department: PropTypes.string,
      page: PropTypes.string,
    }),
    path: PropTypes.string.isRequired
  })
};

const defaultProps = {
  match: {
    params: {
      department: '',
      page: 1,
    }
  },
};

const HomepageGender = ({ match }) => {
  return (
  <>
    <Header />
    <Slider
      images={[
        { id: 1, src: `${sliderImagesDir}/slider-images/1.jpg`, alt: '' },
        { id: 2, src: `${sliderImagesDir}/slider-images/2.jpg`, alt: '' },
        { id: 3, src: `${sliderImagesDir}/slider-images/3.jpg`, alt: '' },
        { id: 4, src: `${sliderImagesDir}/slider-images/4.jpg`, alt: '' },
        { id: 5, src: `${sliderImagesDir}/slider-images/5.jpg`, alt: '' },
      ]}
      settings={{
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      }}
    />
    <ProductsList routeData={match} />
    <Footer />
  </>
)};

HomepageGender.propTypes = propTypes;
HomepageGender.defaultProps = defaultProps;

export default HomepageGender;
