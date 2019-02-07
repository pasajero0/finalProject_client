import React, {Component} from 'react';
import Product from './Product'
import './ProductsGallery.scss'

class ProductsGallery extends Component {
    state = {
        products: [
            {
                id: 1,
                img: 'https://cooperst-media.global.ssl.fastly.net/media/wysiwyg/Category_Block_-_Dress.jpg'
            },
            {
                id: 2,
                img: 'https://cooperst-media.global.ssl.fastly.net/media/wysiwyg/Category_Block_-_Dress.jpg'
            },
            {
                id: 3,
                img: 'https://cooperst-media.global.ssl.fastly.net/media/wysiwyg/Category_Block_-_Dress.jpg'
            },
            {
                id: 4,
                img: 'https://cooperst-media.global.ssl.fastly.net/media/wysiwyg/Category_Block_-_Dress.jpg'
            },
            {
                id: 5,
                img: 'https://cooperst-media.global.ssl.fastly.net/media/wysiwyg/Category_Block_-_Dress.jpg'
            }
        ]
    };

    render() {

        return (
            <>
                <div className='productsGallery'>
                    <div className="container">
                        <div className='productsGalleryContent'>
                            {this.state.products.map(item => {
                                return <Product key={item.id} imgSrc={item.img}/>
                            })}

                            {/*                        <Product/>
                        <Product/>
                        <Product/>
                        <Product/>
                        <Product/>
                        <Product/>
                        <Product/>
                        <Product/>
                        <Product/>
                        <Product/>
                        <Product/>
                        <Product/>*/}
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default ProductsGallery;

