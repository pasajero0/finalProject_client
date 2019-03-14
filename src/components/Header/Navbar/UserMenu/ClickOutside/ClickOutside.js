import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node,
};

const defaultProps = {
  children: '',
};

class ClickOutside extends Component {
  constructor(props) {
    super(props);
    this.ref = createRef();
  }

  componentDidMount() {
    const {onClick} = this.props;
    window.addEventListener('click', onClick);
    this.ref.current.addEventListener('click', e => e.stopPropagation() );
  }

  componentWillUnmount() {
    const {onClick} = this.props;
    window.removeEventListener('click', onClick);
  }

  render() {
    const { children } = this.props;
    return (
      <span ref={this.ref}>{children}</span>
    );
  }
}
ClickOutside.propTypes = propTypes;
ClickOutside.defaultProps = defaultProps;

export default ClickOutside;
