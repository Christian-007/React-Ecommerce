import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import FontAwesome from 'react-fontawesome';
import { connect } from 'react-redux';

class UploadForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photo_name: '',
      file: null,
      errors: {},
      isLoading: false,
      invalid: false,
      hasError: false
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    if(e.target.name === "file")
      this.setState({ file: e.target.files[0] });
    else
      this.setState({ [e.target.name]: e.target.value });
  }

  cancelClicked(e) {
    e.preventDefault();
    console.log("CANCEL IS CLICKED");
  }

  onSubmit(e) {
    e.preventDefault();
    const { user } = this.props.login;
    const formData = new FormData();
    formData.append('photo_name', this.state.photo_name);
    formData.append('file', this.state.file);
    formData.append('user_id', user.id);
    formData.append('errors', this.state.errors);
    const config = {
      headers: {
          'content-type': 'multipart/form-data'
      }
    };
    alert(
      `Selected file - ${this.state.file.name}\nPhoto Name - ${this.state.photo_name}`
    );
    this.props.uploadPhoto(formData, config);
  }

  render() {
    const { errors } = this.state;

    return (
      <form className="form-horizontal" onSubmit={this.onSubmit}>

        <div className={classnames("form-group", { 'has-error': this.state.hasError }) }>
          <label className="col-sm-4 control-label">File Upload: </label>
          <div className="col-sm-8">
            <input 
              type="file" 
              name="file" 
              onChange={this.onChange}
            />
          </div>
        </div>

        <div className={classnames("form-group", { 'has-error': this.state.hasError }) }>
          <label className="col-sm-4 control-label">Photo Name: </label>
          <div className="col-sm-8">
            <input 
              type="text"
              name="photo_name"
              className="form-control"
              onChange={this.onChange}
              value={this.state.photo_name}
              placeholder="Photo Name"
            />
          </div>
        </div>

        <hr/>
        <div className="row btn-cols">
          <div className="col-xs-6">
            <button disabled={this.state.isLoading} className="btn btn-primary btn-lg upload-btn">
              {this.state.isLoading ? 'UPLOADING...' : 'UPLOAD'}
            </button>
          </div>
          <div className="col-xs-6">
            <button onClick={this.cancelClicked.bind(this)} data-dismiss="modal" className="btn btn-primary btn-lg cancel-btn">CANCEL</button>
          </div>
        </div>
      </form>
    )
  }
}

UploadForm.propTypes = {
  uploadPhoto: PropTypes.func.isRequired,
  login: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    login: state.login
  }
}

export default connect(mapStateToProps)(UploadForm);