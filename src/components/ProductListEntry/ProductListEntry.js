import React, {Component} from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import AddProductToCartIcon from '../AddProductToCartIcon/AddProductToCartIcon.js';
import SaveProductForLaterIcon from '../SaveProductForLaterIcon/SaveProductForLaterIcon.js';
import './ProductListEntry.scss';
import PropTypes from "prop-types";


const propTypes = {
    gender: PropTypes.string,
    // category: PropTypes.string,
    id: PropTypes.number,
    img: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.shape({
        retail: PropTypes.number,
        sale: PropTypes.number,
    }),
    // color: PropTypes.string,
    // size: PropTypes.string,
    // text: PropTypes.string,
};

class ProductListEntry extends Component {

    render() {
        const {productsList} = this.props;

        let productListEntryRender = productsList.map((product, index) => {
            return (
                <div className="productListEntry" key={index}>
                    <div className='productListEntryItem'>
                        <NavLink to={`${product.gender}/${product.id}`} className="productListEntryItem__imgLink">
                            <img src={product.img}
                                 alt={product.name}
                                 className='productListEntryItem__img'/>
                        </NavLink>
                        <NavLink to={`${product.gender}/${product.id}`} className="productListEntryItem__nameLink">
                            {product.name}
                        </NavLink>
                        <span
                            className="productListEntryItem__price">${product.price.retail}</span>
                        <SaveProductForLaterIcon className="saveForLaterIcon"/>
                        <AddProductToCartIcon className="addProductToCartIcon"/>
                    </div>
                </div>
            )
        });

        return (
            <>
                {productListEntryRender}
            </>
        );
    }
}

ProductListEntry.propTypes = propTypes;

const mapStateToProps = (state) => {
    return {
        productsList: state.products.productsList,
    }
};

export default connect(mapStateToProps)(ProductListEntry);