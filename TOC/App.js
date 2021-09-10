import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';

import NavBar from '../components/NavBar';

import Home from './Home';

import Roster from './Roster';
import Score from './Score';

import '../App.css';

const App = () => {

  return (
    <div id="app" >
      <NavBar />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/roster">
          <Roster />
        </Route>

        <Route exact path="/score">
          <Score />
        </Route>

      </Switch>

    </div >
  );
}

export default App;