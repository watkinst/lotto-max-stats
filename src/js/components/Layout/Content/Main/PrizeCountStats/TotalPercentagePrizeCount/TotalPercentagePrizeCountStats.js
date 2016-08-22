import React from 'react';

require('../../../../../../../sass/totalpercentageprizecountstats.scss');

export default class TotalPercentagePrizeCountStats extends React.Component {
  
  render() {

    var totalPercentagePrizeCounts = this.props.getTotalPercentagePrizeCounts();

    return (
      <div className="col-xs-12 total-percentage-prize-count-stats">
        <div className="row">
          <div className="col-xs-12 col-lg-6">
            <span className="label label-default">7 of 7: {totalPercentagePrizeCounts["7_of_7"]}%</span>
            <span className="label label-default">6 of 7 + bonus: {totalPercentagePrizeCounts["6_of_7_plus_bonus"]}%</span>
            <span className="label label-default">6 of 7: {totalPercentagePrizeCounts["6_of_7"]}%</span>
            <span className="label label-default">5 of 7: {totalPercentagePrizeCounts["5_of_7"]}%</span>
          </div>
          <div className="col-xs-12 col-lg-6">
            <span className="label label-default">4 of 7: {totalPercentagePrizeCounts["4_of_7"]}%</span>
            <span className="label label-default">3 of 7 + bonus: {totalPercentagePrizeCounts["3_of_7_plus_bonus"]}%</span>
            <span className="label label-default">3 of 7: {totalPercentagePrizeCounts["3_of_7"]}%</span>
          </div>
        </div>
      </div>
    );
  }
}