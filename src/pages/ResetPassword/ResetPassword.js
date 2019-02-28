import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header/Header.js';
import Footer from '../../components/Footer/Footer.js';
import GetTokenForm from '../../components/Forms/GetTokenForm/GetTokenForm';
// import ResetPasswordForm from '../../components/Forms/ResetPasswordForm/ResetPasswordForm';

import './ResetPassword.scss';

const propTypes = {
};

const defaultProps = {
};

/**
 * General component description in JSDoc format. Markdown is *supported*.
 */
class ResetPassword extends Component {
    
    render() {

    	const {
            match: {
                params: {token}
            }
        } = this.props;

        console.log(token);
        let form;

        if (token) {
    		//form = <ResetPasswordForm />;
    	} else {
    		form = <GetTokenForm />;
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

export default ResetPassword;