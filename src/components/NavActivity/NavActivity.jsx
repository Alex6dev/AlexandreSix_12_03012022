import { Component } from 'react';
import './NavActivity.css'
import IconYoga from '../../assets/IconYoga.png';
import IconSwimming from '../../assets/IconSwimming.png';
import IconCycling from '../../assets/IconCycling.png';
import IconBodybuilding from '../../assets/IconBodybuilding.png';



class NavActivity extends Component {
  render(){
      
      return ( 
        <> 
        <section className='NavActivity'>
          <nav className='NavActivityNav'>
            <a className='NavActivityLink'><img src={IconYoga}/></a>  
            <a className='NavActivityLink'><img src={IconSwimming}/></a>  
            <a className='NavActivityLink'><img src={IconCycling}/></a>  
            <a className='NavActivityLink'><img src={IconBodybuilding}/></a>  
          </nav>
          <p className='NavActivityText'>Copiryght, SportSee 2020</p>
        </section>  
        </>     
    );
  }

}

export default NavActivity;