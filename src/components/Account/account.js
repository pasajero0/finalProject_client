import React, {Component} from 'react';

import Header from './components/Header/header.js';
import Login from './components/Account/Login/login.js';

import './account.scss';

//cоздание компонента  Account, где буде реализована возможность показать форму регистриции или авторизации
class Account extends Component {

    render(){
        return(
            <div>    
                <Header/>
                <Login/>
            </div>
        )
    }
}
export default Account;