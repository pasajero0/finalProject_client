import React, {Component} from 'react';
import Header from '../../components/Header/Header.js';
import Footer from '../../components/Footer/Footer.js';
import GenderBanners from '../../components/GenderBanners/GenderBanners.js';
import Slider from '../../components/Slider/Slider';

const sliderImagesDir = process.env.PUBLIC_URL;

class Homepage extends Component {
    render() {
        return (
            <>
                <Header/>
                <Slider
                  images={[
                    { id: 1, src: `${sliderImagesDir}/slider-images/1.jpg`, alt: '' },
                    { id: 2, src: `${sliderImagesDir}/slider-images/2.jpg`, alt: '' },
                    { id: 3, src: `${sliderImagesDir}/slider-images/3.jpg`, alt: '' },
                    { id: 4, src: `${sliderImagesDir}/slider-images/4.jpg`, alt: '' },
                    { id: 5, src: `${sliderImagesDir}/slider-images/5.jpg`, alt: '' },
                  ]}
                  settings={{
                    dots: true,
                    infinite: true,
                    speed: 500,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                  }}
                />
                <GenderBanners/>
                <Footer/>
            </>
        )
    }
}

export default Homepage;