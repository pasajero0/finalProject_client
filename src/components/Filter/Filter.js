import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, NavLink } from 'react-router-dom';

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
  };

  filtersToString() {
    const { filters } = this.state;
    const obj = {};
    Object.keys(filters).map(key => {
      obj[key] = Object.keys(filters[key]).filter(item => filters[key][item]);
      if (!obj[key].length) {
        delete obj[key]
      }
    });
    const objToString = Object.keys(obj).map(key => {
      return `${key}_${obj[key].join(',')}`;
    });
    return objToString.join(';');
  }

  stringToFilters() {
    const splitUrl = this.props.match.params.filter;
    if (!splitUrl) {
      return false;
    }
    let splitedObj = {};
    splitUrl.split(';').map(value => {
      let filterArrBySemicolon = value.split('_');
      let filterArrBySemicolonValue = filterArrBySemicolon[0];
        filterArrBySemicolon.map(filterArrByUnderscore => {
        splitedObj[filterArrBySemicolonValue] = filterArrByUnderscore.split(',');
      });
    });
    return splitedObj;
  }

  changeCheckboxStatus(filter, filter2, isCheked) {
    let newState = {...this.state};
    newState.filters[filter][filter2] = isCheked;
    this.setState(newState);
  }
  fromURLtoState(data) {
    let newState = {...this.state};
    if (data) {
      Object.keys(data).map(key => {
          data[key].map(item => {
              newState.filters[key][item] = true;
          })
      });
    }
    this.setState(newState);
  }
  componentDidMount() {
    this.fromURLtoState(this.stringToFilters());
  }
  render () {
    const { match:{params:{department}} } = this.props;
    const navLinkRoute = () => {
      let route;
      if (this.filtersToString()){
        route = `/${department}/filter/${this.filtersToString()}`
      } else (
        route = `/${department}`
      );
      return route;
    };
    return (
      <div className="filter">
        <h2 className="filter__title">/{department}</h2>
        <NavLink to={navLinkRoute()} className="filter__button"> filter </NavLink>
        { 
          Object.keys(this.state.filters).map((key, index) => {
            return (
              <div key={key+(index+1)} className="filter__subtitleBlock">
                <h2 className="filter__subtitle">{key}</h2>
  
                  <ul>
                    { 
                      Object.keys(this.state.filters[key]).map((item, index) => {
                        return (
                          <li key={item+(index+1)}> 
                            <input 
                              type="checkbox" 
                              id={item} 
                              name={item} 
                              checked={this.state.filters[key][item]} 
                              onChange={e => this.changeCheckboxStatus(key, item, e.currentTarget.checked)}
                            />
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
  }

}

Filter.propTypes = propTypes;
Filter.defaultProps = defaultProps;

export default props => <Route render={routeProps => <Filter {...routeProps} {...props} />} />;