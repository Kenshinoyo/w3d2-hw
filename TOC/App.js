// I call this parent component the "housing" component due to the fact
// that this file contains all the necessary imports for data access.

// This file is used for rendering everything the app needs and accesses. 

import React from 'react';
import { Switch, Route } from 'react-router-dom'; 

import NavBar from '../components/NavBar'; //<--Since the "NavBar" component is in a separate folder within the "src" root folder, 
// the '../' syntax is needed to access the "components" folder
import Footer from '../components/Footer';

import Home from './Home'; //<--For files listed in the native folder, only the './' syntax is needed

import Roster from './Roster';
import Scores from './Scores';

import '../App.css';

const App = () => {

  return (
    <div id="app" > {/*<-- This is the "parent" div aka the "container" div */}
      <NavBar />

      <Switch> {/*<-- React "hook" that we imported on line 7. Allows us to access child elements/components. */}
        <Route exact path="/"> {/*<-- The React hook "Route" is a hook that allows a child component to be rendered in its entirety. */}
          <Home />
        </Route>

        <Route exact path="/roster">
          <Roster />
        </Route>

        <Route exact path="/scores">
          <Scores />
        </Route>

      </Switch>

      <Footer />
    </div >
  );
}

export default App;