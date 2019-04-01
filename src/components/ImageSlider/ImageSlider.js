import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import ReactImageMagnify from 'react-image-magnify';
import './ImageSlider.scss';
import { URL_PRODUCT_IMAGES } from '../../config/app';

const propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired
};

/**
 * General component description in JSDoc format. Markdown is *supported*.
 */


class ImageSlider extends Component {
  constructor(props) {
    super(props);
    this.slidesBox = createRef();
    this.state = {
      current: 0
    };
  }

  setCurrent(value) {
    this.setState(prevState => ({ ...prevState, current: value }));
  }


  render() {
    const { current } = this.state;
    const { images } = this.props;

    return (
      <div className="imageSlider">
        <div className="imageSlider__content">
          <div className="imageSlider__mainBox">
            <div className="imageSlider__mainFrame" ref={this.slidesBox}>


              {images.map((image, index) => {
                return (
                  <div
                    className={index === current
                      ? 'imageSlider__mainImg imageSlider__mainImg_current'
                      : 'imageSlider__mainImg'
                    }
                    key={image}
                  >
                    <div className="imageSlider__mainImg_lg">
                      <ReactImageMagnify {...{
                        smallImage: {
                          alt: 'Product',
                          isFluidWidth: true,
                          src: `${URL_PRODUCT_IMAGES}/md-${image}`
                        },
                        largeImage: {
                          src: `${URL_PRODUCT_IMAGES}/${image}`,
                          width: 1200,
                          height: 1800
                        },

                      }} />
                    </div>
                    <div className="imageSlider__mainImg_sm">
                      <img
                        src={`${URL_PRODUCT_IMAGES}/md-${image}`}
                        alt="Product"
                        key={image}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="imageSlider__smImg">
            {images.map((image, index) => {
              return (
                <button
                  className={index === current
                    ? 'imageSlider__btn imageSlider__btn_current'
                    : 'imageSlider__btn'
                  }
                  onClick={() => {
                    this.setCurrent(index);
                  }}
                  key={image}
                >
                  <img
                    className={index === current
                      ? 'imageSlider__img imageSlider__img_current'
                      : 'imageSlider__img'
                    }
                    src={`${URL_PRODUCT_IMAGES}/sm-${image}`}
                    alt="Product"
                  />
                </button>
              );
            })}

          </div>
        </div>
      </div>
    );
  }
}

ImageSlider.propTypes = propTypes;

export default ImageSlider;