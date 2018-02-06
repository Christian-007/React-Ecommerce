import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import FontAwesome from 'react-fontawesome';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errors: {},
      isLoading: false,
      invalid: false,
      hasError: false
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    this.setState({ errors: {}, hasError: false, isLoading: true }); // clears any previous errors
    this.props.userLoginRequest(this.state)
    .then(() => {
      window.location.reload();
    })
    .catch((error) => {
      this.setState({ errors: error.response.data, isLoading: false, hasError: true });
    });
  }

  render() {
    const { errors } = this.state;

    return (
      <form id="loginForm" onSubmit={this.onSubmit}>
        {errors.email, errors.password &&
          <div className="well error">
            <p>
              <FontAwesome name='exclamation-triangle' /> All fields are required. Please try again.
            </p>
          </div>
        }

        {errors.form &&
          <div className="well error">
            <p>
              <FontAwesome name='exclamation-triangle' /> {errors.form}
            </p>
          </div>
        }


        <div className={classnames("form-group", { 'has-error': this.state.hasError }) }>
          <input 
            type="email"
            name="email"
            className="form-control"
            onChange={this.onChange}
            value={this.state.email}
            placeholder="Email Address"
          />
        </div>

        <div className={classnames("form-group", { 'has-error': this.state.hasError }) }>
          <input 
            type="password"
            name="password"
            className="form-control"
            onChange={this.onChange}
            value={this.state.password}
            placeholder="Password"
          />
        </div>

        <div className="form-group">
          <button disabled={this.state.isLoading} className="btn btn-primary btn-lg">
            {this.state.isLoading ? 'AUTHENTICATING...' : 'LOGIN'}
          </button>
        </div>
      </form>
    )
  }
}

LoginForm.propTypes = {
  userLoginRequest: PropTypes.func.isRequired
}

export default LoginForm;