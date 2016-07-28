import React from 'react';
import Branding from './Header/Branding';
import Navigation from './Header/Navigation';

export default class Header extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-xs-12">
          <header>
            <Branding title={this.props.title} tagline={this.props.tagline} />
            <Navigation />
          </header>
        </div>
      </div>
    );
  }
}