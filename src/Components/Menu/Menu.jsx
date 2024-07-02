
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './menu.scss';
import '../Header/header.scss';
import { FaBars } from 'react-icons/fa';

const Nav = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
  
    const toggleDropdown = () => {
      setDropdownOpen(!isDropdownOpen);
    };

    const closeDropdown = () => {
        setDropdownOpen(false);
      };
  
    return (
      <nav className="navM">
        
        <div className="dropdown"  onMouseLeave={closeDropdown} >
          <button className="dropdown-toggle" onClick={toggleDropdown}><FaBars/></button>
          {isDropdownOpen && (
            <div className="dropdown-menu">
              <NavLink to="/">Accueil</NavLink>
              <NavLink to="/about">A Propos</NavLink>
              <a href="/#mes-projets" className="ancre">Mes projets</a>
              <a href="#contact" className="ancre">Contact</a>
            </div>
          )}
        
        </div>
      </nav>
    );
  };
  
  export default Nav;