import React, {Component} from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Products from '../../components/Products'
<<<<<<< HEAD

////////////////////////////////////
import Slider from '../../components/Slider/Slider.js'
////////////////////////////////////
=======
import SimpleSlider from '../../components/SimpleSlider/SimpleSlider.js'
import Cork from '../../components/Cork'
>>>>>>> c3f8d84d934ce5ef710ef019b23d1767a4316672

class Homepage extends Component {

    render() {
        return (
            <>
                <Header/>
                <Slider/>
                <Products/>
                {/*<Cork title='Homepage' background='lightyellow'></Cork>*/}
                <Footer/>
            </>
        )
    }
}

export default Homepage;