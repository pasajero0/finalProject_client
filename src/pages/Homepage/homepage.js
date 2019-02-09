import React, {Component} from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Products from '../../components/Products'
// import './homepage.scss';

////////////////////////////////////
import Cork from '../../components/Cork/Cork.js'

////////////////////////////////////

class Homepage extends Component {

    render() {
        return (
            <>
                <Header/>
                <Cork title='Slider' background='lightgreen'></Cork>
                <Products/>
                {/*<Cork title='Homepage' background='beige'></Cork>*/}
                <Cork title='another section' background='lightyellow'></Cork>
                <Footer/>
            </>
        )
    }
}

export default Homepage;