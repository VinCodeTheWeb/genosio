import React from 'react';
import { Link } from 'react-scroll';

import Logo from 'assets/images/logo.png';

const Header = () => {
  return (
    <header className="header">
      <img className="header__logo" src={Logo} alt="logo" />
      <nav className="header__nav">
        <Link className='header__nav-link' to='home'>Home</Link>
        <Link className='header__nav-link' to='about'>About</Link>
        <Link className='header__nav-link' to='services'>Services</Link>
        <Link className='header__nav-link' to='contact'>Contact</Link>
      </nav>
    </header>
  )
}

export { Header };
