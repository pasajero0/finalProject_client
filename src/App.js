import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { fetchDepartments, hideSystemMessage } from './actions/app';
import Layout from './components/Layout/Layout';
import SystemMessage from './components/SystemMessage/SystemMessage';

import './App.scss';

const propTypes = {
  isFetching: PropTypes.bool.isRequired,
  departments: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
      name: PropTypes.string,
      slug: PropTypes.string,
      parent: PropTypes.string,
      position: PropTypes.number,
      filters: PropTypes.shape,
    })),
  callFetchDepartments: PropTypes.func.isRequired
};

const defaultProps = {
  departments: []
};


class App extends Component {

  componentDidMount() {
    const {
      isFetching,
      departments,
      callFetchDepartments
    } = this.props;

    if (!isFetching && departments.length === 0) {
      callFetchDepartments();
    }
  }

  render() {
    const { 
      isFetching,
      callHideSystemMessage,
      isMessageVisible,
      systemMessageText,
      systemMessageType,
    } = this.props;
    return(
      isFetching 
      ? <div>LOADING...</div> 
      : <>
          <SystemMessage
            text={systemMessageText}
            type={systemMessageType}
            onHide={callHideSystemMessage}
            isVisible={isMessageVisible}
          />
          <Layout />
        </>
    );
  }
}

App.propTypes = propTypes;
App.defaultProps = defaultProps;

const mapStateToProps = state => ({
  departments: state.app.departments,
  isFetching: state.app.isFetching,
  isMessageVisible: state.app.systemMessage.isVisible,
  systemMessageText: state.app.systemMessage.text,
  systemMessageType: state.app.systemMessage.type,
});

const mapDispatchToProps = dispatch => ({
  callFetchDepartments: () => dispatch(fetchDepartments()),
  callHideSystemMessage: () => dispatch(hideSystemMessage())
});

const C = connect(mapStateToProps, mapDispatchToProps)(App);
export default props => <Route render={routeProps => <C {...routeProps} {...props} />}/>;
