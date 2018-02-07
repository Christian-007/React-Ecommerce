import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import FontAwesome from 'react-fontawesome';

class UploadForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photo_name: '',
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
  }

  render() {
    const { errors } = this.state;

    return (
      <form onSubmit={this.onSubmit}>

        <div className={classnames("form-group", { 'has-error': this.state.hasError }) }>
          <label className="file btn btn-lg btn-primary">
            CHOOSE FILE
            <input type="file" name="file" hidden/>
          </label>

          <input 
            type="text"
            name="photo_name"
            className="form-control"
            onChange={this.onChange}
            value={this.state.photo_name}
            placeholder="Photo Name"
          />
        </div>

        <hr/>
        <div className="row btn-cols">
          <div className="col-xs-6">
            <button disabled={this.state.isLoading} className="btn btn-primary btn-lg upload-btn">
              {this.state.isLoading ? 'UPLOADING...' : 'UPLOAD'}
            </button>
          </div>
          <div className="col-xs-6">
            <button className="btn btn-primary btn-lg cancel-btn">CANCEL</button>
          </div>
        </div>
      </form>
    )
  }
}

export default UploadForm;