import React, {Component} from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Products from '../../components/Products';
// import SimpleSlider from '../../components/SimpleSlider/SimpleSlider.js'
import Cork from '../../components/Cork';

class HomepageWomen extends Component {

    render() {
        return (
            <>
                <Header/>
                <Cork title='Slider' background='lightyellow'></Cork>
                {/*<SimpleSlider/>*/}
                <Products/>
                {/*<Cork title='Homepage' background='lightyellow'></Cork>*/}
                <Footer/>
            </>
        )
    }
}

export default HomepageWomen;