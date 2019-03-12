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
  const { cartCount } = props;
  if (!cartCount) {
    return <Redirect to="/cart" />;
  }

  return (
    <>
      <Header />
      <section className="checkout">
        <CheckoutForm />
      </section>
      <Footer />
    </>
  );
}

Checkout.propTypes = {
};

Checkout.defaultProps = {
};

const mapStateToProps = state => ({
  cartCount: state.cart.count,
});

// const mapDispatchToProps = dispatch => ({
// });

export default connect(mapStateToProps, null)(Checkout);
