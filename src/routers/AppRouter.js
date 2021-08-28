import React, { useContext } from 'react';
import {
    BrowserRouter as Router, 
    Switch,
  } from "react-router-dom";

import { AuthContext } from '../auth/AuthContext';
import { PrivateRoute } from './PrivateRoute';

import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRoute } from './DashboardRoute';
import { PublicRoute } from './PublicRoute';




export const AppRouter = () => {

    const { user } = useContext( AuthContext );
    console.log(user);

    return (
      <Router>
           <div>
              < Switch >
                <PublicRoute
                 exact
                  path="/login" 
                  component={ LoginScreen } 
                  isAutenticated= { user.logged }
               
                  /> 

                < PrivateRoute 
                path ="/" 
                component={ DashboardRoute } 
                isAutenticated= { user.logged }
               
               />
            </Switch>
           </div>
       </Router>

    )
}