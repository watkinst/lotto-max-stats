import React from 'react';

require('../../../../../../../sass/totalprizecountintro.scss');

export default class TotalPrizeCountIntro extends React.Component {

  getIntroText() {
    var introText = '';
    introText += "Here are the total prize counts for Lotto Max draws per";
    introText += " number of matches since the first draw on September 25, 2009.";

    return introText;
  }

  render() {
    return (
      <div className="col-xs-12 total-prize-count-intro">
        <h2 className="title">Total Prize Count</h2>
        <p>{this.getIntroText()}</p>
      </div>
    );
  }
}