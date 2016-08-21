import React from 'react';

require('../../../../../../../sass/averagedollarpayoutstats.scss');

export default class AverageDollarPayoutStats extends React.Component {
  
  render() {

    var averageDollarPayouts = this.props.getAverageDollarPayouts();

    return (
      <div className="col-xs-12 average-dollar-payout-stats">
        <div className="row">
          <div className="col-xs-12 col-lg-6">
            <span className="label label-default">7 of 7: ${this.props.getNumberWithCommas(averageDollarPayouts["7_of_7"])}</span>
            <span className="label label-default">6 of 7 + bonus: ${this.props.getNumberWithCommas(averageDollarPayouts["6_of_7_plus_bonus"])}</span>
            <span className="label label-default">6 of 7: ${this.props.getNumberWithCommas(averageDollarPayouts["6_of_7"])}</span>
            <span className="label label-default">5 of 7: ${this.props.getNumberWithCommas(averageDollarPayouts["5_of_7"])}</span>
          </div>
          <div className="col-xs-12 col-lg-6">
            <span className="label label-default">4 of 7: ${this.props.getNumberWithCommas(averageDollarPayouts["4_of_7"])}</span>
            <span className="label label-default">3 of 7 + bonus: ${this.props.getNumberWithCommas(averageDollarPayouts["3_of_7_plus_bonus"])}</span>
            <span className="label label-default">3 of 7: ${this.props.getNumberWithCommas(averageDollarPayouts["3_of_7"])}</span>
          </div>
        </div>
      </div>
    );
  }
}