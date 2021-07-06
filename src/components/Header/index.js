import React, { useState } from 'react';

import './Header.scss';

import Logo from '../../Assets/images/logo.png';

/**
* @author
* @function Header
**/

const Header = (props) => {

  const [hbOpen, setHbOpen] = useState(false);

  const buttonClass = "body_header--container-hamburger" + (hbOpen ? ' active' : '');
  const listMobileClass = "body_header--container-list" + (hbOpen ? ' mobile' : '');

  return(
    <header className="body_header">
        <div className="body_header--container">
            <div className="body_header--container-header">
                <img height="42" width="42" className="body_header--container-header-logo" src={Logo} alt="KD"/>
            </div>
            <button className={buttonClass} onClick={(e) => { setHbOpen(!hbOpen); }} >
                <span className="body_header--container-hamburger-span one"></span>
                <span className="body_header--container-hamburger-span two"></span>
                <span className="body_header--container-hamburger-span three"></span>
            </button>
            <ul className={listMobileClass}>
                <li className="body_header--container-list-item active">
                    <span className="body_header--container-list-item-title">Home</span>
                    <span className="body_header--container-list-item-cover"></span>
                </li>
                <li className="body_header--container-list-item">
                    <span className="body_header--container-list-item-title">About</span>
                    <span className="body_header--container-list-item-cover"></span>
                </li>
                <li className="body_header--container-list-item">
                    <span className="body_header--container-list-item-title">Project</span>
                    <span className="body_header--container-list-item-cover"></span>
                </li>
                <li className="body_header--container-list-item">
                    <span className="body_header--container-list-item-title">Contact</span>
                    <span className="body_header--container-list-item-cover"></span>
                </li>
            </ul>
        </div>
    </header>
   )

 }

export default Header;