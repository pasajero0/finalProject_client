import React, {Component} from 'react';
import Header from '../../components/Header/Header.js';
import Footer from '../../components/Footer/Footer.js';
import Basket from '../../components/Basket/Basket.js';


class MyBasket extends Component {

    render() {
        return (
            <>
                <Header/>
                <Basket/>
                <Footer/>
            </>
        )
    }
}


export default MyBasket;