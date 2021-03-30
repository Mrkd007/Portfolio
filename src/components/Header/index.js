import React from 'react';

import './Header.scss';

import Logo from '../../Assets/images/logo.png';

/**
* @author
* @function Header
**/

const Header = (props) => {
  return(
    <header>
        <nav class="body_navbar">
            <div class="body_navbar--container">
                <div class="body_navbar--container-header">
                    <img heoght="42" width="42" className="body_navbar--container-header-logo" src={Logo} alt="KD"/>
                </div>
                <ul class="body_navbar--container-list">
                    <li class="body_navbar--container-list-item active">
                        <span className="body_navbar--container-list-item-title">Home</span>
                        <span className="body_navbar--container-list-item-cover"></span>
                    </li>
                    <li class="body_navbar--container-list-item active">
                        <span className="body_navbar--container-list-item-title">About</span>
                        <span className="body_navbar--container-list-item-cover"></span>
                    </li>
                    <li class="body_navbar--container-list-item active">
                        <span className="body_navbar--container-list-item-title">Project</span>
                        <span className="body_navbar--container-list-item-cover"></span>
                    </li>
                    <li class="body_navbar--container-list-item active">
                        <span className="body_navbar--container-list-item-title">Contact</span>
                        <span className="body_navbar--container-list-item-cover"></span>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
   )

 }

export default Header;