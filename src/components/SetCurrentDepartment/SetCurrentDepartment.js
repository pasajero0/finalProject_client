import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import { connect } from 'react-redux';
import { setCurrentDepartment, setCurrentDepartmentData } from '../../actions/products';

const propTypes = {
  callSetCurrentDepartment: PropTypes.func.isRequired,
};

class SetCurrentDepartment extends Component {

  componentDidMount() {
    this.setCurrentDepartment();
  }

  componentDidUpdate() {
    this.setCurrentDepartment();
  }

  getDepartmentSlug() {
    const { match: { params }, location: { search } } = this.props;
    const values = queryString.parse(search);
    return params.department || values.department || '';
  }

  setCurrentDepartment() {
    const { callSetCurrentDepartment, departments, callSetCurrentDepartmentData } = this.props;
    const slug = this.getDepartmentSlug();
    const found = departments.filter(d => d.slug === slug);
console.log(slug);
    console.log(found);
    callSetCurrentDepartmentData(found.length === 1 ? found[0] : {});
    callSetCurrentDepartment(slug);
  }

  render() {
    const { render, ...otherProps } = this.props;
    return render(otherProps);
  }
}

SetCurrentDepartment.propTypes = propTypes;

const mapStateToProps = state => ({
  departments: state.app.departments,
});

const mapDispatchToProps = dispatch => ({
  callSetCurrentDepartment: name => dispatch(setCurrentDepartment(name)),
  callSetCurrentDepartmentData: data => dispatch(setCurrentDepartmentData(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(SetCurrentDepartment);
