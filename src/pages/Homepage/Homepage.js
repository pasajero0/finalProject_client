import React, {Component} from 'react';
import Header from '../../components/Header/Header.js';
import Footer from '../../components/Footer/Footer.js';
import Banner from '../../components/GenderBanners/GenderBanners.js';


class Homepage extends Component {
    render() {
        return (
            <>
                <Header/>
                <Banner/>
                <Footer/>
            </>
        )
    }
}

export default Homepage;