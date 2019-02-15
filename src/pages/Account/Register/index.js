import React, {Component} from 'react';
import { FaLongArrowAltRight } from "react-icons/fa";
import '../Account.scss';
//создание компонента REgistea
class Register extends Component {

       render(){
        return(
            <div>
                <form className="form">
                   <p className="form-info">Creating an account will save you time at checkout and allow you to access 
                            your order status and history.</p>
                   <div className="form-input-block">
                       <input className="form-input" type="email" placeholder="Email address*"/>
                        <input className="form-input" type="password" placeholder="Password*"/>   
                        <input className="form-input" type="email" placeholder="Email address*"/>
                        <input className="form-input" type="password" placeholder="Password*"/>   
                   </div>
                   <button className="form-login" type="submit">Register<FaLongArrowAltRight/></button>
                </form>
            </div>
            
        )
    }
}


export default Register;
