import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './Filter.scss';

const propTypes = {

};

const defaultProps = {
  
};

/**
 * General component description in JSDoc format. Markdown is *supported*.
 */

const Filter = (props) => {
  const { departments, routeDepartment } = props;

  console.log('departments----------------------------> ', departments);

  const findDepartment = departments.find(data => data.slug === routeDepartment);
  if (
    findDepartment === undefined || 
    findDepartment.slug === 'men' ||
    findDepartment.slug === 'women'
  ) {
    return null;
  }
  const getFilters = findDepartment.filters;

  return (
    <div className="filter">
      <h1>filter / {routeDepartment}</h1>
      { 
        Object.keys(getFilters).map((key, index) => {
          return (
            <div key={key+(index+1)}>
              <h2 style={{ color: 'tomato' }}>{key}</h2>
              <ul>
                { 
                  getFilters[key].map((item, index) =>{
                    return (
                      <li key={item+(index+1)}> 
                        <input type="checkbox" id={item} name={item} onChange={e => console.log(key, item, e.currentTarget.checked)}/>
                        <label htmlFor={item}>{item}</label>
                      </li>
                    );
                  })
                }
              </ul>
            </div>
          );
        })
      }
    </div>
  );

};

Filter.propTypes = propTypes;
Filter.defaultProps = defaultProps;

const mapStateToProps = state => ({
  departments: state.app.departments,
});

// const mapDispatchToProps = dispatch => (
//   {
//   }
// );

export default connect(mapStateToProps, null)(Filter);
