import { Component } from 'react';
import Logo from '../../assets/Logo.png';
import './Header.css';

class Header extends Component {
  render(){
      
      return ( 
        <>
        <header className='header'>
            <img src={Logo} alt="logo SportSee " className='HeaderLogo'/>
            <nav className='HeaderNav'>
                <a href='' className='HeaderLink'><p className='HeaderText'>Accueil</p></a>
                <a  className='HeaderLink'><p className='HeaderText'>Profil</p></a>
                <a  className='HeaderLink'><p className='HeaderText'>Réglage</p></a>
                <a  className='HeaderLink'><p className='HeaderText'>Communauté</p></a>
            </nav>
        </header>   
        </>     
    );
  }

}

export default Header;