import React from 'react';

require('../../../../../../sass/totaldrawsintro.scss');

export default class TotalDrawsIntro extends React.Component {

  render() {
    return (
      <div className="col-xs-12 total-draws-intro">
        <h2 className="title">Total Lotto Max Draws</h2>
        <p>Here is the total number of Lotto Max draws so far.</p>
      </div>
    );
  }
}