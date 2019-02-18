import React, {Component} from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ProductsList from '../../components/ProductsList/ProductsList.js';
import UnoSlider from '../../components/UnoSlider/UnoSlider';
import Cork from '../../components/Cork/Cork.jsx';

class HomepageMen extends Component {
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

export default HomepageMen;