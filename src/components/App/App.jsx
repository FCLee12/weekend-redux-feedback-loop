import React from 'react';
import axios from 'axios';
import './App.css';

import { useSelector } from "react-redux";
import { HashRouter as Router, Route } from "react-router-dom";
import { useEffect, useState } from "react";

// Components
import FeelingsRating from '../FeelingsRating/FeelingsRating';
import UnderstandingRating from '../UnderstandingRating/UnderstandingRating';
import SupportedRating from '../SupportedRating/SupportedRating';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';

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
