import React, {Component} from 'react';
import {connect} from 'react-redux'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import LoginForm from '../../components/Forms/LoginForm/LoginForm.js'
import { displayLogin, displayRegister} from '../../actions/account'
import './Account.scss';

// import RenderForm from '../../components/Forms/RenderForm/RenderForm';
// import UnoForm from '../../components/UnoForm/UnoForm.js';
import Login from './Login';


class Account extends Component {

    render(){
        console.log(this.props)

        let loginClass;
        let registerClass;

        if (this.props.isAccountLogin) {
            loginClass = 'accountBlock__loginButton accountBlock__switchButtons_active';
            registerClass = 'accountBlock__registerButton';
        } else {
            loginClass = 'accountBlock__loginButton';
            registerClass = 'accountBlock__registerButton accountBlock__switchButtons_active';
        }
        return(
            <div>
            	<Header></Header>
                <section className="accountBlock">
                    <h2 className="accountBlock__title">Account</h2>
                    <span className="accountBlock__longLine"></span>
                    <span className="accountBlock__shortLine"></span>
                    <div className="accountBlock__switchButtons">
                        <span onClick={displayLogin} className={loginClass}>LOGIN</span> / 
                        <span onClick={displayRegister} className={registerClass}>REGISTER</span>
                    </div>

                    <div className="loginContainer" style={this.props.isAccountLogin ? {display: 'block'} : {display: 'none'}}>
                        <p className="accountBlock__info">If you have an account with us, log in using your email address</p>
                        <div className="accountBlock__socialButtonsBlock">
                            <button className="accountBlock__socialButton accountBlock__socialButton_facebook"><FaFacebookF className="form-btn-icon"/>Facebook</button>
                            <button className="accountBlock__socialButton accountBlock__socialButton_google"><FaGoogle className="form-btn-icon"/>Google</button>
                        </div>
                        <LoginForm />
                    </div>
                    
                    <div className="registerContainer" style={ this.props.isAccountLogin ? {display: 'none'} : {display: 'block'}}>
                        <h1>REGISTER</h1>
                    </div>

                </section>
				<Footer></Footer>
            </div>
        )
    }
}
const mapStateToProps = (state) => { 
    return {
        isAccountLogin: false
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Account)

// export default Account;