import React, {Component} from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Cart from '../../components/Cart/Cart';


class MyCart extends Component {

    render() {
        return (
            <>
                <Header/>
                <Cart/>
                <Footer/>
            </>
        )
    }
}


export default MyCart;
