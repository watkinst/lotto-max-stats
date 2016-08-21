import React from 'react';

require('../../../../../../../sass/averagedollarpayoutintro.scss');

export default class AverageDollarPayoutIntro extends React.Component {

  getIntroText() {
    var introText = '';
    introText += "Here are the average dollar amounts paid out by Lotto Max per";
    introText += " number of matches since the first draw on September 25, 2009.";

    return introText;
  }

  render() {
    return (
      <div className="col-xs-12 average-dollar-payout-intro">
        <h2 className="title">Average Payout ( $ )</h2>
        <p>{this.getIntroText()}</p>
      </div>
    );
  }
}