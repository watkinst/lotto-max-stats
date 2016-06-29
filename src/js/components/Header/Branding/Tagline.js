import React from 'react';

export default class Tagline extends React.Component {
  render() {
    return (
    	<h4>{this.props.tagline}</h4>
    );
  }
}