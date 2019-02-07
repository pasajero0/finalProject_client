import React, { Component } from 'react';
import './ProductsList.scss'
// import '../../../../_vars.scss'

class ProductsList extends Component {
    render() {
        return (
            <>
            <ul className="productsList">
                <li className="productsList__item">
                    <a data-filter="productsList__item_all" href="javascript://"
                       className="all productsList__link active">All</a>
                </li>
                <li className="productsList__item">
                    <a data-filter="productsList__item_clothing" href="javascript://"
                       className="clothing productsList__link">Clothing</a>
                </li>
                <li className="productsList__item">
                    <a data-filter="productsList__item_accessories" href="javascript://"
                       className="accessories productsList__link">Accessories</a>
                </li>
                <li className="productsList__item">
                    <a data-filter="productsList__item_shoes" href="javascript://"
                       className="shoes productsList__link">Shoes</a>
                </li>
                <li className="productsList__item">
                    <a data-filter="productsList__item_outdoor" href="javascript://"
                       className="outdoor productsList__link">Outdoor</a>
                </li>
                <li className="productsList__item">
                    <a data-filter="productsList__item_sport" href="javascript://"
                       className="sport productsList__link">Sport</a>
                </li>
            </ul>
            </>
        );
    }
}

export default ProductsList;