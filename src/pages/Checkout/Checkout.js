import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Layout from '../../components/Layout/Layout';
import CheckoutForm from '../../components/Forms/CheckoutForm/CheckoutForm';

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
    <Layout>
      <section className="checkout">
        <CheckoutForm />
      </section>
    </Layout>
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
