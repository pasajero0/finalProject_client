import React from 'react';
import './StarRating.scss';

const StarRating = () => {
  return (
    <div className="starRating">
      <span className="starRating__item fa fa-star checked" />
      <span className="starRating__item fa fa-star checked" />
      <span className="starRating__item fa fa-star checked" />
      <span className="starRating__item fa fa-star" />
      <span className="starRating__item fa fa-star" />
    </div>
  );
};

export default StarRating;