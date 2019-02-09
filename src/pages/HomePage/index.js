import React, { Component } from 'react';
import Header from '../../components/Header';
import Products from '../../components/Products';
import Footer from '../../components/Footer';

class HomePage extends Component {
    render() {
        return (
            <>
                <Header/>
                <Products/>
                <Footer/>
            </>
        )
    }
}

export default HomePage


