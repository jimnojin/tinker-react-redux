import React from 'react';
import { Route, Link } from 'react-router-dom'
import Home from '../home'
import requestListView from '../requestListView/requestListView'

import './App.css';

const App = () => (
  <div className="App">
    <header className="App-header">
      <Link to="/">Home</Link>
      <Link to="/requests">Requests</Link>
    </header>

    <main className="App-intro">
      <Route exact path="/" component={Home} />
      <Route exact path="/requests" component={requestListView} />
    </main>
  </div>
)

export default App;