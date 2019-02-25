import React, {Component} from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import AddProductToCartIcon from '../AddProductToCartIcon/AddProductToCartIcon.js';
import SaveProductForLaterIcon from '../SaveProductForLaterIcon/SaveProductForLaterIcon.js';
import './ProductListEntry.scss';
import PropTypes from "prop-types";

const propTypes = {
    // gender: PropTypes.string,
    // category: PropTypes.string,
    id: PropTypes.number,
    img: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.shape({
        sum: PropTypes.number,
        currency: PropTypes.string,
    }),
    // color: PropTypes.string,
    // size: PropTypes.string,
    // text: PropTypes.string,
};

class ProductListEntry extends Component {

    render() {
        let productListEntryItem = this.props.products.filter((product) => {
            return product.id
        });

        let productListEntryItemRender = (
            <div className="productListEntry" key={productListEntryItem[0].id}>
                <div className='productListEntryItem'>
                    <NavLink to={`/products/${productListEntryItem[0].id}`} className="productListEntryItem__imgLink">
                        <img src={productListEntryItem[0].img}
                             alt={productListEntryItem[0].name}
                             className='productListEntryItem__img'/>
                    </NavLink>
                    <NavLink to={`/products/${productListEntryItem[0].id}`} className="productListEntryItem__nameLink">
                        {productListEntryItem[0].name}
                    </NavLink>
                    <span
                        className="productListEntryItem__price">{productListEntryItem[0].price.currency}{productListEntryItem[0].price.sum}</span>
                    <SaveProductForLaterIcon className="saveForLaterIcon"/>
                    <AddProductToCartIcon className="addProductToCartIcon"/>
                </div>
            </div>
        );

        return (
            <>
                {productListEntryItemRender}
            </>
        );
    }
}

ProductListEntry.propTypes = propTypes;

const mapStateToProps = (state) => {
    return {
        products: state.products.productsList,
    }
};

export default connect(mapStateToProps)(ProductListEntry);