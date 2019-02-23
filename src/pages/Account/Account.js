import React, {Component} from 'react';
import {connect} from 'react-redux';
import Header from '../../components/Header/Header.js';
import Footer from '../../components/Footer/Footer.js';
// import { FaFacebookF } from "react-icons/fa";
// import { FaGoogle } from "react-icons/fa";
import LoginForm from '../../components/Forms/LoginForm/LoginForm.js';
import RegisterForm from '../../components/Forms/RegisterForm/RegisterForm.js';
import { setLoginFormActiveStatus } from '../../actions/app';
import './Account.scss';


class Account extends Component {

  render(){
    const {setLoginFormActiveStatus, isLoginFormActive} = this.props
    return(
      <div>
        <Header></Header>
          <section className="account">
            <h2 className="account__title">Account</h2>
            <span className="account__longLine"></span>
            <span className="account__shortLine"></span>
            <div className="account__switchButtons">
              <button onClick={()=>setLoginFormActiveStatus(true)} 
                      className={isLoginFormActive ? 'account__loginButton account__switchButtons_active':'account__loginButton'}
                      >LOGIN</button> /&nbsp;   
              <button onClick={()=>setLoginFormActiveStatus(false)} 
                      className={isLoginFormActive ? 'account__registerButton':'account__registerButton account__switchButtons_active' }
                      >REGISTER</button>
            </div>

            <div style={isLoginFormActive ? {display: 'block'} : {display: 'none'}}>
              <p className="account__info">If you have an account with us, log in using your email address</p>
              { /* <div className="account__socialButtons">
                <button className="account__socialButton account__socialButton_facebook"><FaFacebookF className="account__socialButtonIcon"/>Facebook</button>
                <button className="account__socialButton account__socialButton_google"><FaGoogle className="account__socialButtonIcon"/>Google</button>
              </div> */ }
              <LoginForm />
            </div>
            
            <div style={ this.props.isLoginFormActive ? {display: 'none'} : {display: 'block'}}>
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
    isLoginFormActive: state.app.isLoginFormActive
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setLoginFormActiveStatus: value => dispatch(setLoginFormActiveStatus(value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Account);