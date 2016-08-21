import React from 'react';

require('../../../../../../../sass/totalpercentagepayoutintro.scss');

export default class TotalPercentagePayoutIntro extends React.Component {

  getIntroText() {
    var introText = '';
    introText += "Here is the total percent division for Lotto Max payouts per";
    introText += " number of matches since the first draw on September 25, 2009.";

    return introText;
  }

  render() {
    return (
      <div className="col-xs-12 total-percentage-payout-intro">
        <h2 className="title">Total Payout ( % )</h2>
        <p>{this.getIntroText()}</p>
      </div>
    );
  }
}