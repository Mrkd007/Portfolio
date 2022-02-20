import React from 'react';
import './header.css';
import CTA from './CTA';
import HeaderSocial from './HeaderSocial';
import ME from '../../assets/kd.png';

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Krishna Devashish</h1>
        <h5 className="text-light">
          Frontend Developer
        </h5>
        <CTA />

        <div className="me">
          <img src={ME} alt="Profile" />
        </div>

        <a href="#contact" className='scroll_down'>Scroll Down</a>

        <HeaderSocial />
      </div>
    </header>
  )
}

export default Header