import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header/Header.js';
import Footer from '../../components/Footer/Footer.js';
import './Profile.scss';

const propTypes = {
};

const defaultProps = {
};


class Profile extends Component {

    render() {
        return (
            <>
                <Header></Header>
                <section className="Profile">
                    <div className="container">
                        <h1 className="title">PROFILE</h1>
                    </div>
                </section>
                <Footer></Footer>
            </>
        );
    }
}

Profile.propTypes = propTypes;
Profile.defaultProps = defaultProps;

export default Profile;