import React from 'react';

require('../../../../../../../sass/totaldollarpayoutstats.scss');

export default class TotalDollarPayoutStats extends React.Component {
  
  render() {

    var totalDollarPayouts = this.props.getTotalDollarPayouts();

    return (
      <div className="col-xs-12 total-dollar-payout-stats">
        <div className="row">
          <div className="col-xs-12 col-lg-6">
            <span className="label label-default">7 of 7: ${this.props.getNumberWithCommas(totalDollarPayouts["7_of_7"])}</span>
            <span className="label label-default">6 of 7 + bonus: ${this.props.getNumberWithCommas(totalDollarPayouts["6_of_7_plus_bonus"])}</span>
            <span className="label label-default">6 of 7: ${this.props.getNumberWithCommas(totalDollarPayouts["6_of_7"])}</span>
            <span className="label label-default">5 of 7: ${this.props.getNumberWithCommas(totalDollarPayouts["5_of_7"])}</span>
          </div>
          <div className="col-xs-12 col-lg-6">
            <span className="label label-default">4 of 7: ${this.props.getNumberWithCommas(totalDollarPayouts["4_of_7"])}</span>
            <span className="label label-default">3 of 7 + bonus: ${this.props.getNumberWithCommas(totalDollarPayouts["3_of_7_plus_bonus"])}</span>
            <span className="label label-default">3 of 7: ${this.props.getNumberWithCommas(totalDollarPayouts["3_of_7"])}</span>
          </div>
        </div>
      </div>
    );
  }
}