
import './header.scss'
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import logoM from '../../assets/logoMb3.png';
import Nav from '../../Components/Menu/Menu';

const Header = () => {
  const [active] = useState(false);
  return (
    <header className='header-contain'>

      <img src={logoM} alt="logo"/>
      <nav className='nav'>
        <NavLink className={"accueil" + ( active ? 'active':'')}    to="/">Accueil</NavLink>
        <NavLink className={"about" + (active? 'active':'')} to="/about">A Propos</NavLink>
        <a href="/#mes-projets" className="ancre">Mes projets</a>
        <a href="#contact" className='ancre'>Contact</a>
        
      </nav>

      <div className='menu-display'><Nav/></div>


    </header>
  );
};

export default Header;