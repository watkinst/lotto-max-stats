import React from 'react';

require('../../../../../../../sass/totaldollarpayoutintro.scss');

export default class TotalDollarPayoutIntro extends React.Component {

  getIntroText() {
    var introText = '';
    introText += "Here are the total dollar amounts paid out by Lotto Max per";
    introText += " number of matches since the first draw on September 25, 2009.";

    return introText;
  }

  render() {
    return (
      <div className="col-xs-12 total-dollar-payout-intro">
        <h2 className="title">Total Payout ( $ )</h2>
        <p>{this.getIntroText()}</p>
      </div>
    );
  }
}