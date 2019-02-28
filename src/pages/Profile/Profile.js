import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink, Redirect } from 'react-router-dom';
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
        const { isAuthenticated, profile, onClickLogout } = this.props
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
                            <p className="profile__text">email: { profile.email }</p>
                            <NavLink to="/reset-password" className="profile__button">RESET PASSWORD</NavLink>
                            <button className="profile__button" onClick={()=>onClickLogout()}>LOG OUT</button>
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
    return {
        isAuthenticated: state.customers.isAuthenticated,
        profile: state.customers.profile,
    }
  }

const mapDispatchToProps = dispatch => (
    {
        onClickLogout: data => dispatch(logoutCustomer()),
    }
  );

export default connect(mapStateToProps, mapDispatchToProps)(Profile);