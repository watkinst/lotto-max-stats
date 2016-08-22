import React from 'react';

require('../../../../../../../sass/averagepercentageprizecountintro.scss');

export default class AveragePercentagePrizeCountIntro extends React.Component {

  getIntroText() {
    var introText = '';
    introText += "Here is the average percent division for Lotto Max prize counts per";
    introText += " number of matches since the first draw on September 25, 2009.";

    return introText;
  }

  render() {
    return (
      <div className="col-xs-12 average-percentage-prize-count-intro">
        <h2 className="title">Average Prize Count ( % )</h2>
        <p>{this.getIntroText()}</p>
      </div>
    );
  }
}