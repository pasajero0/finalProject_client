import React, {Component} from 'react';
import Header from '../../components/Header/Header.js';
import Footer from '../../components/Footer/Footer.js';
import Product from '../../components/Product/Product.js'

class ProductSingle extends Component {

    render() {
        return (
            <>
                <Header/>
                <Product/>
                <Footer/>
            </>
        )
    }
}


export default ProductSingle;
