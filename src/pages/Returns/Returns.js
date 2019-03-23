import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './Returns.scss'


const Returns = () => (
  <>
    <Header />
    <div className="container">
     <div className="returns">
        <h1 className="returns__header">Returns</h1>
        <div className="returns__longLine"/>
        <h2 className="returns__header_small">LIMITED TIME OFFER - FREE RETURN SHIPPING!</h2>
        <p className ="returns__content">
          Free
          return shipping
          for any orders placed up to March 27th, 2019. A pre - paid
          return shipping label will be provided to you at no cost via email upon Return Merchandise Authorization(RMA) request. 
          See details below in our Standard Policy to learn how to file your RMA.
        </p>
        <h2 className="returns__header_small">STANDARD RETURN POLICY</h2>
        <p className ="returns__content">
          We want you to be happy with your purchases.If you have a problem and wish to
          return any merchandise, just
          return it using the instructions below and we will be happy to credit or refund it.

          Prior to shipping back your
          return, an e-mail must be sent to <span>welcome@unostore.com</span> requesting authorization
          for
          return, detailing the reasons
          for the request and providing daytime and evening phone numbers in
              case the Company needs to reach you.The subject line of the e - mail should be "RA - Order number xxxxx (put actual order number here). The Company will then issue a Return Authorization Number (RAN) which must be written on the original invoice you received and this invoice must accompany the merchandise returned.
        </p>
        </div>
      </div>
    <Footer />
  </>
);

export default Returns;