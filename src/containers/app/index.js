import React from 'react';
import { Route, Link } from 'react-router-dom'
import Home from '../home'
import About from '../about'

import './App.css';

const App = () => (
  <div className="App">
    <header className="App-header">
      <Link to="/">Home</Link>
      <Link to="/about-us">About</Link>
    </header>

    <main className="App-intro">
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={About} />
    </main>
  </div>
)

export default App;