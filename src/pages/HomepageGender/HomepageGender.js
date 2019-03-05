import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ProductsList from '../../components/ProductsList/ProductsList';

const propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      department: PropTypes.string,
      page: PropTypes.string,
    }),
    path: PropTypes.string.isRequired
  })
};

const defaultProps = {
  match: {
    params: {
      department: '',
      page: 1,
    }
  },
};

const HomepageGender = ({ match }) => (
  <>
    <Header />
    <ProductsList routeData={match} />
    <Footer />
  </>
);

HomepageGender.propTypes = propTypes;
HomepageGender.defaultProps = defaultProps;

export default HomepageGender;
