import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { fetchInitialData } from './actions/app';
import Routes from './Routes';

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
    const { isFetching, departments } = this.props;
    return !isFetching && departments.length === 0
      ? <div>Loading...</div>
      : <Routes/>;
  }
}

App.propTypes = propTypes;
App.defaultProps = defaultProps;

const mapStateToProps = state => ({
  departments: state.app.departments,
  isFetching: state.app.isFetching
});

const mapDispatchToProps = dispatch => ({
  callFetchInitialData: () => dispatch(fetchInitialData()),
});

const C = connect(mapStateToProps, mapDispatchToProps)(App);
export default props => <Route render={routeProps => <C {...routeProps} {...props} />}/>;
