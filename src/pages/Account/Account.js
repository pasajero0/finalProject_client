import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
// import { FaFacebookF } from "react-icons/fa";
// import { FaGoogle } from "react-icons/fa";
import LoginForm from '../../components/Forms/LoginForm/LoginForm';
import RegisterForm from '../../components/Forms/RegisterForm/RegisterForm';
import {setLoginFormActiveStatus} from '../../actions/app';
import './Account.scss';

const propTypes = {
  setLoginFormActiveStatusInAcc: PropTypes.bool.isRequired,
  isLoginFormActive: PropTypes.bool.isRequired,
};

const defaultProps = {};

const Account = (props) => {
  const {setLoginFormActiveStatusInAcc, isLoginFormActive} = props;
  return (
    <div>
      <Header/>
      <section className="account">
        <div className="container">
          <div className="account__content">
            <h2 className="account__title">Account</h2>
            <span className="account__longLine"/>
            <span className="account__shortLine"/>
            <div className="account__switchButtons">
              <button
                onClick={() => setLoginFormActiveStatusInAcc(true)}
                className={isLoginFormActive ? 'account__loginButton account__switchButtons_active' : 'account__loginButton'}
                type="button"
              >Login
              </button>
              /&nbsp;
              <button
                onClick={() => setLoginFormActiveStatusInAcc(false)}
                className={isLoginFormActive ? 'account__registerButton' : 'account__registerButton account__switchButtons_active'}
                type="button"
              >Register
              </button>
            </div>

            <div style={isLoginFormActive ? {display: 'block'} : {display: 'none'}}>
              <p className="account__info">If you have an account with us, log in using your email address</p>
              { /* <div className="account__socialButtons">
              <button className="account__socialButton account__socialButton_facebook"><FaFacebookF className="account__socialButtonIcon"/>Facebook</button>
              <button className="account__socialButton account__socialButton_google"><FaGoogle className="account__socialButtonIcon"/>Google</button>
            </div> */}
              <LoginForm/>
            </div>

            <div style={isLoginFormActive ? {display: 'none'} : {display: 'block'}}>
              <p className="account__info">Creating an accout will save you time at checkout and allow you to access
                your
                status and history
              </p>
              <RegisterForm />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

Account.propTypes = propTypes;
Account.defaultProps = defaultProps;

const mapStateToProps = (state) => {
  return {
    isLoginFormActive: state.app.isLoginFormActive
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setLoginFormActiveStatusInAcc: value => dispatch(setLoginFormActiveStatus(value))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Account);
