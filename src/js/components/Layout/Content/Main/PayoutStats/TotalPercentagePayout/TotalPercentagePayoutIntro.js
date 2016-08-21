import React from 'react';

require('../../../../../../../sass/totalpercentagepayoutintro.scss');

export default class TotalPercentagePayoutIntro extends React.Component {
  render() {
    return (
      <div className="col-xs-12 total-percentage-payout-intro">
        <h2 className="title">Total Payout ( % )</h2>
        <p>Here are the total Lotto Max payout percentages per number of matches.</p>
      </div>
    );
  }
}