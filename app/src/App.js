// Default Imports
import React from 'react';
import HeroPage from './components/HeroPage';
import { Route } from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <Route path='/characters'>
        <HeroPage/>
      </Route>
    </div>
  );
}

export default App;
