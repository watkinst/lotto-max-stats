import React from 'react';

import Branding from './Header/Branding';
import Navigation from './Header/Navigation';

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <Branding title={this.props.title} tagline={this.props.tagline} />
        <Navigation />
      </header>
    );
  }
}