import React from 'react';
import { Switch, Route } from 'react-router-dom';

import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

import Home from './Home';

import Roster from './Roster';
import Scores from './Scores';

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

        <Route exact path="/scores">
          <Scores />
        </Route>

      </Switch>

      <Footer />
    </div >
  );
}

export default App;