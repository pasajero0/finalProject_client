import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import NavbarIcons from './NavbarIcons/NavbarIcons'
import { NavLink } from 'react-router-dom';
import './Navbar.scss';
import UserMenu from "./UserMenu/UserMenu";
import Search from './Search/Search';

const leftPosHide = { left: '-3000px' };
const leftPosShow = { left: '0' };

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
    this.setState({ menuOpened: !this.state.menuOpened });
  }

  render() {
    const { departments, department: currentDepartment } = this.props;
    // filter root level's departments for top menu
    const rootDepartments = departments.filter((department) => department.parent === "0");
    // collect data of root department
    const current = departments.filter((department) => department.slug === currentDepartment);
    let childrenDepartments = [];
    if (current.length) {
      // collect data for children departments
      const parentId = current[0].parent === "0" ? current[0].id : current[0].parent;
      childrenDepartments = departments.filter((department) => department.parent === parentId);
    }

    return (

      <div className="navbar">
        <div className="container navbar__top">
          <div className="navbar__content">
            <div className="navbar__menuSwitch">
              <div className={this.state.menuOpened ? 'navBurger open' : 'navBurger'}
                   onClick={this.toogleMenu.bind(this)}>
                <span className="navBurger__line"></span>
                <span className="navBurger__line"></span>
                <span className="navBurger__line"></span>
                <span className="navBurger__line"></span>
              </div>
            </div>

            <div className="navbar__logo">
              <NavLink to="/" className="navbar__logoLink">
                <div className="mainLogo">Uno</div>
              </NavLink>
            </div>

            <ul className="navbar__rootMenu">
              {
                rootDepartments.map((department) => {
                  return (
                    <li className="navbar__rootMenuEntry" key={department.slug}>
                      <NavLink
                        to={`/${department.slug}`}
                        className="navbar__rootMenuLink"
                        activeClassName={currentDepartment === department.slug
                          ? 'navbar__rootMenuLink_active'
                          : ''}
                      >{department.name}</NavLink>
                    </li>
                  );
                })
              }
            </ul>

          </div>

            <div className="navbar__search">
              <Search />
            </div>
            <div className="navbar__tools">
              <NavbarIcons/>
            </div>
            <UserMenu/>
        </div>



          <div className="navbarContainer">

            <div id='navbarMenuContent' className="navbarMenuContent"
                 style={this.state.menuOpened ? leftPosShow : leftPosHide}>

              <ul className="switchNav">
                {
                  rootDepartments.map((department) => {
                    return (
                      <li className="switchNav__item" key={department.slug}>
                        <NavLink
                          to={`/${department.slug}`}
                          className="switchNav__link"
                          activeClassName={currentDepartment === department.slug
                            ? 'active'
                            : ''}
                        >{department.name}</NavLink>
                      </li>
                    );
                  })
                }
              </ul>

              {childrenDepartments.length > 0
              &&
              ( <ul className="navbarNav">
                {childrenDepartments.map((department) => {
                  return (
                    <li className="navbarNav__item" key={department.slug}>
                      <NavLink
                        to={`/${department.slug}`}
                        className="navbarNav__link"
                        activeClassName={
                          currentDepartment === department.slug
                            ? 'navbarNav__link_active'
                            : ''
                        }
                      >{department.name}</NavLink>
                    </li>
                  )
                })}
              </ul>)
              }
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
