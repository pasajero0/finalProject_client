/**
 * __componentName__ Component.
 * Placeholder fot the description
 * @module __componentName__
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './__componentName__.scss';

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
class __componentName__ extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {

  }

  render() {

    return (
      <div className="__className__">
        {/* here is going to be body of the component*/}
      </div>
    );
  }
}

__componentName__.propTypes = propTypes;
__componentName__.defaultProps = defaultProps;

export default __componentName__;
