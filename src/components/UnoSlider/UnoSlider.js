import React from "react";
import Slider from "react-slick";
import "./slick.scss";
import "./slick-theme.scss";
import img1 from './img/1.jpg';
import img2 from './img/2.jpg';
import img3 from './img/3.jpg';
import img4 from './img/4.jpg';
import img5 from './img/5.jpg';


class UnoSlider extends React.Component {
    render() {
        let settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };

        const images = [
            {
                id: 1,
                src: img1
            },
            {
                id: 2,
                src: img2
            },
            {
                id: 3,
                src: img3
            },
            {
                id: 4,
                src: img4
            },
            {
                id: 5,
                src: img5
            },
        ];

        return (

            <Slider {...settings} className="slider">

                <div className="slide_1">
                    {/*<img className="slider__img" alt="slide1"/> */}
                    {
                    images.map(image =>
                        <div key={image}><img src={img1}/></div>
                    )
                }
                </div>
                <div className="slide_1">
                    {/*<img className="slider__img" alt="slide2"/> */}
                    {
                    images.map(image =>
                        <div key={image}><img src={img2}/></div>
                    )
                }
                </div>
                <div className="slide_1">
                    {/*<img className="slider__img" alt="slide3"/> */}

                    {
                    images.map(image =>
                        <div key={image}><img src={img3}/></div>
                    )
                }
                </div>
                <div className="slide_1">
                    {/*<img className="slider__img" alt="slide4"/>*/}
                    {
                    images.map(image =>
                        <div key={image}><img src={img4}/></div>
                    )
                }
                </div>
                <div className="slide_1">
                    {/*<img className="slider__img" alt="slide5"/> */}
                    {
                    images.map(image =>
                        <div key={image}><img src={img5}/></div>
                    )
                }
                </div>
            </Slider>
        );
    }
}

export default UnoSlider;