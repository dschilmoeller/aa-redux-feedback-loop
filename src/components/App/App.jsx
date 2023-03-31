import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from "react-router-dom";

import Header from '../Header/Header';

// note: in order
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import ThankYou from '../ThankYou/ThankYou';

// TODO
// ROUTE IN SERVER.JS
// ROUTER CREATION AND SETUP, DB STUFF

function App() {

  return (
    <div className='App'>
      <Router>
      
      <Route exact path="/">
      <Header />
      <Feeling />
      </Route>
      
      <Route exact path="/understanding">
      <Header />
      <Understanding />
      </Route>

      <Route exact path="/support">
      <Header />
      <Support />
      </Route>

      <Route exact path="/comments">
      <Header />
      <Comments />
      </Route>
      
      <Route exact path="/review">
      <Header />
      <Review />
      </Route>
      
      <Route exact path="/thankyou">
      <Header />
      <ThankYou />
      </Route>

      </Router>
    </div>
  );
}

export default App;
