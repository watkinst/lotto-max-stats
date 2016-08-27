import React from 'react';

require('../../../../../../../sass/totaldollarpayoutstats.scss');

export default class TotalDollarPayoutStats extends React.Component {
  
  render() {

    var totalDollarPayouts = this.props.getTotalDollarPayouts();

    return (
      <div className="col-xs-12">
        <div className="total-dollar-payout-stats">
          <div className="row">
            <div className="col-xs-12 col-lg-6">
              <span className="btn btn-primary disabled">7 of 7: ${this.props.getNumberWithCommas(totalDollarPayouts["7_of_7"])}</span>
              <span className="btn btn-primary disabled">6 of 7 + bonus: ${this.props.getNumberWithCommas(totalDollarPayouts["6_of_7_plus_bonus"])}</span>
              <span className="btn btn-primary disabled">6 of 7: ${this.props.getNumberWithCommas(totalDollarPayouts["6_of_7"])}</span>
              <span className="btn btn-primary disabled">5 of 7: ${this.props.getNumberWithCommas(totalDollarPayouts["5_of_7"])}</span>
            </div>
            <div className="col-xs-12 col-lg-6">
              <span className="btn btn-primary disabled">4 of 7: ${this.props.getNumberWithCommas(totalDollarPayouts["4_of_7"])}</span>
              <span className="btn btn-primary disabled">3 of 7 + bonus: ${this.props.getNumberWithCommas(totalDollarPayouts["3_of_7_plus_bonus"])}</span>
              <span className="btn btn-primary disabled">3 of 7: ${this.props.getNumberWithCommas(totalDollarPayouts["3_of_7"])}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}