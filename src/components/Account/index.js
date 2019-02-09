import React, {Component} from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Login from '../../components/Account/Login/login.js';

import './account.scss';

//cоздание компонента  Account, где буде реализована возможность показать форму регистриции или авторизации
class Account extends Component {

    render(){
        return(
            <div>
            	<Header></Header>
                <Login/>
				<Footer></Footer>
            </div>
        )
    }
}
export default Account;