import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import ShopPage from './pages/shop/shop.component.jsx';
import HomePage from './pages/homepage/homepage.component';
import Header from './components/header/header.component.jsx';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE </h1>
  </div>
);

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;