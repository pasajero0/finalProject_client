import React from 'react';
import {NavLink} from 'react-router-dom';
import './GenderBanners.scss';

const GenderBanners = () => {
  return (
    <section className="genderBanners">
      <div className="container">
        <div className="genderBanners__content">
          <NavLink to="/women" className="genderBanner">
            <img
              src="https://social.massimodutti.com/paper/wp-content/uploads/2019/02/road-17.jpg"
              alt="Women banner"
              className="genderBanner__img"/>
            <span className="genderBanner__text">Shop women</span>
          </NavLink>
          <NavLink to="/men" className="genderBanner men">
            <img
              src="http://blog.sight-management.com/wp-content/uploads/2019/02/think-07-1224x761.jpg"
              alt="Men banner"
              className="genderBanner__img"/>
            <span className="genderBanner__text">Shop men</span>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default GenderBanners;