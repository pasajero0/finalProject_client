import React, {Component} from 'react';
import ProductsHeader from './ProductsHeader'
import ProductsGallery from './ProductsGallery'
import ProductsBanners from './ProductsBanners'

import './Products.scss'

class Products extends Component {
    render() {
        return (
            <>
                <section className='products'>
                    <ProductsHeader/>
                    <ProductsGallery/>
                    <ProductsBanners/>
                </section>
            </>
        );
    }
}

export default Products;