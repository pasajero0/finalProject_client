import React from 'react';
import Slider from "react-slick";
import { baseUrl } from "./config";
import './ProductSlider.scss'
import PropTypes from "prop-types";

const propTypes = {
    images: PropTypes.array,
    settings: PropTypes.object,
};

const defaultProps = {
    settings: {
        customPaging: function (i) {
            return (
                <a>
                    <img src={`${baseUrl}/productSlider-images/${i + 1}.jpg`}/>
                </a>
            );
        },
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    }
};

const ProductSlider = ({images, settings}) => {
    return (
        <div className="productSlider">
            <div className="productSlider__container">
                <Slider {...settings} className="productSlider__content">
                    {images.map(image =>
                        <div className="productSliderImg" key={image.id}>
                            <img className="productSliderImg__img" src={image.src} alt={image.alt}/>
                        </div>)}
                </Slider>
            </div>
        </div>
    );
};

Slider.propTypes = propTypes;
Slider.defaultProps = defaultProps;

export default ProductSlider;