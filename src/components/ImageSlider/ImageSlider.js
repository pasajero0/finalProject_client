import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import './ImageSlider.scss';
import { URL_PRODUCT_IMAGES } from '../../config/app';

const propTypes = {};

const defaultProps = {};

/**
 * General component description in JSDoc format. Markdown is *supported*.
 */


class ImageSlider extends Component{
  constructor(props) {
    super(props);
    this.slidesBox = React.createRef();
    this.state = {
      current: 0
    };
  }
  setCurrent(value){
    this.setState( prevState => ({...prevState, current: value}) );
  }


  render(){
    const {current} = this.state;
    const {images} = this.props;

    return (
      <div className="imageSlider">
        <div className="imageSlider__content">
          <div className="imageSlider__mainBox" ref={this.slidesBox}>
            {images.map((image, index) => {
              return (
                <img
                  className={index === current
                    ? 'imageSlider__mainImg imageSlider__mainImg_current'
                    : 'imageSlider__mainImg'
                  }
                  src={`${URL_PRODUCT_IMAGES}/md-${image}`}
                  alt="Product"
                  key={image}
                />
              )
            })}
          </div>

          <div className="imageSlider__smImg">
            {images.map((image, index) => {
              return (
                <button
                  className="imageSlider__btn"
                  onClick={() => {this.setCurrent(index);}}
                >
                  <img
                    className="imageSlider__img"
                    src={`${URL_PRODUCT_IMAGES}/sm-${image}`}
                    alt="Product"
                    key={image}
                  />
                </button>
              )
            })}

          </div>
        </div>
      </div>
    );
  }
}

ImageSlider.propTypes = propTypes;
ImageSlider.defaultProps = defaultProps;

export default ImageSlider;