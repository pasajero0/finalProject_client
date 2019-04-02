/**
 * OrderHistoryDetails Component.
 * Placeholder fot the description
 * @module OrderHistoryDetails
 */
import React, { Component } from 'react';

import './OrderHistoryDetails.scss';

/**
 * PropTypes of the component
 * @type {object}
 */
const propTypes = {
  /** Text message of the toast. */
  //prop: PropTypes.string,
};
/**
 * Default props of the component
 * @type {object}
 */
const defaultProps = {
  //prop: '',
};

/**
 * General component description in JSDoc format. Markdown is *supported*.
 */
class OrderHistoryDetails extends Component {
  state = { open: false };

  openDetails = () => {
    this.setState((prevState) => {
      console.log(prevState);
     return { open: !prevState.open };
    });
  };
  render () {
    const { order: { number, products}  } = this.props;
    return (
      <div className="orderHistoryDetails">
        <button 
          className={this.state.open ? "orderHistoryDetails__button orderHistoryDetails__redButton" : "orderHistoryDetails__button" } 
          type="button" 
          onClick={this.openDetails}
        >Details...</button>
        <div className={this.state.open ? "orderHistoryDetails__salesReceipt orderHistoryDetails__salesReceipt_isVisible" : "orderHistoryDetails__salesReceipt"}>
          <table className="orderHistoryDetails__table">
            <thead>
              <tr className="orderHistoryDetails__tableTitle">
                <td className="orderHistoryDetails__dataTitleName">Name</td>
                <td className="orderHistoryDetails__dataTitle">Quantity</td>
                <td className="orderHistoryDetails__dataTitle">Price</td>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => {
                return (
                  <tr key={number} className="service">
                    <td className="orderHistoryDetails__tableDataName">{product.name}</td>
                    <td className="orderHistoryDetails__tableData">{product.quantity}</td>
                    <td className="orderHistoryDetails__tableData">${product.price}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>		
        </div>
      </div>
    );
  };
}

OrderHistoryDetails.propTypes = propTypes;
OrderHistoryDetails.defaultProps = defaultProps;

export default OrderHistoryDetails;
