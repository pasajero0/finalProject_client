import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Layout from '../../components/Layout/Layout';
import OrderHistoryDetails from '../../components/OrderHistoryDetails/OrderHistoryDetails';
import { fetchOrdersHistoryData } from '../../actions/customers';

import './OrdersHistory.scss';

const propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      department: PropTypes.string,
      page: PropTypes.string,
    }),
    path: PropTypes.string.isRequired
  }),
  ordersList: PropTypes.shape({
    records: PropTypes.array,
    page: PropTypes.number,
    perPage: PropTypes.number,
    count: PropTypes.number,
    pagesTotal: PropTypes.number,
  }),
};

const defaultProps = {
  ordersList: {
    records: [],
    page: 1,
    perPage: 10,
    count: 0,
    pagesTotal: 0,
  },
  match: {
    params: {
      department: '',
      page: 1,
    }
  },
};

class OrdersHistory extends Component {

  componentDidMount() {
    const { callFetchOrdersHistoryData } = this.props;
    callFetchOrdersHistoryData();
  }

  render() {
    const { match, ordersList: { records }, isFetching, isAuthenticated } = this.props;
    console.log('----------------------> match: ', match);
    if (!isAuthenticated) {
      return <Redirect to="/login" />;
    }

    return (
      <Layout>
        <section className="ordersHistory">
          <div className="container">
            <div className="ordersHistory__content">
              <h1 className="ordersHistory__title">Orders History</h1>
              <div className="ordersHistory__wrapper">
                {isFetching
                  ? <div>Loading...</div>
                  : records.map((order) => {
                    console.log('/////////////////////////////////', order);
                    return (
                    <div key={order.id} className="ordersHistory__card">
                      <div className="ordersHistory__cardInfo">
                        <p className="ordersHistory__cardInfoField">Order number: <span className="ordersHistory__cardInfoFieldStrong">{order.number}</span></p>
                        <p className="ordersHistory__cardInfoField">Order date: <span className="ordersHistory__cardInfoFieldStrong">{order.creation_date}</span></p>
                        <p className="ordersHistory__cardInfoField">Total price: <span className="ordersHistory__cardInfoFieldStrong">${order.total}</span></p>
                      </div>
                      <OrderHistoryDetails products={order.products}/>
                    </div>
                    );
                  })
                }
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  };

}


OrdersHistory.propTypes = propTypes;
OrdersHistory.defaultProps = defaultProps;

const mapStateToProps = state => ({
  ordersList: state.customers.ordersList,
  isFetching: state.products.isFetching,
  isAuthenticated: state.customers.isAuthenticated,
});

const mapDispatchToProps = dispatch => ({
  callFetchOrdersHistoryData: name => dispatch(fetchOrdersHistoryData(name))
});

export default connect(mapStateToProps, mapDispatchToProps)(OrdersHistory);
