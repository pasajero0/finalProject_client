import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import AddProductToCartIcon from '../AddProductToCartIcon/AddProductToCartIcon.js';
import SaveProductForLaterIcon from '../SaveProductForLaterIcon/SaveProductForLaterIcon.js';
import './ProductListEntry.scss';
import PropTypes from "prop-types";

const propTypes = {
    gender: PropTypes.string,
    id: PropTypes.string,
    pictures: PropTypes.string,
    name: PropTypes.string,
    prices: PropTypes.shape({
        retail: PropTypes.number,
        sale: PropTypes.number,
    })
};

class ProductListEntry extends Component {
    render() {
        // console.log("==========================", this.props.gender);
        return (
            <div className="productListEntry" key={this.props.index}>
                <div className='productListEntryItem'>
                    <NavLink to={`${this.props.gender}/${this.props.id}`} className="productListEntryItem__imgLink">
                        <img src={this.props.pictures}
                             alt={this.props.name}
                             className='productListEntryItem__img'/>
                    </NavLink>
                    <NavLink to={`${this.props.gender}/${this.props.id}`} className="productListEntryItem__nameLink">
                        {this.props.name}
                    </NavLink>
                    <span
                        className="productListEntryItem__price">${this.props.prices.retail}
                    </span>
                    <SaveProductForLaterIcon className="saveForLaterIcon"/>
                    <AddProductToCartIcon className="addProductToCartIcon"/>
                </div>
            </div>
        )
    }
}

ProductListEntry.propTypes = propTypes;

export default ProductListEntry;