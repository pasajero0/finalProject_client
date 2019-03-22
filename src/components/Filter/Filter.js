import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

  changeCheckboxStatus(filter, filterName, isCheked) {
    let newState = {...this.state};
    console.log(newState.filters, filter, filterName, isCheked);
    newState.filters[filter][filterName] = isCheked;
    this.setState(newState);
  }

  filtersToString(){}
  stringToFilters(){}

  render () {
    const { routeDepartment } = this.props;
    
    console.log("state ======================>", this.state, routeDepartment);

    return (
      <div className="filter">
        <h1>filter / {routeDepartment}</h1>
        <form onSubmit={(e) => {
          e.preventDefault();
          console.log('onSubmit ========> ', e.currentTarget);
        }}
        >
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
