import React from 'react';
import FontAwesome from 'react-fontawesome'

class LandingPage extends React.Component {
  render() {
    return (
      <section id="fullPage" className="landing">
        <div className="table-wrapper">
          <div className="table-cell text-center">
            <p className="brand-name"><FontAwesome name='shopping-bag' /> COMMERCE</p>
            <p className="brand-description">An e-commerce website fills up with collections of photos.</p>
            <a className="start-browse page-scroll" href="#gallery">START BROWSING</a>
          </div>
        </div>
      </section>
    )
  }
}

export default LandingPage;