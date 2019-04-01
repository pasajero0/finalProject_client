import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import Routes from './Routes';
import { fetchInitialData, hideSystemMessage } from './actions/app';
import SystemMessage from './components/SystemMessage/SystemMessage';
import RenderLoader from './components/RenderLoader/RenderLoader';
import './components/Layout/Layout.scss'

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
  callFetchInitialData: PropTypes.func.isRequired,
};

const defaultProps = {
  departments: []
};



class App extends Component {
  componentDidMount() {
    const { isFetching, departments, callFetchInitialData } = this.props;
    if (!isFetching && departments.length === 0) {
      callFetchInitialData();
    }
  }

  render() {
    const { 
      isFetching,
      departments,
      callHideSystemMessage,
      isMessageVisible,
      systemMessageText,
      systemMessageType,
    } = this.props;

    const loaderStyle = {
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50% , -50% )'
    };

    return(
      !isFetching && departments.length === 0 
      ? <div style={loaderStyle}>
        <RenderLoader 
        size={'100px'}
        color = {'lightgrey'}
        />
      </div>
      : <>
          <SystemMessage
            text={systemMessageText}
            type={systemMessageType}
            onHide={callHideSystemMessage}
            isVisible={isMessageVisible}
          />
          <Routes />
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
  callFetchInitialData: () => dispatch(fetchInitialData()),
  callHideSystemMessage: () => dispatch(hideSystemMessage())
});

const C = connect(mapStateToProps, mapDispatchToProps)(App);
export default props => <Route render={routeProps => <C {...routeProps} {...props} />}/>;
 