import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Product from '../../components/Product/Product';
import { fetchOrdersHistoryData } from '../../actions/customers';


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
    const { match, ordersList: { records }, isFetching } = this.props;
    return (
      <>
      <Header/>
      {isFetching
        ? <div>Loading...</div>
        : records.map(order => <div>{order.number}</div>)
      }
      <Footer/>
      </>
    )
  };
}


OrdersHistory.propTypes = propTypes;
OrdersHistory.defaultProps = defaultProps;

const mapStateToProps = state => ({
  ordersList: state.customers.ordersList,
  isFetching: state.products.isFetching
});

const mapDispatchToProps = dispatch => ({
  callFetchOrdersHistoryData: name => dispatch(fetchOrdersHistoryData(name))
});

export default connect(mapStateToProps, mapDispatchToProps)(OrdersHistory);
