import React from 'react';
import Header from '../../components/Header/Header';
import FooterNavMenu from '../../components/FooterNavMenu/FooterNavMenu';
import ScrollUpButton from '../../components/ScrollUpButton/ScrollUpButton';
import './Returns.scss'


const Returns = () => (
  <>
    <Header />
    <section className="returns">
        <div className="container">
         <div className="returns__content">
            <h1 className="returns__title">Returns</h1>
            <h2 className="returns__title_small">LIMITED TIME OFFER - FREE RETURN SHIPPING!</h2>
            <p className ="returns__text">
              Free
              return shipping
              for any orders placed up to March 27th, 2019. A pre - paid
              return shipping label will be provided to you at no cost via email upon Return Merchandise Authorization(RMA) request.
              See details below in our Standard Policy to learn how to file your RMA.
            </p>
            <h2 className="returns__title_small">STANDARD RETURN POLICY</h2>
            <p className ="returns__text">
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
    </section>
    <FooterNavMenu />
    <ScrollUpButton />
  </>
);

export default Returns;