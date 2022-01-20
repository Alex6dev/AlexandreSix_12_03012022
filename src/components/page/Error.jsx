import React from 'react';
import { Link } from 'react-router-dom';
import './Error.css'

/** show Page Error 
 * @returns {JSX} 
 */

 export default function Error(){
  return ( 
    <section className='ErrorContainer'>  
      <h1 className='ErrorTitle'>404</h1>
      <p className='ErrorText'>Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/" className='ErrorLink'>
        <p className='ErrorText'>Retourner sur la page d’accueil</p>
      </Link>
    </section>     
  );  
}