import React from 'react';
import ReactDOM from 'react-dom';
import { Navbar } from './components/navbar';
import Home from './components/home';
import { HashRouter as Router, Route } from 'react-router-dom'

ReactDOM.render(
  <div>
    <Navbar/>
  </div>
  ,document.getElementById('react-nav')
);

ReactDOM.render(
  <Router>
    <div className="wrapper">
      <Route exact path="/" component={Home} />
    </div>
  </Router> 
  ,document.getElementById('react-container')
)