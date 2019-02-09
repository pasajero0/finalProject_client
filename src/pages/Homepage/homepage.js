import React, {Component} from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
// import './homepage.scss';

////////////////////////////////////
import Cork from '../../components/Cork/Cork.js'
////////////////////////////////////

class Homepage extends Component  {
    
    render(){
        return (
           <>
    				<Header></Header>
    				<Cork title='Homepage' background='beige'></Cork>
    				<Cork title='some section' background='lightgreen'></Cork>
    				<Cork title='another section' background='lightyellow'></Cork>
    				<Footer></Footer>
           </>
        )
    }
}

export default Homepage;