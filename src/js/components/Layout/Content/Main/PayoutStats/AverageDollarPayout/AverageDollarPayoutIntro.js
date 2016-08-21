import React from 'react';

require('../../../../../../../sass/averagedollarpayoutintro.scss');

export default class AverageDollarPayoutIntro extends React.Component {
  render() {
    return (
      <div className="col-xs-12 average-dollar-payout-intro">
        <h2 className="title">Average Payout ( $ )</h2>
        <p>Here are the average Lotto Max dollar payouts per number of matches.</p>
      </div>
    );
  }
}