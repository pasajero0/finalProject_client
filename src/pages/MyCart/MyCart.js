import React, {Component} from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
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
