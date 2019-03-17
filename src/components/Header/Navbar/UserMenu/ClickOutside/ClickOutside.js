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
    this.isBlocked = false;
  }

  componentDidMount() {
    const {onClick} = this.props;
    window.addEventListener('click', onClick);
    this.ref.current.addEventListener( 'click', this.blockClick.bind(this));
  }

  componentWillUnmount() {
    const {onClick} = this.props;
    window.removeEventListener('click', onClick);
    this.ref.current.removeEventListener( 'click', this.blockClick.bind(this));
  }

  onClick(){
    const {onClick} = this.props;
    if(!this.isBlocked){
      onClick();
    }
    this.isBlocked = false;
  }
  blockClick(){
    this.isBlocked = true;
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
