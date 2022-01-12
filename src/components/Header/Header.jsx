import { Component } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo.png';
import './Header.css';

class Header extends Component {
  render(){
      
      return ( 
        <>
        <header className='header'>
            <img src={Logo} alt="logo SportSee " className='HeaderLogo'/>
            <nav className='HeaderNav'>
                <Link to='/' className='HeaderLink'><p className='HeaderText'>Accueil</p></Link>
                <Link to='' className='HeaderLink'><p className='HeaderText'>Profil</p></Link>
                <Link to='' className='HeaderLink'><p className='HeaderText'>Réglage</p></Link>
                <Link to='' className='HeaderLink'><p className='HeaderText'>Communauté</p></Link>
            </nav>
        </header>   
        </>     
    );
  }

}

export default Header;