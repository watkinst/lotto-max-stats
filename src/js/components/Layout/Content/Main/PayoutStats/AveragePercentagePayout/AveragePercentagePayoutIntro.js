import React from 'react';

require('../../../../../../../sass/averagepercentagepayoutintro.scss');

export default class AveragePercentagePayoutIntro extends React.Component {

  getIntroText() {
    var introText = '';
    introText += "Here is the average percent division for Lotto Max payouts per";
    introText += " number of matches since the first draw on September 25, 2009.";

    return introText;
  }

  render() {
    return (
      <div className="col-xs-12 average-percentage-payout-intro">
        <h2 className="title">Average Payout ( % )</h2>
        <p>{this.getIntroText()}</p>
      </div>
    );
  }
}