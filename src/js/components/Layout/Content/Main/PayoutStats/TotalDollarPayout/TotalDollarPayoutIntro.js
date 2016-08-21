import React from 'react';

require('../../../../../../../sass/totaldollarpayoutintro.scss');

export default class TotalDollarPayoutIntro extends React.Component {
  render() {
    return (
      <div className="col-xs-12 total-dollar-payout-intro">
        <h2 className="title">Total Payout ( $ )</h2>
        <p>Here are the total Lotto Max dollar payouts per number of matches.</p>
      </div>
    );
  }
}