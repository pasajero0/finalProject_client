import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import NavbarIcons from './NavbarIcons/NavbarIcons'
import {NavLink} from 'react-router-dom';
import './Navbar.scss';

const leftPosHide = {left: '-3000px'};
const leftPosShow = {left: '0'};

const propTypes = {
  departments: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
      name: PropTypes.string,
      slug: PropTypes.string,
      parent: PropTypes.string,
      position: PropTypes.number,
      filters: PropTypes.shape,
    }))
};


class Navbar extends Component {

    state = {
        menuOpened: false
    };

    toogleMenu() {
        this.setState({menuOpened: !this.state.menuOpened});
    }

    render() {
        const { departments } = this.props;

        console.group('DEPARTMENTS IN NAV BAR');
        console.log(departments);
        console.groupEnd();

        return (
            <div className="navbar">
                <div className="container">
                    <div className="navbarContainer">
                        <div className="navbarTop">
                            <div className="navbarTopMainContent">
                                <div className={this.state.menuOpened ? 'navBurger open' : 'navBurger'}
                                     onClick={this.toogleMenu.bind(this)}>
                                    <span className="navBurger__line"></span>
                                    <span className="navBurger__line"></span>
                                    <span className="navBurger__line"></span>
                                    <span className="navBurger__line"></span>
                                </div>

                                <NavLink to="/" className='mainLogo__link'>
                                    <h1 className="mainLogo">Uno</h1>
                                </NavLink>

                                <ul className="genderNav">
                                    <li className="genderNav__item">
                                        <NavLink exact to="/women" activeClassName="active" className="genderNav__link ">Women</NavLink>
                                    </li>
                                    <li className="genderNav__item">
                                        <NavLink to="/men" className="genderNav__link">Men</NavLink>
                                    </li>
                                </ul>
                            </div>
                            <NavbarIcons/>
                        </div>

                        <div id='navbarMenuContent' className="navbarMenuContent"
                             style={this.state.menuOpened ? leftPosShow : leftPosHide}>

                            <ul className="switchNav">
                                <li className="switchNav__item">
                                    {/*<a href="#" className="switchNav__link">Women</a>*/}
                                </li>
                                <li className="switchNav__item">
                                    {/*<a href="#" className="switchNav__link">Men</a>*/}
                                </li>
                            </ul>

                            <ul className="navbarNav">
                                <li className="navbarNav__item">
                                    <NavLink to="#" className='navbarNav__link'>Clothing</NavLink>
                                </li>
                                <li className="navbarNav__item">
                                    <NavLink to="#" className='navbarNav__link'>Accessories</NavLink>
                                </li>
                                <li className="navbarNav__item">
                                    <NavLink to="#" className='navbarNav__link'>Shoes</NavLink>
                                </li>
                                <li className="navbarNav__item">
                                    <NavLink to="#" className='navbarNav__link'>Sport</NavLink>
                                </li>
                                <li className="navbarNav__item">
                                    <NavLink to="#" className='navbarNav__link'>Beauty</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

Navbar.propTypes = propTypes;

const mapStateToProps = state => ({
  departments: state.app.departments,
});

export default connect(mapStateToProps, null)(Navbar);
