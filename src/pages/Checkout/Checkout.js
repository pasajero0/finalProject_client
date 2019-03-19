import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../../components/Header/Header';
import CheckoutForm from '../../components/Forms/CheckoutForm/CheckoutForm';
import Footer from '../../components/Footer/Footer';

import './Checkout.scss';

/**
 * General component description in JSDoc format. Markdown is *supported*.
 */
function Checkout(props) {
  const { cartCount, isPurchaseExecuted } = props;
  if (!cartCount) {
    return <Redirect to="/cart" />;
  }
  if (isPurchaseExecuted) {
    return <Redirect to="/thank-you" />;
  }
  
  return (
    <>
      <Header />
      <section className="checkout">
        <div className="checkout__titleWrapper">
          <h1 className="checkout__title">Checkout</h1>
          <span className="checkout__longLine" />
          <span className="checkout__shortLine" />
        </div>
        <CheckoutForm />
      </section>
      <Footer />
    </>
  );
}

Checkout.propTypes = {
  cartCount: PropTypes.number.isRequired,
  isPurchaseExecuted: PropTypes.bool.isRequired,
};

Checkout.defaultProps = {
};

const mapStateToProps = state => ({
  cartCount: state.cart.count,
  isPurchaseExecuted: state.customers.isPurchaseComplited,
});

// const mapDispatchToProps = dispatch => ({
// });

export default connect(mapStateToProps, null)(Checkout);
