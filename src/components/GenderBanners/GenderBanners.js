import React from 'react';
import { NavLink } from 'react-router-dom';
import './GenderBanners.scss';

const GenderBanners = () => {
  return (
    <section className="genderBanners">
      <div className="container">
        <div className="genderBanners__content">
          <NavLink to="/women" className="genderBanner">
            <img
              src="https://images.asos-media.com/products/vero-moda-bright-check-double-breasted-blazer/11789064-3?$XXL$&wid=513&fit=constrain"
              alt="Women banner"
              className="genderBanner__img" />
            <NavLink to="/women" className="genderBanner__link">Shop women</NavLink>
          </NavLink>
          <NavLink to="/men" className="genderBanner men">
            <img
              src="https://images.asos-media.com/products/river-island-skinny-suit-waistcoat-in-grey-check/11369318-1-grey?$XXL$&wid=513&fit=constrain"
              alt="Men banner"
              className="genderBanner__img" />
            <NavLink to="/men" className="genderBanner__link">Shop men</NavLink>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default GenderBanners;