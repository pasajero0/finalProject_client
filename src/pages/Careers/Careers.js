import React, {Component } from 'react';
import Header from '../../components/Header/Header';
import FooterNavMenu from '../../components/FooterNavMenu/FooterNavMenu';
import { FaCheck } from "react-icons/fa";
import './Careers.scss'

class Careers extends Component {
  
  state = {
    showText: false,
    clicked: false
  }

  toggleText = () => {
    this.setState({
      showText: !this.state.showText,
      clicked: !this.state.clicked
    })
  }

render() {
return (
  <>
    <Header />
    <div className="container">
    <div className="careers__wrapper">
      <h1 className="careers__title">Join our team!</h1>
      <div className="careers">
        <div className="careers__imgBlock">
          <img className="careers__img" src={process.env.PUBLIC_URL + '/footer-images/career2.jpg'} alt="vacancy" />
        </div>
        <div className="careers__description">
          <h2>Our Core Values:</h2>
          <ul className="careers__values">
            <li><FaCheck className="faCheck" />Customer Commitment</li>
            <li><FaCheck className="faCheck" />Quality</li>
            <li><FaCheck className="faCheck" />Integrity</li>
            <li><FaCheck className="faCheck" />Teamwork</li>
            <li><FaCheck className="faCheck" />Respect for People</li>
            <li><FaCheck className="faCheck" />A Will to Win</li>
          </ul>
        </div>
      </div>


        <div className="careers__vacancy">
        <h2 className="careers__vacancyTitle">Store Manager</h2>
        <p>
          The overall goal of the Store Manager is to drive sales, control expenses, recruit and develop personnel and monitor gross margin, while maintaining consistency in visual merchandising, store maintenance, compliance to all operational procedures and ensuring optimum customer service through the use of the UNO Non-Negotiable standards in their respective store.
        </p>
        <p onClick={this.toggleText} className="showText">{this.state.clicked ? 'Show less...' : 'Show more...'}</p>
         {this.state.showText ? 
         <ul className="careers__list">
            <li>Attain or surpass all sales objectives from Retail Operations</li>
            <li>Maintain store wage costs and shrink rates from Retail Operations</li>
            <li>Must achieve Personal Sales goal based on weekly store sales target</li>
            <li>Implement the use of the Bench Non-Negotiable Sales standards at all times, with all Management and Staff</li>
            <li>Demonstrate the importance of customer service</li>
            <li>Strive to rectify all customer service issues at store level without allowing them to escalate to Head Office</li>
          </ul>
         : null}
          <a className="careers__cvButton" href="mailto:welcome@unostore.com?subject=CV: Store Manager">Send CV</a>
        </div>
    </div>    
    </div>
    <FooterNavMenu />
  </>
);
}  
}


export default Careers;