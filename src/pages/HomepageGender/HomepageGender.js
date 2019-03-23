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

const HomepageGender = ({ location:{pathname, search}, match }) => {
  const { department, page = 1 } = match.params;
  return (
  <>
    <Header department={department} />
    <ProductsList
      routeData={match}
      key={`${pathname}${search}`}
      department={department}
      page={page}
    />
    <Footer />
  </>
)};

HomepageGender.propTypes = propTypes;
HomepageGender.defaultProps = defaultProps;

export default HomepageGender;
