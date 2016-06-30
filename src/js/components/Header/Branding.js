import React from 'react';
import Title from './Branding/Title';
import Tagline from './Branding/Tagline';

export default class Branding extends React.Component {
  render() {
    return (
    	<div className="branding">
        <Title title={this.props.title} />
      	<Tagline tagline={this.props.tagline} />      	
      </div>
    );
  }
}