import React from 'react';
import Header from '../../components/Header/Header';
import FooterNavMenu from '../../components/FooterNavMenu/FooterNavMenu';
import './PageNotFound.scss';


const NoMatch = () => (
  <>
    <Header />
    <section className="pageNotFound">
      <h1 className="pageNotFound__title">PAGE NOT FOUND 404</h1>
    </section>
    <FooterNavMenu />
  </>
);

export default NoMatch;