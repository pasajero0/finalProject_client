import React, { Component } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';
import queryString from 'query-string';
import { FiSearch } from 'react-icons/fi';
import { buildUrl } from '../../../../utils/helpers';
import Tool from '../Tool/Tool';
import { URL_API_FETCH_SEARCH_HINTS } from '../../../../config/app';


import './Search.scss';

axios.defaults.withCredentials = true;

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      hints: [],
      isBusy: false,
      isFocused: false,
    };
    this.hints = {};
    this.keyLength = 3;
  }

  componentDidMount() {
    const { location: { search } } = this.props;
    const values = queryString.parse(search);
    this.setState(prevState => ({
      ...prevState,
      value: values.q || ''
    }));
  }


  displayHints() {
    const { value } = this.state;
    const key = value.substr(0, this.keyLength).toUpperCase();
    const re = new RegExp(value, 'gi');
    this.setState(prevState => ({
      ...prevState,
      hints: this.hints[key] ? this.hints[key].filter(m => m.match(re)) : []
    }));
  }
  onChangeByHint(value){
    this.setState((prevState) => ({
      ...prevState,
      hints: [],
      value
    }));
  }
  onChange(value) {
    const { match: { params: { department } } } = this.props;
    this.setState((prevState) => ({
      ...prevState,
      hints: [],
      value
    }), () => {
      if (value.length >= this.keyLength) {
        const key = value.substr(0, this.keyLength).toUpperCase();
        if (!this.hints[key]) {
          this.setState((prevState) => ({
            ...prevState,
            isBusy: true
          }));
          axios.post(URL_API_FETCH_SEARCH_HINTS, { department, query: value })
            .then(res => res.data)
            .then((data) => {
              if (data.success) {
                this.hints[key] = data.data.records;
                this.setState(prevState => ({
                  ...prevState,
                  isBusy: false
                }));
                this.displayHints();
              } else {
                throw new Error('Fetching product data error');
              }
            });
        } else {
          this.displayHints();
        }
      } else {
        this.setState((prevState) => ({
          ...prevState,
          hints: []
        }));
      }
    });
  }

  onBlur() {
    this.setState((prevState) => ({
      ...prevState,
      isFocused: false
    }));
  }

  onFocus() {
    this.setState((prevState) => ({
      ...prevState,
      isFocused: true
    }));
  }

  onSubmit() {
    const { value, isFocused } = this.state;
    if (isFocused && value.length > 0) {
      const { history, match: { params: { department } } } = this.props;

      const params = { q: value };
      if(department){
        params.department = department;
      }
      const url = buildUrl( '/search', {}, params);
      history.push(url);
    }
  };

  render() {
    const { value, hints, isFocused } = this.state;

    const classBase = isFocused && hints.length > 0
      ? 'search search_withHints'
      : 'search';

    const className = isFocused
      ? `${classBase} search_focused`
      : classBase;

    return (
      <div
        className={className}
        tabIndex="0"
        onFocus={() => {
          this.onFocus();
        }}
        onBlur={() => {
          this.onBlur();
        }}

      >
        <input
          className="search__input"
          value={value}
          onChange={(e) => this.onChange(e.currentTarget.value)}
          placeholder="Search"
        />

        <button
          onClick={() => this.onSubmit()}
          className="search__button"
        >
          <Tool icon={FiSearch}/>
        </button>
        {isFocused && hints.length > 0 && (
          <div className="search__hintsBox">
            <ul className="search__hints">
              {hints.map(h => (
                <li
                  key={h}
                  className="search__hint"
                  onClick={() => {this.onChangeByHint(h)}}
                >{h}</li>
              ))}
            </ul>
          </div>
        )}


        {/*
        <div className="search__form">
          <form action="#" method="get"
                className={this.state.isOpenForm ? "searchForm open" : "searchForm"}>
            <input className="searchForm__searchInput" type="search" name="search" placeholder="Search"/>
            <span className="searchForm__clean"></span>
            <button type="submit" className="searchForm__btn">
              <FiSearch className="searchForm__icon"/>
            </button>
          </form>


          <div className="searchResult">
            <ul className="search__list">
              <li className="searchFormResult__item">
                <a href="#" className="searchFormResult__link"></a>
              </li>
            </ul>
          </div>
        </div>*/}


      </div>
    )
  }
}

export default props => <Route render={routeProps => <Search {...routeProps} {...props} />}/>;
