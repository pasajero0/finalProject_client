import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './Delivery.scss'


const Delivery = () => (
  <>
    <Header />
      <section className="delivery">
        <div className="container">
         <div className="delivery__content">
            <h1 className="delivery__title">Shipping & Delivery</h1>
            <h2 className="delivery__title_small">SHIPPING COSTS & DELIVERY OPTIONS</h2>
            <table className="delivery__table">
                <tr>
                    <th>Shipping Method</th>
                    <th>Cost</th>
                    <th>Delivery</th>
                </tr>
                <tr>
                    <td>Ship to a UNO Store</td>
                    <td>Free</td>
                    <td>4-9 Business Days</td>
                </tr>
                <tr>
                    <td>Standard</td>
                    <td>$14.95</td>
                    <td>3-6 Business Days</td>
                </tr>
                <tr>
                    <td>Express</td>
                    <td>$24.90</td>
                    <td>1-3 Business Days</td>
                </tr>
                <tr>
                    <td>Free Standard</td>
                    <td>$0.00</td>
                    <td>4-7 Business Days</td>
                </tr>
                </table>
            <h2 className="delivery__title_small">DELIVERY TERMS & CONDITIONS</h2>
            <p className="delivery__text">
              The Company will ship the Product(s) ordered by you according to the delivery method you have chosen and to the address indicated in the Order Confirmation.
              If you have ordered several products, we may deliver your order in separate shipments as each item becomes available, at no extra cost to you.To ensure prompt delivery we must have proper and complete address details and make one delivery charge per delivery address.
              Our customers also have the option of requesting delivery to their day - time locations, such as a work address.
              A daytime telephone number is required in
              case we or our delivery agents need to contact you. Delivery times provided by the Company are estimates only.The Company shall not be responsible
              for any damages or costs resulting from any delays in delivery.
            </p>
            <p className="delivery__text">
             In order to avoid lost packages, it is standard policy to request a signature
             for the packages we deliver. If no one is at the designated address at the time of delivery, the carrier will attempt to contact you to make alternative arrangements.Please note that
             if a
             return is made to us by either the customer refusing the package at the door, or the courier company being unsuccessful in delivering the package, then the
             default
             return method will be automatically store credit. Whenever this occurs, the amount of our Standard Shipping fee will be deducted from the store credit issued.For more information please see our Return Policy. It is understood and agreed that you as the customer accept this responsibility unless you specifically request a "signature-not-required"
             service,
             for which a small service charge may apply. At this time, such requests must be sent by e - mail at the time of purchase.
            </p>
        </div>
      </div>
    </section>
    <Footer />
  </>
);

export default Delivery;