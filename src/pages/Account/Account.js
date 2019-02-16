import React, {Component} from 'react';
import {connect} from 'react-redux'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import LoginForm from '../../components/Forms/LoginForm/LoginForm.js'
import RegisterForm from '../../components/Forms/RegisterForm/RegisterForm.js'
import { displayLoginOrRegister } from '../../actions/account'
import './Account.scss';


class Account extends Component {

    onBtnClick = e => {
        const btnName = e.currentTarget.innerText
        console.log(btnName)
        console.log('isAccountLogin: ', this.props.isAccountLogin)
        console.log('state: ', this.store)
        this.props.isAccountLoginAction(btnName)
    }

    render(){

    
        return(
            <div>
            	<Header></Header>
                <section className="accountBlock">
                    <h2 className="accountBlock__title">Account</h2>
                    <span className="accountBlock__longLine"></span>
                    <span className="accountBlock__shortLine"></span>
                    <div className="accountBlock__switchButtons">
                        <span   onClick={this.onBtnClick} 
                                className={this.props.isAccountLogin ? 'accountBlock__loginButton accountBlock__switchButtons_active':'accountBlock__loginButton'}
                                >LOGIN</span>&nbsp;/&nbsp;   

                        <span   onClick={this.onBtnClick} 
                                className={this.props.isAccountLogin ? 'accountBlock__registerButton':'accountBlock__registerButton accountBlock__switchButtons_active' }
                                >REGISTER</span>
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
                        <p className="accountBlock__info">Creating an accout will save you time at checkout and allow you to access your status and history</p>
                        <RegisterForm />
                    </div>

                </section>
				<Footer></Footer>
            </div>
        )
    }
}
const mapStateToProps = (state) => { 
    // console.log(state);
    return {
        isAccountLogin: state.account.isAccountLogin
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    isAccountLoginAction: value => dispatch(displayLoginOrRegister(value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Account)

// export default Account;