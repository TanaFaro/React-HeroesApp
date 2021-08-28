import React from 'react';
import { Navbar } from '../components/ui/Navbar';
import { Redirect, Route, Switch } from 'react-router-dom';

import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { Heroscreen } from '../components/heroes/Heroscreen';
import { DcScreen } from '../components/dc/DcScreen';
import { SearchScreen } from '../components/search/SearchScreen';

export const DashboardRoute = () => {

   

    return (
        <>
          <Navbar />

          <div className="container mt-3">
              <Switch>
               <Route exact path="/Marvel" component={ MarvelScreen } />
               <Route exact path="/hero/:heroeId" component={ Heroscreen } />
               <Route exact path="/dc" component={ DcScreen } />
               <Route exact path="/search" component={ SearchScreen } />
            
              <Redirect to="/marvel" />
             </Switch>
           </div> 
        
        
        </>
    )
}
