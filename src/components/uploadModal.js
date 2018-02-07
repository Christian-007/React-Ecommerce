import React from 'react';
import FontAwesome from 'react-fontawesome';
import classnames from 'classnames';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import UploadForm from './uploadForm';

class UploadModal extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <div className={classnames("alert", "alert-success", "alert-dismissible") } role="alert">
          <button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          <strong>Success!</strong> You have successfully signed up an account!
        </div>
        
        <div id="uploadModal" className="modal fade" tabIndex="-1" role="dialog">
          <button type="button" className="close" data-dismiss="modal" aria-label="Close"><FontAwesome name='times' /></button>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-body text-center">
                <p><FontAwesome name='cloud-upload' /> UPLOAD PHOTO</p>
                <UploadForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(null)(UploadModal);