import React, {Component} from 'react';
import Header from '../Header';
import Footer from '../Footer';
// import './homepage.scss';

////////////////////////////////////
import Cork from '../Cork/Cork.js'
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