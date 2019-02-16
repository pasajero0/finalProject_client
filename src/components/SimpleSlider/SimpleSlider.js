import React from "react";
import Slider from "react-slick";
import "./SimpleSlider.scss";
import "./slick.css";
import "./slick-theme.css";


class SimpleSlider extends React.Component {
  render() {
    let settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings} className="slider">
        <div>
        <img className="slider__img" src="http://wood-house.ucoz.ru/_MG_7585.png"/>
        </div>
        <div>
        <img className="slider__img" src="http://wood-house.ucoz.ru/_MG_7585.png"/>
        </div>
        <div>
        <img className="slider__img" src="http://wood-house.ucoz.ru/_MG_7585.png"/>
        </div>
      </Slider>
    );
  }
}

export default SimpleSlider