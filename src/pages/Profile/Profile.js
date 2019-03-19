import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../../components/Header/Header';
import ProfileForm from '../../components/Forms/ProfileForm/ProfileForm';
import Footer from '../../components/Footer/Footer';
import { fetchProfile } from '../../actions/customers';
import './Profile.scss';

const propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
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

const Profile = ({
  isAuthenticated,
  profile,
  callFetchProfile
}) => {
  if (!isAuthenticated) {
    return <Redirect to="/login" />;
  }
  /*
    if (!profile.email) {
      callFetchProfile();
      return <div>loading...</div>;
    }
  */


  return (
    <>
      <Header />
      <section className="profile">
        <div className="container">
          <div className="profile__titleWrapper">
            <h1 className="profile__title">Your profile</h1>
            <span className="profile__longLine" />
            <span className="profile__shortLine" />
          </div>
          <div className="profile__info">
            <p className="profile__text">email: { profile.email }</p>
            <ProfileForm />
            <NavLink to="/reset-password">Reset password</NavLink>
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
  callFetchProfile: () => dispatch(fetchProfile())
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
