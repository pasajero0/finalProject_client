import React from 'react';
import PropTypes from 'prop-types';
import './SystemMessage.scss';

/**
 * General component description in JSDoc format. Markdown is *supported*.
 */
function SystemMessage({
  body, title, type, onHide, isVisible
}) {
  const className = isVisible
    ? 'systemMessage systemMessage_visible'
    : 'systemMessage';

  const modal = `modal modal_${type}`;
  return (
    <div className={className}>
      <div className={modal}>
        <button id="closeButton" type="button" className="close" onClick={() => onHide()}>X</button>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
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
  onHide: console.log,
  isVisible: false
};

export default SystemMessage;
