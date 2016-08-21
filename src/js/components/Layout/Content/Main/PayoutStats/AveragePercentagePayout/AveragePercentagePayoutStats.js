import React from 'react';

require('../../../../../../../sass/averagepercentagepayoutstats.scss');

export default class AveragePercentagePayoutStats extends React.Component {
  
  render() {

    var averagePercentagePayouts = this.props.getAveragePercentagePayouts();

    return (
      <div className="col-xs-12 average-percentage-payout-stats">
        <div className="row">
          <div className="col-xs-12 col-lg-6">
            <span className="label label-default">7 of 7: {averagePercentagePayouts["7_of_7"]}%</span>
            <span className="label label-default">6 of 7 + bonus: {averagePercentagePayouts["6_of_7_plus_bonus"]}%</span>
            <span className="label label-default">6 of 7: {averagePercentagePayouts["6_of_7"]}%</span>
            <span className="label label-default">5 of 7: {averagePercentagePayouts["5_of_7"]}%</span>
          </div>
          <div className="col-xs-12 col-lg-6">
            <span className="label label-default">4 of 7: {averagePercentagePayouts["4_of_7"]}%</span>
            <span className="label label-default">3 of 7 + bonus: {averagePercentagePayouts["3_of_7_plus_bonus"]}%</span>
            <span className="label label-default">3 of 7: {averagePercentagePayouts["3_of_7"]}%</span>
          </div>
        </div>
      </div>
    );
  }
}