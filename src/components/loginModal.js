import React from 'react';
import FontAwesome from 'react-fontawesome';
import SignupForm from './signupForm';
import LoginForm from './loginForm';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { userSignupRequest } from '../actions/signupActions';
import PropTypes from 'prop-types';

class LoginModal extends React.Component {
  constructor(){
    super();
    this.state = {
      isRegistered: false
    }
    this.onSignup = this.onSignup.bind(this);
  }

  onSignup(data) {
    console.log("RegisterVal: " + data);
    this.setState({
      isRegistered: data
    });

    setTimeout(function() { 
      this.setState({
        isRegistered: false
      }); 
    }.bind(this), 3000);
  }

  render() {
    const { userSignupRequest } = this.props;
    return (
      <div>
        <div className={classnames("alert", "alert-success", "alert-dismissible", { "isShown": this.state.isRegistered }) } role="alert">
          <button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          <strong>Success!</strong> You have successfully signed up an account!
        </div>
        <div id="loginModal" className="modal fade" tabIndex="-1" role="dialog">
          <button type="button" className="close" data-dismiss="modal" aria-label="Close"><FontAwesome name='times' /></button>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                {/*<button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>*/}
                <ul className="nav nav-tabs" role="tablist">
                  <li role="presentation" className="active"><a className="signupLink" href="#signupTab" aria-controls="signupTab" role="tab" data-toggle="tab">SIGN UP</a></li>
                  <li role="presentation"><a className="loginLink" href="#loginTab" aria-controls="loginTab" role="tab" data-toggle="tab">LOGIN</a></li>
                  
                </ul>
              </div>
              <div className="modal-body">
                <div className="tab-content text-center">
                  <div role="tabpanel" className="tab-pane active" id="signupTab">
                    <p><FontAwesome name='user-circle-o' /> SIGN UP</p>
                    <SignupForm
                      userSignupRequest={userSignupRequest}
                      onSignup={this.onSignup}
                    />
                  </div>
                  <div role="tabpanel" className="tab-pane" id="loginTab">
                    <p><FontAwesome name='envelope-o' /> LOGIN USING EMAIL ADDRESS</p>
                    <LoginForm/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

LoginModal.propTypes = {
  userSignupRequest: PropTypes.func.isRequired
}

export default connect(null, { userSignupRequest })(LoginModal);