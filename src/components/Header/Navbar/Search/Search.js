import React, { Component } from "react";
import { FiSearch } from 'react-icons/fi';
import { MdClose } from 'react-icons/md'
import Tool from '../Tool/Tool';

import './Search.scss';


class Search extends Component {
  state = {
    isOpenForm: false
  };

  toggleSearchForm = () => {
    this.setState({ isOpenForm: !this.state.isOpenForm });
  };

  render() {
    const { isOpenForm } = this.state;

    return (
      <div className="search">

        <button
          onClick={() => this.toggleSearchForm()}
          className="search__switch"
        >
          {isOpenForm
            ? <Tool icon={MdClose}/>
            : <Tool icon={FiSearch}/>
          }
        </button>

        <div className="search__form">
          <form action="#" method="get"
                className={this.state.isOpenForm ? "searchForm open" : "searchForm"}>
            <input className="searchForm__searchInput" type="search" name="search" placeholder="Search"/>
            {/*<span className="searchForm__clean"></span>*/}
            <button type="submit" className="searchForm__btn">
              <FiSearch className="searchForm__icon"/>
            </button>
          </form>


          <div className="searchResult">
            <ul className="search__list">
              <li className="searchFormResult__item">
                {/*<a href="#" className="searchFormResult__link"></a>*/}
              </li>
            </ul>
          </div>
        </div>


      </div>
    )
  }
}

export default Search;