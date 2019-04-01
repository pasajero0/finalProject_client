import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import './FooterNavMenu.scss';
import CompanyLogo from '../CompanyLogo/CompanyLogo';

const FooterNavMenu = ({ departments, currentDepartment }) => {

  const rootDepartments = departments.filter(d => d.parent === '0');
  const subDepartments = {};
  rootDepartments.forEach(d => {
    subDepartments[d.slug] = departments.filter(s => s.parent === d.id);
  });
  return (
    <>
    <div className="footer__border"/>
    <div className="footerInfo__wrapper">
      <div className="container">
        <div className="footerInfo">
          <div className="footerInfo__block footerInfo__block_logo">
            <CompanyLogo className="companyLogo" fill="#000000"/>
          </div>
          {
            rootDepartments.map(d => (
              <div className="footerInfo__block" key={d.slug}>
                <p className="footerInfo__section">{d.name}</p>
                <ul>
                  {
                    subDepartments[d.slug].map((s) => {
                      const to = `/${s.slug}`;
                      const className = currentDepartment === s.slug
                        ? 'footerInfo__link footerInfo__link_current'
                        : 'footerInfo__link';

                      return (
                        <li key={s.slug}>
                          <NavLink to={to} className={className}>
                            {s.name}
                          </NavLink>
                        </li>
                      )
                    })
                  }
                </ul>
              </div>
            ))
          }
          <div className="footerInfo__block">
            <p className="footerInfo__section">about</p>
            <ul>
              <li><NavLink to="/about-us" className="footerInfo__link">about us</NavLink></li>
              <li><NavLink to="/careers" className="footerInfo__link">careers</NavLink></li>
              <li><NavLink to="/returns" className="footerInfo__link">returns</NavLink></li>
              <li><NavLink to="/delivery" className="footerInfo__link">delivery</NavLink></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div className="footer__copyright">@2019 Copyright</div>
    </> );
};


const mapStateToProps = state => ({
  departments: state.app.departments,
  currentDepartment: state.products.currentDepartment,
});

export default connect(mapStateToProps, null)(FooterNavMenu);

