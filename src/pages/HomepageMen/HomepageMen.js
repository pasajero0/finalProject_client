import React, {Component} from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ProductsList from '../../components/ProductsList/ProductsList.js';
// import SimpleSlider from '../../components/SimpleSlider/SimpleSlider.js'
import Cork from '../../components/Cork/Cork.jsx';

class HomepageMen extends Component {
    render() {
        return (
            <>
                <Header/>
                <Cork title='Slider' background='lightyellow'></Cork>
                {/*<SimpleSlider/>*/}
                <ProductsList/>
                {/*<Cork title='Homepage' background='lightyellow'></Cork>*/}
                <Footer/>
            </>
        )
    }
}

export default HomepageMen;