import React from 'react';
import './StarRating.scss'

const StarRating = () => {
    return (
        <div className="starRating">
            <div className="starRating__wrap">
                <input className="starRating__input" id="star-rating-5" type="radio" name="rating"
                       value="5"/>
                <label className="starRating__ico fa fa-star-o fa-lg" htmlFor="star-rating-5"
                       title="5 out of 5 stars">
                </label>
                <input className="starRating__input" id="star-rating-4" type="radio"
                       name="rating" value="4"/>
                <label className="starRating__ico fa fa-star-o fa-lg"
                       htmlFor="star-rating-4" title="4 out of 5 stars">
                </label>
                <input className="starRating__input" id="star-rating-3" type="radio"
                       name="rating" value="3"/>
                <label className="starRating__ico fa fa-star-o fa-lg"
                       htmlFor="star-rating-3" title="3 out of 5 stars">
                </label>
                <input className="starRating__input" id="star-rating-2" type="radio"
                       name="rating" value="2"/>
                <label className="starRating__ico fa fa-star-o fa-lg"
                       htmlFor="star-rating-2" title="2 out of 5 stars">
                </label>
                <input className="starRating__input" id="star-rating-1"
                       type="radio" name="rating" value="1"/>
                <label className="starRating__ico fa fa-star-o fa-lg"
                       htmlFor="star-rating-1" title="1 out of 5 stars">
                </label>
            </div>
        </div>
    )
};

export default StarRating;