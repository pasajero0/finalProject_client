import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import ClickOutside from './ClickOutside/ClickOutside';
import { setUserMenuVisibility } from '../../../../actions/app';
import { logoutCustomer } from '../../../../actions/customers';
import './UserMenu.scss';

const propTypes = {
  isAuthenticated: PropTypes.bool,
  isVisible: PropTypes.bool,
  callSetUserMenuVisibility: PropTypes.func.isRequired,
};

const defaultProps = {
  isVisible: true,
  isAuthenticated: true,
};

/**
 * General component description in JSDoc format. Markdown is *supported*.
 */
const UserMenu = ({ callLogoutCustomer, isAuthenticated, isVisible, callSetUserMenuVisibility, match:{path:currentRoute} }) => {
  const entries = [
    { name: 'Personal data', route: '/profile' },
    { name: 'Orders history', route: '/orders-history' },
    // { name: 'Reset Password', route: '/reset-password' },
  ];
  if (!isAuthenticated) {
    return null;
  }
  return (
    <ClickOutside onClick={() => {
        callSetUserMenuVisibility(false);
    }}>
      <div className={isVisible ? 'userMenu userMenu_isVisible' : 'userMenu'}>
        <ul className="userMenu__entries">
          {
            entries.map((entry) => (
              <li className="userMenu__entry" key={entry.route}>
                {entry.route === currentRoute
                  ? (
                    <span className="userMenu__link userMenu__link_active">
                      {entry.name}
                    </span>
                  )
                  : (
                    <NavLink
                      to={entry.route}
                      className="userMenu__link"
                    >
                      {entry.name}
                    </NavLink>
                  )}
              </li>
            ))
          }
<li className="userMenu__entry">

          <button type="button" className="userMenu__link" onClick={() => callLogoutCustomer()}>Logout</button>
  </li>
        </ul>
      </div>
    </ClickOutside>
  );
};

UserMenu.propTypes = propTypes;
UserMenu.defaultProps = defaultProps;


const mapStateToProps = state => ({
  isVisible: state.app.isVisibleUserMenu,
  isAuthenticated: state.customers.isAuthenticated,
});

const mapDispatchToProps = dispatch => ({
  callSetUserMenuVisibility: value => dispatch(setUserMenuVisibility(value)),
  callLogoutCustomer: data => dispatch(logoutCustomer(data)),
});
//export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);

const C = connect(mapStateToProps, mapDispatchToProps)(UserMenu);
export default props => <Route render={routeProps => <C {...routeProps} {...props} />}/>;
