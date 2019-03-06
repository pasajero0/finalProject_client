import React, { Component } from "react";
import { FiSearch } from 'react-icons/fi';
import { MdClose } from 'react-icons/md'
import './Search.scss';


class Search extends Component {
  state = {
    searchFormOpened: false
  };

  tooglesearchForm = () => {
    this.setState({searchFormOpened: !this.state.searchFormOpened});
  };

  render() {
    return (
      <div className="search">
                <span className="search__link" onClick={this.tooglesearchForm}>
                    <FiSearch
                      className={this.state.searchFormOpened ? "search__searchIcon hide" : "search__searchIcon"}/>
                    <MdClose className={this.state.searchFormOpened ? "search__closeIcon show" : "search__closeIcon"}/>
                </span>


        <form action="#" method="get"
              className={this.state.searchFormOpened ? "searchForm open" : "searchForm"}>
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
    )
  }
}

export default Search;