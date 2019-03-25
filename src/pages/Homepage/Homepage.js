import React from 'react';
import Layout from '../../components/Layout/Layout';
import GenderBanners from '../../components/GenderBanners/GenderBanners';
import Slider from '../../components/Slider/Slider';
import PromoProductsList from '../../components/PromoProductsList/PromoProductsList';
import { Helmet } from "react-helmet";


const ImagesDir = process.env.PUBLIC_URL;

const Homepage = () => (




  <Layout>
  <Helmet>
  <title>Boutique store for latest in Men’s and Women’s fashion.</title>
    <meta name="keywords" content="uno, men's clothing, women's clothing" />
    <meta name="description" content="Luxury Men's and Women's Clothing, Made in Italy since 1934.
     UNO is a paradigm of Italian craftsmanship: discover how timeless style and contemporary elegance
      come together in our new Clothing collection." />
    </Helmet>
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
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
      }}
    />
    <PromoProductsList department="men" type="sale"/>

    <GenderBanners />
  </Layout>

);

export default Homepage;