import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../../components/Layout/Layout';
import GenderBanners from '../../components/GenderBanners/GenderBanners';
import Slider from '../../components/Slider/Slider';
import PromoProductsList from '../../components/PromoProductsList/PromoProductsList';
import LogoSlider from '../../components/LogoSlider/LogoSlider';
import FooterContacts from '../../components/FooterContacts/FooterContacts';

const ImagesDir = process.env.PUBLIC_URL;

const Homepage = () => (
  <Layout>
    <Helmet>
      <title>Boutique store for latest in Men’s and Women’s fashion.</title>
      <meta name="keywords" content="uno, men's clothing, women's clothing" />
      <meta
        name="description"
        content="Luxury Men's and Women's Clothing, Made in Italy since 1934.
       UNO is a paradigm of Italian craftsmanship: discover how timeless style and contemporary elegance
        come together in our new Clothing collection." />
    </Helmet>
    <Slider
      imagesBig={[
        { id: 1, src: `${ImagesDir}/slider-images/1.jpg`, alt: '' },
        { id: 2, src: `${ImagesDir}/slider-images/2.jpg`, alt: '' },
        { id: 3, src: `${ImagesDir}/slider-images/3.jpg`, alt: '' },
        { id: 4, src: `${ImagesDir}/slider-images/4.jpg`, alt: '' },
        { id: 5, src: `${ImagesDir}/slider-images/5.jpg`, alt: '' },
      ]}

      imagesSmall={[
        { id: 1, src: `${ImagesDir}/slider-images/1_1.jpg`, alt: '' },
        { id: 2, src: `${ImagesDir}/slider-images/2_1.jpg`, alt: '' },
        { id: 3, src: `${ImagesDir}/slider-images/3_1.jpg`, alt: '' },
        { id: 4, src: `${ImagesDir}/slider-images/4_1.jpg`, alt: '' },
        { id: 5, src: `${ImagesDir}/slider-images/5_1.jpg`, alt: '' },
      ]}
      settings={{
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true
      }}
    />
    <PromoProductsList department="men" type="sale" />
    <GenderBanners />
    <LogoSlider
      images={[
        { id: 1, src: `${ImagesDir}/logo_images/Adidas.jpg`, alt: 'Adidas' },
        { id: 2, src: `${ImagesDir}/logo_images/Bershka.jpg`, alt: 'Bershka' },
        { id: 3, src: `${ImagesDir}/logo_images/Diesel.jpg`, alt: 'Diesel' },
        { id: 4, src: `${ImagesDir}/logo_images/Geox.jpg`, alt: 'Geox' },
        { id: 5, src: `${ImagesDir}/logo_images/HM.jpg`, alt: 'HM' },
        { id: 6, src: `${ImagesDir}/logo_images/Mango.jpg`, alt: 'mango' },
        { id: 7, src: `${ImagesDir}/logo_images/Massimo_Dutti.jpg`, alt: 'Massimo_Dutti' },
        { id: 8, src: `${ImagesDir}/logo_images/Nike.jpg`, alt: 'Nike' },
        { id: 9, src: `${ImagesDir}/logo_images/Prada.jpg`, alt: 'Prada' },
        { id: 10, src: `${ImagesDir}/logo_images/Pull_Bear.jpg`, alt: 'Pull_Bear' },
        { id: 11, src: `${ImagesDir}/logo_images/Puma.jpg`, alt: 'Puma' },
        { id: 12, src: `${ImagesDir}/logo_images/Zara.jpg`, alt: 'Zara' },
      ]}
      settings = {{
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        responsive: [
          {
            breakpoint: 980,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
            }},
          {
            breakpoint: 330,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }}
        ]
      }}
    />
    <FooterContacts />
  </Layout>
);

export default Homepage;