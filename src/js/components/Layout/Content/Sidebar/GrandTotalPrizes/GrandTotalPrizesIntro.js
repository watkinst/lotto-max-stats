import React from 'react';

require('../../../../../../sass/grandtotalprizesintro.scss');

export default class GrandTotalPrizesIntro extends React.Component {

  render() {
    return (
      <div className="col-xs-12 grand-total-prizes-intro">
        <h2 className="title">Total Lotto Max Prizes</h2>
        <p>Here is the grand total of Lotto Max prizes so far.</p>
      </div>
    );
  }
}