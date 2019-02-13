import React, {Component} from 'react';
import './Banner.scss'

class Banner extends Component {
    render() {
        return (
            <>
                <div className='bannerItem'>
                    <a href="#" className="bannerItem__link">
                        <img src={this.props.imgSrc}
                             alt='Dress'
                             className='productItem__img'/>
                    </a>
                </div>
            </>
        );
    }
}

export default Banner;