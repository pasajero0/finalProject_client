import React, {Component} from 'react';
import './Product.scss'

class Product extends Component {

    render() {
        return (
            <div className="productItemContent">
                <div className='productItem'>
                    <a href="#" className="productItemImg__link">
                        <img src={this.props.imgSrc}
                             alt='Dress'
                             className='productItemImg__img'/>
                    </a>
                    <a href="#" className="productItemTitle__link">
                        <span className="productItemTitle__title">{this.props.title}</span>
                    </a>
                    <span className="productItemPrice">{this.props.price}</span>
                </div>
            </div>
        );
    }
}

export default Product;