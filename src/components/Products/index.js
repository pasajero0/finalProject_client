import React, {Component} from 'react';
import ProductsGallery from './ProductsGallery'
// import ProductsBanners from './ProductsBanners'

import './Products.scss'

class Products extends Component {
    render() {
        return (
            <section className='products'>
                <ProductsGallery/>
                {/*<ProductsBanners/>*/}
            </section>
        );
    }
}

export default Products;