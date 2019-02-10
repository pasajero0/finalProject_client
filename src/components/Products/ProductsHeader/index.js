import React, {Component} from 'react';
import ProductsList from './ProductsList'
import './ProductsHeader.scss'

class ProductsHeader extends Component {
    render() {
        return (
            <>
                <header className='productsHeader'>
                    <div className="container">
                        <ProductsList />
                    </div>
                </header>
            </>
        );
    }
}

export default ProductsHeader;