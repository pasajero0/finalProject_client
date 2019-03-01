import React, {Component} from 'react';
import Header from '../../components/Header/Header.js';
import Footer from '../../components/Footer/Footer.js';
import GenderBanners from '../../components/GenderBanners/GenderBanners.js';


class Homepage extends Component {
    render() {
        return (
            <>
                <Header/>
                <GenderBanners/>
                <Footer/>
            </>
        )
    }
}

export default Homepage;