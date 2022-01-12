import { Component } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import './Error.css'


class Error extends Component {
  render(){
      
      return ( 
        <section className='ErrorContainer'>  
          <h1 className='ErrorTitle'>404</h1>
          <p className='ErrorText'>Oups! La page que vous demandez n'existe pas.</p>
          <Link to="/" className='ErrorLink'><p className='ErrorText'>Retourner sur la page d’accueil</p></Link>
        </section>     
    );
  }

}

export default Error;