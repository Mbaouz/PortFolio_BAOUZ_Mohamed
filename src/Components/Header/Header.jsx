
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
        <a href="/#a-propos" className="aboutNav">A Propos</a>
        <a href="/#mes-projets" className="ancre">Mes projets</a>
        <a href="#contact" className='ancre'>Contact</a>
        
      </nav>

      <div className='menu-display'><Nav/></div>


    </header>
  );
};

export default Header;