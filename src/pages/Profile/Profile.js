import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../../components/Header/Header.js';
import Footer from '../../components/Footer/Footer.js';
import { logoutCustomer } from '../../actions/customers';
import './Profile.scss';

const propTypes = {
};

const defaultProps = {
};


class Profile extends Component {

    render() {
        const { isAuthenticated, email, onClick} = this.props
        if(!isAuthenticated) {
            return <Redirect to="/login" />
        }
        return (
            <>
                <Header></Header>
                <section className="profile">
                    <div className="container">
                        <h1 className="profile__title">YOUR PROFILE</h1>
                        <div className="profile__info">
                            <p className="profile__text">email: { email }</p>
                            <button className="profile__button" onClick={()=>onClick()}>LOG OUT</button>
                        </div> 
                    </div>
                </section>
                <Footer></Footer>
            </>
        );
    }
}

Profile.propTypes = propTypes;
Profile.defaultProps = defaultProps;

const mapStateToProps = (state) => { 
    console.log(state);
    return {
        isAuthenticated: state.customers.isAuthenticated,
        email: state.customers.profile.email,
    }
  }

const mapDispatchToProps = dispatch => (
    {
        onClick: data => dispatch(logoutCustomer()),
    }
  );

export default connect(mapStateToProps, mapDispatchToProps)(Profile);