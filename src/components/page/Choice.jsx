import { Component } from 'react';
import { Link } from 'react-router-dom';
import React from 'react';
import './Choice.css'

class Choice extends Component {
  render(){
      
      return ( 
        <>
        <section className='ChoiceContainer'>
          <nav>
            <Link to='/userDashboard/12' className='ChoiceLink'>
              <p className='ChoiceText'>User 12</p>
            </Link>
            <Link to='/userDashboard/18' className='ChoiceLink'>
              <p className='ChoiceText'>User 18</p>
            </Link>
          </nav>

        </section>
        </>     
    );
  }

}

export default Choice;