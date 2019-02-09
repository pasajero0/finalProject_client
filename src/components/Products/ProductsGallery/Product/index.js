import React, {Component} from 'react';
import './Product.scss'

class Product extends Component {

    render() {
        console.log(this.props);
        return (
            <>
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
            </>
        );
    }
}

export default Product;