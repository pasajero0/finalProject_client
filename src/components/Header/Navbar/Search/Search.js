import React, {Component} from "react";
import {FiSearch} from 'react-icons/fi';
import './Search.scss';


class Search extends Component {
    render() {
        return (
            <form action="https://www.google.com.ua/?hl=ru" method="get" className="searchForm">
                <input className="searchForm__search" type="search" name="text" placeholder="Search"/>
                <button type="submit" className="searchForm__btn">
                    <FiSearch className="searchForm__icon"/>
                </button>
            </form>
        )
    }
}

export default Search;