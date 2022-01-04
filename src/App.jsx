import { Component } from 'react';
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Header from './components/Header/Header';
import NavActivity from './components/NavActivity/NavActivity';
import Dashboard from './components/page/Dashboard';
import Choice from './components/page/Choice';
import Error from './components/page/Error';

class User extends Component {
  render(){
      
      return ( 
      <Router>
        <Header />

        <main>
          <NavActivity />
          <Switch>
            <Route path="/user/:id" render={(props)=><Dashboard {...props}/>}/>
            <Route exact path="/" component={Choice}/>
            <Route path="*" component={Error}/>
          </Switch>
        </main>
        
      </Router>   
    );
  }

}

export default User;