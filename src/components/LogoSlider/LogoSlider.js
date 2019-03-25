import React from 'react';
import PropTypes from 'prop-types';
import SlickSlider from 'react-slick';

import './LogoSlider.scss';

const propTypes = {
    images: PropTypes.array.isRequired,
    settings: PropTypes.object,
};

const defaultProps = {
    settings: {
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
    }
};

const LogoSlider = ({ images, settings }) => (
    <section className="logoSlider">
        <div className="container">
            <div className="logoSlider__content">
                <div className="logoSlider__name">Brands</div>
                <SlickSlider {...settings} className="logoSlider">
                    {images.map(image =>
                        <div key={image.id}>
                            <img className="logoSlider__img" src={image.src} alt={image.alt} />
                        </div>)}
                </SlickSlider>
            </div>
        </div>
    </section>
);

LogoSlider.propTypes = propTypes;
LogoSlider.defaultProps = defaultProps;

export default LogoSlider;