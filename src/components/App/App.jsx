import React from 'react';
import axios from 'axios';
import './App.css';

import { useSelector } from "react-redux";
import { HashRouter as Router, Route } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {

  return (
    <Router>
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
    </div>
    <Route exact path='/'>
      <FeelingsRating />
    </Route>
    <Route exact path='/understanding'>
      <UnderstandingRating />
    </Route>
    <Route exact path='/supported'>
      <SupportedRating />
    </Route>
    <Route exact path='/comments'>
      <Comments />
    </Route>
    <Route exact path='/review'>
      <Review />
    </Route>
    </Router>
  );
}

export default App;
