import React from 'react';
import PropTypes from 'prop-types';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: '',
      lname: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      errors: {},
      isLoading: false,
      invalid: false
    }
  }

  render() {
    return (
      <form id="signupForm">

        <input 
          type="text"
          name="fname"
          className="form-control"
          placeholder="First Name"
        />

        <input 
          type="text"
          name="lname"
          className="form-control"
          placeholder="Last Name"
        />

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

        <input 
          type="password"
          name="confirmPass"
          className="form-control"
          placeholder="Confirm Password"
        />

        <div className="form-group">
          <button className="btn btn-primary btn-lg">SIGN UP</button>
        </div>
      </form>
    )
  }
}

export default SignupForm;