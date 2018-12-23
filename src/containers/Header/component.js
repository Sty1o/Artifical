import React, { Component } from 'react';
import Header from '../../components//Header';

export default class AboutUs extends Component {

  constructor(props) {
    super(props);
  }

	render() {

    return (
      <div>
        <HeaderInner logo={'full'} />
        <AboutUsPage />
        <Footer />
      </div>
    )
  }
}
