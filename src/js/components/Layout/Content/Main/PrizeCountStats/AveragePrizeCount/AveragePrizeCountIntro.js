import React from 'react';

require('../../../../../../../sass/averageprizecountintro.scss');

export default class AveragePrizeCountIntro extends React.Component {

  getIntroText() {
    var introText = '';
    introText += "Here are the average prize counts for Lotto Max draws per";
    introText += " number of matches since the first draw on September 25, 2009.";

    return introText;
  }

  render() {
    return (
      <div className="col-xs-12 average-prize-count-intro">
        <h2 className="title">Average Prize Count</h2>
        <p>{this.getIntroText()}</p>
      </div>
    );
  }
}