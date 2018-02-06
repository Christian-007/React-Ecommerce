import React from 'react';
import {HashRouter as Router, Link} from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import LoginModal from './loginModal';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../actions/loginActions';

class Navbar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      linkClicked: ""
    }
  }

  logout(e){
    e.preventDefault();
    this.props.logout();
  }

  render() {
    const { isAuthenticated } = this.props.login;

    const userLinks = (
      <ul className="nav navbar-nav navbar-right">
        <li>
          <a href="#" onClick={this.logout.bind(this)} className="nav-link">LOGOUT</a>
        </li>
      </ul>
    );

    const guestLinks = (
      <ul className="nav navbar-nav navbar-right">
        <li>
          <Link className="nav-link" to="/">HOME</Link>
        </li>
        <li>
          <a className="nav-link" onClick={() => this.setState({linkClicked: "signup"})} href="#" data-toggle="modal" data-target="#loginModal">SIGN UP</a>
        </li>
        <li>
          <a className="nav-link" onClick={() => this.setState({linkClicked: "login"})} href="#" data-toggle="modal" data-target="#loginModal">LOGIN</a>
        </li>
      </ul>
    );
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
                { isAuthenticated ? userLinks : guestLinks }
              </div>
            </div>
          </nav>
        </Router>
        <LoginModal clickedLink={this.state.linkClicked}/>
      </div>
    )
  }
}

Navbar.propTypes = {
  login: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    login: state.login
  }
}

export default connect(mapStateToProps, { logout })(Navbar);