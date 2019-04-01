import React from 'react';
import { NavLink } from 'react-router-dom';
import './GenderBanners.scss';

const ImagesDir = process.env.PUBLIC_URL;


const GenderBanners = () => {
  return (
    <section className="genderBanners">
      <div className="container">
        <div className="genderBanners__content">
          <NavLink to="/women" className="genderBanner">
            <img
              src={`${ImagesDir}/banners/4.jpg`}
              alt="Women banner"
              className="genderBanner__img" />
          </NavLink>
          <NavLink to="/men" className="genderBanner men">
            <img
              src={`${ImagesDir}/banners/8.jpg`}
              alt="Men banner"
              className="genderBanner__img" />
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default GenderBanners;