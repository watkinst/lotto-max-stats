import React from 'react';

require('../../../../../../../sass/totalpercentageprizecountintro.scss');

export default class TotalPercentagePrizeCountIntro extends React.Component {

  getIntroText() {
    var introText = '';
    introText += "Here is the total percent division for Lotto Max prize counts per";
    introText += " number of matches since the first draw on September 25, 2009.";

    return introText;
  }

  render() {
    return (
      <div className="col-xs-12 total-percentage-prize-count-intro">
        <h2 className="title">Total Prize Count ( % )</h2>
        <p>{this.getIntroText()}</p>
      </div>
    );
  }
}