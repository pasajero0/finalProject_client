import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './AboutUs.scss'


const AboutUs = () => (
  <>
    <Header />
    <div className="container">
      <div className="aboutUs">
        <h1 className="aboutUs__header">About UNO Store</h1>
        <img className="aboutUs__img" src={process.env.PUBLIC_URL + '/footer-images/shop.jpg'} /> 
        <p className = "aboutUs__content" >
          UNO is a American born active - inspired brand which designs, sources and markets cool and distinctive products. The brand originated in the late 80 s as a niche t - shirt brand.
        </p>
        <p className = "aboutUs__content" >
        Over the years, the brand quickly gained popularity with those in the know who appreciated the innovativeness that Bench was able to demonstrate. Bench has developed into a widely and highly respected city clothing brand that was named the coolest Streetwear brand by the 2007 / 2008 CoolBrands panel. Bench today is a global brand presenting a carefully selected range of multipurpose functional clothing suited to the needs of 24 hour life.
        </p>
        <p className = "aboutUs__content" >
         An iconic piece of heritage product, the hoody has been Bench’ s area of expertise since the brands inception a quarter of a century ago. The ultimate in Multipurpose City Clothing, the Bench hoody has been a staple wardrobe component
         for many a city dweller the world over.  Design features include;
         anatomically constructed hood shapes engineered
         for enhanced peripheral vision, displaced seams
         for enhanced comfort, reflective trims
         for improved visibility, thumb holes
         for added comfort and protection, device pockets to keep possessions secure and underarm eyelets to expel excess heat and aide temperature control.ne deseruisse, cum ea minim copiosae. Sed impetus veritus ne, usu odio nisl lobortis in , an graeco fastidii ius.Quando expetenda id mea, cu movet phaedrum liberavisse sea, te tation lobortis vel.Sit ad quot dolorum instructior, aliquid phaedrum consectetuer per no.
        </p>
    </div>
      </div>
    
    <Footer />
  </>
);

export default AboutUs;