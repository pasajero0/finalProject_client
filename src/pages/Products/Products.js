import React, {Component} from 'react';
import Header from '../../components/Header/Header.js';
import Footer from '../../components/Footer/Footer.js';
import ProductsList from '../../components/ProductsList/ProductsList.js'

class Products extends Component {

    render() {
        return (
            <>
                <Header/>
                <ProductsList/>
                <Footer/>
            </>
        )
    }
}


export default Products;
