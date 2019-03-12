import React from 'react';
import PropTypes from 'prop-types';

import './SystemMessage.scss';

/**
 * General component description in JSDoc format. Markdown is *supported*.
 */
function SystemMessage({body, title, type, onHide, isVisible}) {
  return (
    <div className="SystemMessage">
      {/* here is going to be body of the component*/}
    </div>
  );
}

SystemMessage.propTypes = {
  body: PropTypes.node,
  title: PropTypes.string,
  type: PropTypes.string,
  onHide: PropTypes.func,
  isVisible: PropTypes.bool
};

SystemMessage.defaultProps = {
  body: '',
  title: '',
  type: '',
  onHide: () => {
  },
  isVisible: true
};

export default SystemMessage;