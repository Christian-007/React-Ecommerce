import React from 'react';
import LandingPage from './landingPage';
import Gallery from './gallery';

class Home extends React.Component {
  render() {
    return (
      <div id="content-wrapper">
        <LandingPage/>
        <Gallery/>
      </div>
    )
  }
}

export default Home;