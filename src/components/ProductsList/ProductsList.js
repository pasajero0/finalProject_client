import React, {Component} from 'react';
import ProductListEntry from '../ProductListEntry/ProductListEntry.js';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {fetchProducts} from '../../actions/products'
import './ProductsList.scss';

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

class ProductsList extends Component {

    componentDidMount = () => {
        this.props.fetchProducts()
    };

    render() {
        console.log(this.props.isFetching);
        let productsList = this.props.products.map(item => {
            return <ProductListEntry key={item.id}
                                     img={item.img}
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

ProductListEntry.propTypes = propTypes;

const mapStateToProps = (state) => {
    return {
        products: state.products.productsList,
        isFetching: state.products.isFetching
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchProducts: () => dispatch(fetchProducts())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);

