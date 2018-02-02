import React from 'react';
import ReactDOM from 'react-dom';
import { Navbar } from './components/navbar';
import Home from './components/home';
import { HashRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

const store = createStore(
  (state = {}) => state,
  applyMiddleware(thunk)
);

ReactDOM.render(
  <Provider store={store}>
    <Navbar/>
  </Provider>
  ,document.getElementById('react-nav')
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div className="wrapper">
        <Route exact path="/" component={Home} />
      </div>
    </Router> 
  </Provider>
  ,document.getElementById('react-container')
)