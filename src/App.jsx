import React from 'react';
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Header from './components/Header/Header';
import NavActivity from './components/NavActivity/NavActivity';
import Dashboard from './components/page/Dashboard';
import Choice from './components/page/Choice';
import Error from './components/page/Error';
import {DashboardContextProvider} from './CallApi/callApi';

//Element page home and router contained

export default function App(){
   return ( 
      <Router>
        <Header />
        <main>
          <NavActivity />
          <DashboardContextProvider>
            <Switch>
              <Route path="/userDashboard/:id" component={ Dashboard }/>
              <Route exact path="/" component={Choice}/>
              <Route path="*" component={Error}/>
            </Switch>            
          </DashboardContextProvider>
        </main>
      </Router>   
    );
}