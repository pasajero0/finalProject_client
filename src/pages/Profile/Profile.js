import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../../components/Header/Header';
import ProfileForm from '../../components/Forms/ProfileForm/ProfileForm';
import Footer from '../../components/Footer/Footer';
import { logoutCustomer, fetchProfile } from '../../actions/customers';
import './Profile.scss';

const propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  callLogoutCustomer: PropTypes.func.isRequired,
  callFetchProfile: PropTypes.func.isRequired,
  profile: PropTypes.shape({
    email: PropTypes.string,
    number: PropTypes.string,
    creation_date: PropTypes.string,
    address: PropTypes.string,
    city: PropTypes.string,
    last_name: PropTypes.string,
    phone: PropTypes.string,
    zip: PropTypes.string,
    first_name: PropTypes.string,
    id: PropTypes.string
  })
};

const defaultProps = {
  profile: {
    email: '',
    number: '',
    creation_date: '',
    address: '',
    city: '',
    last_name: '',
    phone: '',
    zip: '',
    first_name: '',
    id: ''
  }
};

const Profile = ({ isAuthenticated, profile, callLogoutCustomer, callFetchProfile }) => {

  if (!isAuthenticated) {
    return <Redirect to="/login" />;
  }

  callFetchProfile();

  return (
    <>
    <Header/>
    <section className="profile">
      <div className="container">
        <h1 className="profile__title">YOUR PROFILE</h1>
        <div className="profile__info">
          <p className="profile__text"> email: {profile.email} </p>
          <ProfileForm/>
          <NavLink to="/reset-password" className="profile__button">RESET PASSWORD</NavLink>
          <button type="button" className="profile__button" onClick={() => callLogoutCustomer()}>LOG OUT</button>
        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
};

Profile.propTypes = propTypes;
Profile.defaultProps = defaultProps;

const mapStateToProps = state => ({
  isAuthenticated: state.customers.isAuthenticated,
  profile: state.customers.profile,
});

const mapDispatchToProps = dispatch => ({
  callLogoutCustomer: data => dispatch(logoutCustomer(data)),
  callFetchProfile: () => dispatch(fetchProfile())
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
