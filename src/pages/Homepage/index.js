import React, {Component} from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Products from '../../components/Products'

import Slider from '../../components/Slider/Slider.js'
import Cork from '../../components/Cork'

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