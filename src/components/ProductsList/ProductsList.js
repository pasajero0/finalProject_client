import React, {Component} from 'react';
import ProductListEntry from '../ProductListEntry/ProductListEntry.js';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {fetchProducts} from '../../actions/products'
import './ProductsList.scss';

const propTypes = {
    productsList: PropTypes.shape({
        records: PropTypes.array,
        page: PropTypes.number,
        perPage: PropTypes.number,
        count: PropTypes.number,
        pagesTotal: PropTypes.number,
    }),
};

const defaultProps = {
    productsList: {
        records: [],
        page: 1,
        perPage: 10,
        count: 0,
        pagesTotal: 0,
    }
};

class ProductsList extends Component {



    componentDidMount = () => {
        const { department } = this.props;
        this.props.fetchProducts({department})
    };

    render() {
        const {productsList} = this.props;

        console.log("++++++++++++", productsList)
        let productsListEntry = productsList.records.map(item => {
            return <ProductListEntry key={item.id}
                                     img={item.pictures[0]}
                                     name={item.name}
                                     price={item.prices.retail}
            />
        });
        return (
            <section className='productsList'>
                <div className="container">
                    <div className='productsListContent'>
                        {this.props.isFetching ?
                            <span className="productsList__loader">Loading...</span> : productsListEntry}
                    </div>
                </div>
            </section>
        );
    }
}

ProductListEntry.propTypes = propTypes;
ProductListEntry.defaultProps = defaultProps;

const mapStateToProps = (state) => {
    return {
        productsList: state.products.productsList,
        isFetching: state.products.isFetching
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchProducts: () => dispatch(fetchProducts())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);

