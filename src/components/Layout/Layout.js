/**
 * Layout Component.
 * Placeholder fot the description
 * @module Layout
 */
import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import './Layout.scss';

/**
 * PropTypes of the component
 * @type {object}
 */

const propTypes = {
  /** Text message of the toast. */
  children: PropTypes.node.isRequired,
};

/**
 * General component description in JSDoc format. Markdown is *supported*.
 */
const Layout = ({ children }) => {
  return (
    <div className="layout">
      <div className="layout__header">
        <Header />
      </div>
      <div className="layout__content">
        {children}
      </div>
      <div className="layout__footer">
        <Footer />
      </div>
    </div>
  );
};

Layout.propTypes = propTypes;

export default Layout;
