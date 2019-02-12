import React, {Component} from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import RenderForm from '../../components/RenderForm/RenderForm.js'

// import UnoForm from '../../components/UnoForm/UnoForm.js';
import Login from './Login';

import './account.scss';

//cоздание компонента  Account, где буде реализована возможность показать форму регистриции или авторизации
class Account extends Component {

	handleSubmit (e) {
		e.preventDefault();
    	alert('Submitted!');
	}

    render(){
        return(
            <div>
            	<Header></Header>
                <Login/>

				<RenderForm displayResetBtn={true} 
        					submitBtnTxt='Login' 
        					onSubmit={this.handleSubmit}>
					<input className="formBlock__input" type="text" placeholder="Login"/>
					<input className="formBlock__input" type="email" placeholder="Email address"/>
					<input className="formBlock__input" type="password" placeholder="Password"/>
					<input className="formBlock__input" type="password" placeholder="Repeat password"/>
				</RenderForm>

				<Footer></Footer>
            </div>
        )
    }
}
export default Account;