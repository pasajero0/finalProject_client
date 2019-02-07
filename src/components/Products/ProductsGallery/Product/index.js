import React, {Component} from 'react';
import './Product.scss'

class Product extends Component {

    render() {
        console.log(this.props);
        return (
            <>
                <div className='productItem'>
                    <a href="#" className="productItem__link">
                        <img src={this.props.imgSrc}
                             alt='Dress'
                             className='productItem__img'/>
                    </a>
                </div>
            </>
        );
    }
}

export default Product;