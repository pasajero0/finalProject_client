import React from 'react';
import PropTypes from 'prop-types';
import './Tool.scss';

const propTypes = {
  icon: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  children: PropTypes.node,
};
const defaultProps = {
  children: null,
  disabled: false
};


const Tool = ({ icon, disabled, children }) => {
  const C = icon;
  return (
    <div className={disabled ? 'tool tool_disabled' : 'tool'}>
      <C className="tool__icon" />
      { children }
    </div>
  )
};

Tool.propTypes = propTypes;
Tool.defaultProps = defaultProps;

export default Tool;