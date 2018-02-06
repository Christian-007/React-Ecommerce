import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/navbar';
import Home from './components/home';
import { HashRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './rootReducer';
import setAuthorizationToken from './utils/setAuthorizationToken';
import jwt from 'jsonwebtoken';
import { setCurrentUser } from './actions/loginActions';

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

if (localStorage.jwtToken) {
  setAuthorizationToken(localStorage.jwtToken);
  store.dispatch(setCurrentUser(jwt.decode(localStorage.jwtToken)));
}


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