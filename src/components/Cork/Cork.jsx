import React from 'react';
import './Cork.scss';
import PropTypes from 'prop-types';

const propTypes = {
  style: PropTypes.shape({
    background: PropTypes.string,
  }),
  title: PropTypes.string,
};

const defaultProps = {
  style: ({
    background: '',
  }),
  title: '',
};

const Cork = ({ style, title }) => {
  return (
    <div className="corkBlock" style={style}>
      <p className="corkTitle">{title}</p>
    </div>
  );
};

Cork.propTypes = propTypes;
Cork.defaultProps = defaultProps;

export default Cork;