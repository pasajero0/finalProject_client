import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import GenderBanners from '../../components/GenderBanners/GenderBanners';
import Slider from '../../components/Slider/Slider';

<<<<<<< HEAD
const ImagesDir = process.env.PUBLIC_URL;

const Homepage = () => (
  <>
    <Header />
    <Slider
      images={[
        { id: 1, src: `${ImagesDir}/slider-images/1.jpg`, alt: '' },
        { id: 2, src: `${ImagesDir}/slider-images/2.jpg`, alt: '' },
        { id: 3, src: `${ImagesDir}/slider-images/3.jpg`, alt: '' },
        { id: 4, src: `${ImagesDir}/slider-images/4.jpg`, alt: '' },
        { id: 5, src: `${ImagesDir}/slider-images/5.jpg`, alt: '' },
      ]}
      settings={{
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      }}
    />
    <GenderBanners />
    <Footer />
  </>
);
=======
class Homepage extends Component {
    render() {
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
                            slidesToScroll: 1,
                            autoplay: true,
                            autoplaySpeed: 2000,
                            pauseOnHover: true
                        }}
                />
                <ProductsList/>
                {/*<Cork title='Homepage' background='lightyellow'></Cork>*/}
                <Footer/>
            </>
        )
    }
}
>>>>>>> slider

export default Homepage;