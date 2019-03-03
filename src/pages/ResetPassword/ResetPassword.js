import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import GetTokenForm from '../../components/Forms/GetTokenForm/GetTokenForm';
import ResetPasswordForm from '../../components/Forms/ResetPasswordForm/ResetPasswordForm';

import './ResetPassword.scss';

const propTypes = {
  isSentResetPasswordToken: PropTypes.bool,
  isAuthenticated: PropTypes.bool,
};

const defaultProps = {
  isSentResetPasswordToken: false,
  isAuthenticated: false,
};

/**
 * General component description in JSDoc format. Markdown is *supported*.
 */
class ResetPassword extends Component {
    
  render() {
  	
  	// console.log(this.props.match);

    const {
      match: {
        params: {token}
      }
    } = this.props;
    const { isSentResetPasswordToken, isAuthenticated } = this.props;
    
	

    let form;

    if (isAuthenticated){
    	form = <ResetPasswordForm />;
    } else if (token) {
   		form = <ResetPasswordForm />;
    } else {
      if (isSentResetPasswordToken) {
        form = (
          <div>
              <p style={ {textAlign : 'center', margin: '50px 0'} }>
                  A letter has been sent to your email. Check it and follow the instructions!
              </p>
          </div>
        )
      } else {
        form = <GetTokenForm />;
      }
    }

    return (
      <>
        <Header/>
          <section className="ResetPassword">
            { form }
          </section>
        <Footer/>
      </>
    );
  }
}

ResetPassword.propTypes = propTypes;
ResetPassword.defaultProps = defaultProps;

const mapStateToProps = (state) => {
  return {
  	isAuthenticated: state.customers.isAuthenticated,
    isSentResetPasswordToken: state.customers.isSentResetPasswordToken,
  };
};

export default connect(mapStateToProps, null)(ResetPassword);