import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getPhotoCollections } from '../actions/uploadActions';

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      uploads: []
    }
  }

  componentDidMount() {
    this.props.getPhotoCollections()
    .then((res) => {
      console.log(res.data.uploads);
      this.setState({ uploads: res.data.uploads });
      for(let i=0; i<res.data.uploads.length; i++){
        console.log(res.data.uploads[i].photo_name);
      }
    })
    .catch((error) => {
      console.log(error);
    });
  }

  render() {
    const { uploads } = this.state;
    const photoURL = 'http://localhost:5000/api/photo/'

    return (
      <section id="gallery">
        <p className="gallery-title text-center">GALLERY</p>
        <div className="container">
          <div className="row wrapper">
            {uploads.map((upload, index) => (
               // <span className='indent' key={index} />
               <a href="#" key={index}>
                <div className="col-md-4 col-xs-12">
                  <div className="photo-col">
                    <div className="photo">
                      <img alt="berlin" className="img-responsive logo" src={photoURL+upload.filename}/>
                      <p className="price">${upload.id}</p>
                    </div>
                    <div className="caption">
                      <div className="row">
                        <div className="col-xs-6">
                          <p className="img-title">{upload.photo_name}</p>
                        </div>
                        <div className="col-xs-6 text-right">
                          <p className="owner">By Jake Newton</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>  
              </a>
            ))}
          </div>
        </div>
      </section>
    )
  }
}

Gallery.propTypes = {
  getPhotoCollections: PropTypes.func.isRequired
}

export default connect(null, { getPhotoCollections })(Gallery);