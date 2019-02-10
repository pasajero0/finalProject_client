import React, {Component} from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Products from '../../components/Products'

////////////////////////////////////
import Cork from '../../components/Cork'
////////////////////////////////////

class Homepage extends Component {

    render() {
        return (
            <>
                <Header/>
                <Cork title='Slider' background='lightgreen'></Cork>
                <Products/>
                {/*<Cork title='Homepage' background='lightyellow'></Cork>*/}
                <Footer/>
            </>
        )
    }
}

export default Homepage;