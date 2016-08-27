import React from 'react';

require('../../../../../../../sass/averagepercentagepayoutstats.scss');

export default class AveragePercentagePayoutStats extends React.Component {
  
  render() {

    var averagePercentagePayouts = this.props.getAveragePercentagePayouts();

    return (
      <div className="col-xs-12">
        <div className="average-percentage-payout-stats">
          <div className="row">
            <div className="col-xs-12 col-lg-6">
              <span className="btn btn-primary disabled">7 of 7: {averagePercentagePayouts["7_of_7"]}%</span>
              <span className="btn btn-primary disabled">6 of 7 + bonus: {averagePercentagePayouts["6_of_7_plus_bonus"]}%</span>
              <span className="btn btn-primary disabled">6 of 7: {averagePercentagePayouts["6_of_7"]}%</span>
              <span className="btn btn-primary disabled">5 of 7: {averagePercentagePayouts["5_of_7"]}%</span>
            </div>
            <div className="col-xs-12 col-lg-6">
              <span className="btn btn-primary disabled">4 of 7: {averagePercentagePayouts["4_of_7"]}%</span>
              <span className="btn btn-primary disabled">3 of 7 + bonus: {averagePercentagePayouts["3_of_7_plus_bonus"]}%</span>
              <span className="btn btn-primary disabled">3 of 7: {averagePercentagePayouts["3_of_7"]}%</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}