import React, {Component} from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Login from './Login';

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