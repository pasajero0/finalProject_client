/**
 * __componentName__ Component.
 * Placeholder fot the description
 * @module __componentName__
 */
import React from 'react';
import { connect } from 'react-redux';
import __wrapComponentName__ from '__wrapComponentPath__';

const mapStateToProps = state => (
  {
    //isOn: state.app.openPanel === 'menu',
  }
);
const mapDispatchToProps = dispatch => (
  {
    //onChange: (value) => dispatch(setOpenPanel(value ? 'menu' : '')),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(__wrapComponentName__);
