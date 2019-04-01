
import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from "react-helmet";


/**
 * PropTypes of the component
 * @type {object}
 */
const propTypes = {
  /** Text message of the toast. */
  //prop: PropTypes.string,
};
/**
 * Default props of the component
 * @type {object}
 */
const defaultProps = {
  //prop: '',
};

/**
 * General component description in JSDoc format. Markdown is *supported*.
 */
const SeoHeaderRender = ({ ...props }) =>{
  return (
    <div className="SeoHeaderRender">
        <Helmet>
            <title>Boutique store for latest in Men’s and Women’s fashion.</title>
            <meta name="keywords" content="uno, men's clothing, women's clothing" />
            <meta name="description" content="Luxury Men's and Women's Clothing, Made in Italy since 1934.
             UNO is a paradigm of Italian craftsmanship: discover how timeless style and contemporary elegance
              come together in our new Clothing collection. Shop online on Uno.com, free delivery and returns now available." />

        </Helmet>
    </div>
  );
};

SeoHeaderRender.propTypes = propTypes;
SeoHeaderRender.defaultProps = defaultProps;

export default SeoHeaderRender;
