import React from 'react';

require('../../../../../../../sass/averagepercentagepayoutintro.scss');

export default class AveragePercentagePayoutIntro extends React.Component {
  render() {
    return (
      <div className="col-xs-12 average-percentage-payout-intro">
        <h2 className="title">Average Payout ( % )</h2>
        <p>Here are the average Lotto Max payout percentages per number of matches.</p>
      </div>
    );
  }
}