import React from 'react';
import Navbar from './Navbar/Navbar';
import NavbarMenu from './NavbarMenu/NavbarMenu';
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <Navbar />
      <NavbarMenu />
    </header>
  );
};

export default Header;