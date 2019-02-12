import React, {Component} from 'react';
import Product from '../../Product'
import './ProductsGallery.scss'

class ProductsGallery extends Component {
    state = {
        products: [
            {
                id: 1,
                img: 'https://cooperst-media.global.ssl.fastly.net/media/wysiwyg/Category_Block_-_Dress.jpg',
                title: 'Dress',
                price: '$89'
            },
            {
                id: 2,
                img: 'https://cooperst-media.global.ssl.fastly.net/media/wysiwyg/Category_Block_-_Dress.jpg',
                title: 'Dress',
                price: '$89'
            },
            {
                id: 3,
                img: 'https://cooperst-media.global.ssl.fastly.net/media/wysiwyg/Category_Block_-_Dress.jpg',
                title: 'Dress',
                price: '$89'
            },
            {
                id: 4,
                img: 'https://cooperst-media.global.ssl.fastly.net/media/wysiwyg/Category_Block_-_Dress.jpg',
                title: 'Dress',
                price: '$89'
            },
            {
                id: 5,
                img: 'https://cooperst-media.global.ssl.fastly.net/media/wysiwyg/Category_Block_-_Dress.jpg',
                title: 'Dress',
                price: '$89'
            },
            {
                id: 6,
                img: 'https://cooperst-media.global.ssl.fastly.net/media/wysiwyg/Category_Block_-_Dress.jpg',
                title: 'Dress',
                price: '$89'
            },
            {
                id: 7,
                img: 'https://cooperst-media.global.ssl.fastly.net/media/wysiwyg/Category_Block_-_Dress.jpg',
                title: 'Dress',
                price: '$89'
            },
            {
                id: 8,
                img: 'https://cooperst-media.global.ssl.fastly.net/media/wysiwyg/Category_Block_-_Dress.jpg',
                title: 'Dress',
                price: '$89'
            },
            {
                id: 9,
                img: 'https://cooperst-media.global.ssl.fastly.net/media/wysiwyg/Category_Block_-_Dress.jpg',
                title: 'Dress',
                price: '$89'
            },
            {
                id: 10,
                img: 'https://cooperst-media.global.ssl.fastly.net/media/wysiwyg/Category_Block_-_Dress.jpg',
                title: 'Dress',
                price: '$89'
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
                                return <Product key={item.id} imgSrc={item.img} title={item.title} price={item.price}/>
                            })}
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default ProductsGallery;

