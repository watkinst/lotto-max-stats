import React from 'react';

require('../../../../../../../sass/totalpercentagepayoutstats.scss');

export default class TotalPercentagePayoutStats extends React.Component {
  
  render() {

    var totalPercentagePayouts = this.props.getTotalPercentagePayouts();

    return (
      <div className="col-xs-12 total-percentage-payout-stats">
        <div className="row">
          <div className="col-xs-12 col-lg-6">
            <span className="label label-default">7 of 7: {totalPercentagePayouts["7_of_7"]}%</span>
            <span className="label label-default">6 of 7 + bonus: {totalPercentagePayouts["6_of_7_plus_bonus"]}%</span>
            <span className="label label-default">6 of 7: {totalPercentagePayouts["6_of_7"]}%</span>
            <span className="label label-default">5 of 7: {totalPercentagePayouts["5_of_7"]}%</span>
          </div>
          <div className="col-xs-12 col-lg-6">
            <span className="label label-default">4 of 7: {totalPercentagePayouts["4_of_7"]}%</span>
            <span className="label label-default">3 of 7 + bonus: {totalPercentagePayouts["3_of_7_plus_bonus"]}%</span>
            <span className="label label-default">3 of 7: {totalPercentagePayouts["3_of_7"]}%</span>
          </div>
        </div>
      </div>
    );
  }
}