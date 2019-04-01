import React from 'react';
import Header from '../../components/Header/Header';
import FooterNavMenu from '../../components/FooterNavMenu/FooterNavMenu';
import './NoMatch.scss';


const NoMatch = () => (
  <>
    <Header />
    <section className="noMatch">
      <h1 className="noMatch__title">PAGE NOT FOUND 404</h1>
    </section>
    <FooterNavMenu />
  </>
);

export default NoMatch;