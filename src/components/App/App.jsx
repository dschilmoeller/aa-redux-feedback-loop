import React from 'react';
import axios from 'axios';
import './App.css';

import Header from '../Header/Header';

import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import ThankYou from '../ThankYou/ThankYou';




function App() {

  return (
    <div className='App'>
      
      <Header />
      <Feeling />
      
      <Header />
      <Understanding />

      <Header />
      <Support />

      <Header />
      <Comments />
      
      <Header />
      <Review />
      
      <Header />
      <ThankYou />

    </div>
  );
}

export default App;
