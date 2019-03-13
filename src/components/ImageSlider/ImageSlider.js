import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './ImageSlider.scss';
import { URL_PRODUCT_IMAGES } from '../../config/app';
console.log("==================", URL_PRODUCT_IMAGES);

const propTypes = {
};

const defaultProps = {
};

/**
 * General component description in JSDoc format. Markdown is *supported*.
 */
const ImageSlider=({images})=> {
	console.log("===================", images)
/*	{images.map((val)=>{
		console.log('----------------------------->', val)
	})}*/
	const [ current, setCurrent ] = useState(0);

        return (
				<div className="imageSlider">
                  <div className="imageSlider__content"> 
                  	<div className="imageSlider__mainBox">
                  		{images.map((image, index) => {
                  			console.log("===============", image)
                  			return (
			                    <img
			                      className={ index === current
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
		                    	<button className="imageSlider__btn" onClick={() => { setCurrent(index);} }>
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
        
        
    	//return <h2>Hello</h2>
    }


ImageSlider.propTypes = propTypes;
ImageSlider.defaultProps = defaultProps;

export default ImageSlider;