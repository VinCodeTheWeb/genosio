import React from 'react';
import { Link } from 'react-scroll';

import Logo from 'assets/images/logo.png';
import './header.styles.scss'

const Header = () => {
  return (
    <header className="header">
      <img className="header__logo" src={Logo} alt="logo" />
      <nav className="header__nav">
        <Link className='header__nav-link'>Home</Link>
        <Link className='header__nav-link'>About</Link>
        <Link className='header__nav-link'>Services</Link>
        <Link className='header__nav-link'>Contact</Link>
      </nav>
    </header>
  )
}

export { Header };
