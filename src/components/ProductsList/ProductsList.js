import React, {Component} from 'react';
import ProductListEntry from '../ProductListEntry/ProductListEntry.js';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {fetchAllProducts} from '../../actions/products'

import './ProductsList.scss';

class ProductsList extends Component {
    static propTypes = {
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

    componentDidMount = () => {
        this.props.fetchAllProducts()
    };

    render() {
        console.log(this.props.isFetching)
        let productsList = this.props.products.map(item => {
            return <ProductListEntry key={item.id}
                                     imgSrc={item.img}
                                     name={item.name}
                                     price={item.price}/>
        });
        return (
            <div className='productsList'>
                <div className="container">
                    <div className='productsListContent'>
                        {this.props.isFetching ? <span className="productsList__loader">Загрузка...</span> : productsList}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products.productsList,
        isFetching: state.products.isFetching
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAllProducts: () => dispatch(fetchAllProducts())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);

