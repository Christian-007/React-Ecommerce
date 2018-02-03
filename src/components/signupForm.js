import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import FontAwesome from 'react-fontawesome';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: '',
      lname: '',
      email: '',
      password: '',
      confirmPass: '',
      errors: {},
      isLoading: false,
      invalid: false
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(this.state);
    this.setState({ errors: {}, isLoading: true }); // clears any previous errors
    this.props.userSignupRequest(this.state)
    .then(() => {
      console.log("No error!");
    })
    .catch((error) => {
      this.setState({ errors: error.response.data, isLoading: false })
    });
  }

  render() {
    const { errors } = this.state;

    return (
      <form id="signupForm" onSubmit={this.onSubmit}>
        {errors.email, errors.confirmPass &&
          <div className="well error">
            <p>
              <FontAwesome name='exclamation-triangle' /> The email is incorrect or password does not match. Please try again.
            </p>
          </div>
        }

        <div className={classnames("form-group", { 'has-error': errors.fname }) }>
          <input
            error={errors.fname} 
            type="text"
            name="fname"
            onChange={this.onChange}
            value={this.state.fname}
            className="form-control"
            placeholder="First Name"
            required
          />
        </div>

        <div className={classnames("form-group", { 'has-error': errors.lname }) }>
          <input
            error={errors.lname} 
            type="text"
            name="lname"
            onChange={this.onChange}
            value={this.state.lname}
            className="form-control"
            placeholder="Last Name"
            required
          />
        </div>

        <div className={classnames("form-group", { 'has-error': errors.email }) }>
          <input
            error={errors.email} 
            type="email"
            name="email"
            onChange={this.onChange}
            value={this.state.email}
            className="form-control"
            placeholder="Email Address"
            required
          />
        </div>

        <div className={classnames("form-group", { 'has-error': errors.password }) }>
          <input
            error={errors.password} 
            type="password"
            name="password"
            onChange={this.onChange}
            value={this.state.password}
            className="form-control"
            placeholder="Password"
            required
          />
        </div>

        <div className={classnames("form-group", { 'has-error': errors.confirmPass }) }>
          <input
            error={errors.confirmPass} 
            type="password"
            name="confirmPass"
            onChange={this.onChange}
            value={this.state.confirmPass}
            className="form-control"
            placeholder="Confirm Password"
            required
          />
        </div>

        <div className="form-group">
          <button className="btn btn-primary btn-lg">SIGN UP</button>
        </div>
      </form>
    )
  }
}

SignupForm.propTypes = {
  userSignupRequest: PropTypes.func.isRequired
}

export default SignupForm;