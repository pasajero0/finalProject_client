/**
 * ThankYou Component.
 * Placeholder fot the description
 * @module ThankYou
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './ThankYou.scss';
import { clearCart } from '../../actions/cart';
import { clearPurchaseData } from '../../actions/customers';

/**
 * PropTypes of the component
 * @type {object}
 */
const propTypes = {
  isPurchaseExecuted: PropTypes.bool,
  callClearCart: PropTypes.func.isRequired,
  callClearPurchaseData: PropTypes.func.isRequired,
  // purchaseInfo: PropTypes.object.isRequired
};
/**
 * Default props of the component
 * @type {object}
 */
const defaultProps = {
  isPurchaseExecuted: false,
};

/**
 * General component description in JSDoc format. Markdown is *supported*.
 */
class ThankYou extends Component {
  componentWillMount() {
    const { callClearCart } = this.props;
    callClearCart();
  }

  componentWillUnmount() {
    const { callClearPurchaseData } = this.props;
    callClearPurchaseData();
  }

  render () {
    const { isPurchaseExecuted, purchaseInfo } = this.props;
    if (!isPurchaseExecuted) {
      alert('Your cart is empty!');
      return <Redirect to="/" />;
    }
    return (
      <>
        <Header />
        <section className="thankYou">
          <h1 className="thankYou__title"> Thank you! </h1>
          <div className="thankYou__info">
            <p>{purchaseInfo.message}</p>
            <p> Order number: {purchaseInfo.data.number} </p>
          </div>
        </section>
        <Footer />
      </>
    );
  }
}

ThankYou.propTypes = propTypes;
ThankYou.defaultProps = defaultProps;

const mapStateToProps = state => ({
  isPurchaseExecuted: state.customers.isPurchaseComplited,
  purchaseInfo: state.customers.purchaseData,
});

const mapDispatchToProps = dispatch => ({
  callClearCart: () => dispatch(clearCart()),
  callClearPurchaseData: () => dispatch(clearPurchaseData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ThankYou);
