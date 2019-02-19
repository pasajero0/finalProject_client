import React, {Component} from 'react';
import {connect} from 'react-redux'
import Header from '../../components/Header/Header.js';
import Footer from '../../components/Footer/Footer.js';
// import { FaFacebookF } from "react-icons/fa";
// import { FaGoogle } from "react-icons/fa";
import LoginForm from '../../components/Forms/LoginForm/LoginForm.js';
import RegisterForm from '../../components/Forms/RegisterForm/RegisterForm.js';
import { displayLoginOrRegister } from '../../actions/account';
import './Account.scss';


class Account extends Component {

  onBtnClick = e => {
    const btnName = e.currentTarget.innerText;
    console.log(btnName);
    console.log('isAccountLogin: ', this.props.isAccountLogin);
    this.props.isAccountLoginAction(btnName);
  }

  render(){
    return(
      <div>
        <Header></Header>
          <section className="account">
            <h2 className="account__title">Account</h2>
            <span className="account__longLine"></span>
            <span className="account__shortLine"></span>
            <div className="account__switchButtons">
              <button onClick={this.onBtnClick} 
                      className={this.props.isAccountLogin ? 'account__loginButton account__switchButtons_active':'account__loginButton'}
                      >LOGIN</button> /&nbsp;   
              <button onClick={this.onBtnClick} 
                      className={this.props.isAccountLogin ? 'account__registerButton':'account__registerButton account__switchButtons_active' }
                      >REGISTER</button>
            </div>

            <div style={this.props.isAccountLogin ? {display: 'block'} : {display: 'none'}}>
              <p className="account__info">If you have an account with us, log in using your email address</p>
              {/* <div className="account__socialButtons">
                <button className="account__socialButton account__socialButton_facebook"><FaFacebookF className="account__socialButtonIcon"/>Facebook</button>
                <button className="account__socialButton account__socialButton_google"><FaGoogle className="account__socialButtonIcon"/>Google</button>
              </div> */}
              <LoginForm />
            </div>
            
            <div style={ this.props.isAccountLogin ? {display: 'none'} : {display: 'block'}}>
              <p className="account__info">Creating an accout will save you time at checkout and allow you to access your status and history</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(Account);