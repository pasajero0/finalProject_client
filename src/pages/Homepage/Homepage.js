import React, {Component} from 'react';
import Header from '../../components/Header/Header.js';
import Footer from '../../components/Footer/Footer.js';
import ProductsList from '../../components/ProductsList/ProductsList.js'
import UnoSlider from '../../components/UnoSlider/UnoSlider';
import Cork from '../../components/Cork/Cork.jsx'

class Homepage extends Component {
    render() {
        return (
            <>
                <Header/>
                <UnoSlider/>
                <ProductsList/>
                {/*<Cork title='Homepage' background='lightyellow'></Cork>*/}
                <Footer/>
            </>
        )
    }
}

export default Homepage;