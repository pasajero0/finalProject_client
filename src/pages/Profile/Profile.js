import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../../components/Header/Header';
import ProfileForm from '../../components/Forms/ProfileForm/ProfileForm';
import Footer from '../../components/Footer/Footer';
import { logoutCustomer, updProfile } from '../../actions/customers';
import './Profile.scss';

const propTypes = {
  isAuthenticated: PropTypes.bool.isReq,
  onClickLogout: PropTypes.func.isRequired,
  profile: PropTypes.obj
};

const defaultProps = {
  isAuthenticated: false,
  profile: {}
};

const Profile = (props) => {
  const { isAuthenticated, profile, onClickLogout, loadFullProfileInfo } = props;

  if (!isAuthenticated) {
    return <Redirect to="/login" />;
  }

  loadFullProfileInfo();

  return (
    <>
      <Header />
      <section className="profile">
        <div className="container">
          <h1 className="profile__title">YOUR PROFILE</h1>
          <div className="profile__info">
            <p className="profile__text"> email: { profile.email } </p>
            <ProfileForm />
            <NavLink to="/reset-password" className="profile__button">RESET PASSWORD</NavLink>
            <button type="button" className="profile__button" onClick={() => onClickLogout()}>LOG OUT</button>
          </div>
        </div>
      </section>
      <Footer />
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
  onClickLogout: data => dispatch(logoutCustomer(data)),
  loadFullProfileInfo: () => dispatch(updProfile())
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
