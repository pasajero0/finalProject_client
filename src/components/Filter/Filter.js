import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './Filter.scss';

const propTypes = {

};

const defaultProps = {
  
};

/**
 * General component description in JSDoc format. Markdown is *supported*.
 */
class Filter extends Component {
  state = {
    filters: this.props.filtersData
  }

  filtersToString (){
    const { filters } = this.state;
    const obj = {};
    Object.keys(filters).map(key => {
      obj[key] = Object.keys(filters[key]).filter(item => filters[key][item]);
      if (!obj[key].length) {
        delete obj[key]
      }
    });
    const objToString = Object.keys(obj).map(key => {
      return `${key}-${obj[key].join('-')}`;
    })
    return objToString.join(';');
  }

  changeCheckboxStatus(filter, filter2, isCheked) {
    let newState = {...this.state};
    // console.log(filter, filter2, isCheked);
    newState.filters[filter][filter2] = isCheked;
    // console.log(newState.filters);
    this.setState(newState);
  }

  stringToFilters(){}
  
  render () {
    console.log('>>>>>>>>>>>>>>>>>>>>>>>>>', this.props, this.props.match);
    const { routeDepartment } = this.props;
    console.log("state ======================>", this.state, routeDepartment);
    const NavLinkRoute = `/${routeDepartment}/filter/${this.filtersToString()}`
    return (
      <div className="filter">
        <h1 style={{marginBottom:'5px', color: '#009688', fontSize: '20px'}}>/{routeDepartment}</h1>
        <form onSubmit={(e) => {
          e.preventDefault();
          console.log('onSubmit ========> ', this.filtersToString());
        }}
        >
          <NavLink to={NavLinkRoute}> | filter | </NavLink>
          <button type="submit">filter</button>
          { 
            Object.keys(this.state.filters).map((key, index) => {
              return (
                <div key={key+(index+1)}>
                  <h2 style={{ color: 'tomato' }}>{key}</h2>
    
                    <ul>
                      { 
                        Object.keys(this.state.filters[key]).map((item, index) => {
                          return (
                            <li key={item+(index+1)}> 
                              <input type="checkbox" id={item} name={item} onChange={e => this.changeCheckboxStatus(key, item, e.currentTarget.checked)}/>
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
        </form>
      </div>
    );
  }

}

Filter.propTypes = propTypes;
Filter.defaultProps = defaultProps;

export default Filter;
