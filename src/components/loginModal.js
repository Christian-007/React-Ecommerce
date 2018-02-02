import React from 'react';
import FontAwesome from 'react-fontawesome';
import SignupForm from './signupForm';
import LoginForm from './loginForm';
import { connect } from 'react-redux';
import { userSignupRequest } from '../actions/signupActions';
import PropTypes from 'prop-types';

class LoginModal extends React.Component {
  render() {
    const { userSignupRequest } = this.props;
    return (
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
    )
  }
}

LoginModal.propTypes = {
  userSignupRequest: PropTypes.func.isRequired
}

export default connect(null, { userSignupRequest })(LoginModal);