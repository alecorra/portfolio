import React, { useState } from 'react';
import myPic from '../../images/cartoon-orange.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

import './Navbar.scss';

export const Navbar: React.FunctionComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const clickHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <img
        className="navbar__logo"
        src={myPic}
        alt="Alessandro Corra cartoon pic"
      />
      <div className="navbar__icon" onClick={clickHandler}>
        <i>
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
        </i>
      </div>
      <div className={`navbar__links ${isOpen ? 'visible' : 'hidden'}`}>
        <div className="navbar__links-link">HOME</div>
        <div className="navbar__links-link">ABOUT ME</div>
        <div className="navbar__links-link">PORTFOLIO</div>
        <div className="navbar__links-link">CONTACT</div>
      </div>
    </nav>
  );
};
