import React from 'react';
import {HashRouter as Router, Link} from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import LoginModal from './loginModal';

export class Navbar extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <nav className="navbar navbar-default navbar-fixed-top">
            <div className="container">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <Link to="/" className="navbar-brand"><FontAwesome name='shopping-bag' /> COMMERCE</Link>
              </div>
              <div id="navbar" className="navbar-collapse collapse">
                <ul className="nav navbar-nav navbar-right">
                  <li>
                    <Link className="nav-link" to="/">HOME</Link>
                  </li>
                  {/*<li>
                    <Link className="nav-link" to="/about">GALLERY</Link>
                  </li>*/}
                  <li>
                    <a className="nav-link" href="#" data-toggle="modal" data-target="#loginModal">LOGIN</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </Router>
        <LoginModal/>
      </div>
    )
  }
}