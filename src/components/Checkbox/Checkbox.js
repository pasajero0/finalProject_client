import React from 'react';
import PropTypes from 'prop-types';

import './Checkbox.scss';

const propTypes = {
  label: PropTypes.string,
  value: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

const defaultProps = {
  label: null,
  value: false,
};

const Checkbox = ({ label, value, onClick }) => {
  const active = value ? 'Checkbox selected' : 'Checkbox';
  return (
    <div className="Checkbox__wrapper" onClick={onClick}>
      <span className={active} />
      <span className="label">{label}</span>
    </div>
  );
};


Checkbox.propTypes = propTypes;
Checkbox.defaultProps = defaultProps;

export default Checkbox;
