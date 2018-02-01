import React from 'react';
import PropTypes from 'prop-types';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errors: {},
      isLoading: false,
      invalid: false
    }
  }

  render() {
    return (
      <form id="loginForm">

        <input 
          type="email"
          name="email"
          className="form-control"
          placeholder="Email Address"
        />

        <input 
          type="password"
          name="password"
          className="form-control"
          placeholder="Password"
        />

        <div className="form-group">
          <button className="btn btn-primary btn-lg">LOGIN</button>
        </div>
      </form>
    )
  }
}

export default LoginForm;