import React from 'react';

require('../../../../../../../sass/averagepercentageprizecountstats.scss');

export default class AveragePercentagePrizeCountStats extends React.Component {
  
  render() {

    var averagePercentagePrizeCounts = this.props.getAveragePercentagePrizeCounts();

    return (
      <div className="col-xs-12 average-percentage-prize-count-stats">
        <div className="row">
          <div className="col-xs-12 col-lg-6">
            <span className="label label-default">7 of 7: {averagePercentagePrizeCounts["7_of_7"]}%</span>
            <span className="label label-default">6 of 7 + bonus: {averagePercentagePrizeCounts["6_of_7_plus_bonus"]}%</span>
            <span className="label label-default">6 of 7: {averagePercentagePrizeCounts["6_of_7"]}%</span>
            <span className="label label-default">5 of 7: {averagePercentagePrizeCounts["5_of_7"]}%</span>
          </div>
          <div className="col-xs-12 col-lg-6">
            <span className="label label-default">4 of 7: {averagePercentagePrizeCounts["4_of_7"]}%</span>
            <span className="label label-default">3 of 7 + bonus: {averagePercentagePrizeCounts["3_of_7_plus_bonus"]}%</span>
            <span className="label label-default">3 of 7: {averagePercentagePrizeCounts["3_of_7"]}%</span>
          </div>
        </div>
      </div>
    );
  }
}