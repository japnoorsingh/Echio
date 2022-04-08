import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/Echio.png';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="ech__navbar">
      <div className="ech__navbar-links">
        <div className="ech__navbar-links_logo">
          <img src={logo} />
        </div>
        <div className="ech__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#wgpt3">Influences</a></p>
          <p><a href="#possibility">Brands</a></p>
          <p><a href="#features">E-Sports</a></p>
          <p><a href="#blog">Contact Us</a></p>
        </div>
      </div>
      <div className="ech__navbar-sign">
        <button type="button">Meet Our Team</button>
      </div>
      <div className="ech__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="ech__navbar-menu_container scale-up-center">
          <div className="ech__navbar-menu_container-links">
            <p><a href="#home">Home</a></p>
            <p><a href="#wgpt3">Influences</a></p>
            <p><a href="#possibility">Brands</a></p>
            <p><a href="#features">E-Sports</a></p>
            <p><a href="#blog">Contact Us</a></p>
          </div>
          <div className="ech__navbar-menu_container-links-sign">
            <button type="button">Meet Our Team</button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
