import React, {Component} from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Products from '../../components/Products';

import UnoSlider from '../../components/UnoSlider/UnoSlider';
import Cork from '../../components/Cork'

class Homepage extends Component {

    render() {
        return (
            <>
                <Header/>
                <UnoSlider/>
                <Products/>
                {/*<Cork title='Homepage' background='lightyellow'></Cork>*/}
                <Footer/>
            </>
        )
    }
}

export default Homepage;