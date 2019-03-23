import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Filter from '../Filter/Filter';

const propTypes = {
  routeDepartment: PropTypes.string.isRequired
};

const defaultProps = {

};

/**
 * General component description in JSDoc format. Markdown is *supported*.
 */
const FilterWrapper = (props) => {
  const { departments, routeDepartment } = props;
  const findDepartment = departments.find(data => data.slug === routeDepartment);
  if (
    findDepartment === undefined ||
    findDepartment.slug === 'men' ||
    findDepartment.slug === 'women'
  ) {
    return null;
  }
  const getFilters = findDepartment.filters;
  const filtersData = () => {
    const filtersObj = {};
    Object.keys(getFilters).map((key) => {
      const checkbox = {};
      getFilters[key].map((item) => {
        checkbox[item] = false;
      });
      filtersObj[key] = checkbox;
    });
    return filtersObj;
  };

  return (
    <div className="filterWrapper">
      <Filter filtersData={filtersData()}/>
    </div>
  );
};

FilterWrapper.propTypes = propTypes;
FilterWrapper.defaultProps = defaultProps;

const mapStateToProps = state => ({
  departments: state.app.departments,
});

export default connect(mapStateToProps, null)(FilterWrapper);
