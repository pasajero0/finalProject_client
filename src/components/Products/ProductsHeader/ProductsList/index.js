import React, { Component } from 'react';
import './ProductsList.scss'

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
                       className="clothing productsList__link">Category1</a>
                </li>
                <li className="productsList__item">
                    <a data-filter="productsList__item_accessories" href="javascript://"
                       className="accessories productsList__link">Category2</a>
                </li>
                <li className="productsList__item">
                    <a data-filter="productsList__item_shoes" href="javascript://"
                       className="shoes productsList__link">Category3</a>
                </li>
                <li className="productsList__item">
                    <a data-filter="productsList__item_outdoor" href="javascript://"
                       className="outdoor productsList__link">Category4</a>
                </li>
                <li className="productsList__item">
                    <a data-filter="productsList__item_sport" href="javascript://"
                       className="sport productsList__link">Category5</a>
                </li>
            </ul>
            </>
        );
    }
}

export default ProductsList;