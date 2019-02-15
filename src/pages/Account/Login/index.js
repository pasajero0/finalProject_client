import React, {Component} from 'react';
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import '../Account.scss';

// создание компонента Login
class Login extends Component {

    render(){
        return(
            <div>
                <form className="form">
                   <p className="form-info">If you have an account with us, log in using your email address</p>
                   <div className="form-btn-block">
                        <button className="form-btn form-btn__facebook"><FaFacebookF className="form-btn-icon"/>Facebook</button>
                        <button className="form-btn form-btn__google"><FaGoogle className="form-btn-icon"/>Google</button>
                   </div>
                   <div className="form-input-block">
                        <input className="form-input" type="email" placeholder="Email address*"/>
                        <input className="form-input" type="password" placeholder="Password*"/>   
                   </div>
                   <button className="form-login" type="submit">Login<FaLongArrowAltRight/></button>
                </form>
            </div>
            
        )
    }
}


export default Login;
