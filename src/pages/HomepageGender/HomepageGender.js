import React, {Component} from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ProductsList from '../../components/ProductsList/ProductsList.js';
import Slider from '../../components/Slider/Slider.js';


class HomepageGender extends Component {
    render() {
        // console.log("==================", this.props);

        const {
            match: {
                params: {department}
            }
        } = this.props;

        return (
            <>
                <Header/>
                <Slider images={[
                    {id: 1, src: process.env.PUBLIC_URL + '/slider-images/1.jpg', alt: ''},
                    {id: 2, src: process.env.PUBLIC_URL + '/slider-images/2.jpg', alt: ''},
                    {id: 3, src: process.env.PUBLIC_URL + '/slider-images/3.jpg', alt: ''},
                    {id: 4, src: process.env.PUBLIC_URL + '/slider-images/4.jpg', alt: ''},
                    {id: 5, src: process.env.PUBLIC_URL + '/slider-images/5.jpg', alt: ''}
                ]}
                        settings={{
                            dots: true,
                            infinite: true,
                            speed: 500,
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }}
                />
                <ProductsList department={department}/>
                <Footer/>
            </>
        )
    }
}

export default HomepageGender;