import React from 'react';

class Gallery extends React.Component {
  render() {
    return (
      <section id="gallery">
        <p className="gallery-title text-center">GALLERY</p>
        <div className="row wrapper">
          <div className="col-md-4 col-xs-12">
            <div className="thumbnail">
              <img alt="berlin" className="img-responsive logo" src="images/berlin.jpg"/>
            </div>
            <div className="caption">
              <div className="row">
                <div className="col-xs-10">
                  <div className="row">
                    <p className="img-title">The Berlin Street</p>
                  </div>
                  <div className="row">
                    <p className="owner">By Jake Newton</p>
                  </div>
                </div>
                <div className="col-xs-2 text-right">
                  $20
                </div>
              </div>
            </div>
          </div>  
        </div>
      </section>
    )
  }
}

export default Gallery;