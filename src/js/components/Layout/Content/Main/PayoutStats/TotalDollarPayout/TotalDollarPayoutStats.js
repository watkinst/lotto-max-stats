import React from 'react';

require('../../../../../../../sass/totaldollarpayoutstats.scss');

export default class TotalDollarPayoutStats extends React.Component {
  
  render() {

    var totalDollarPayouts = this.props.getTotalDollarPayouts();

    return (
      <div className="col-xs-12 total-dollar-payout-stats">
        <div>7 of 7: {totalDollarPayouts["7_of_7"]}</div>
        <div>6 of 7 + bonus: {totalDollarPayouts["6_of_7_plus_bonus"]}</div>
        <div>6 of 7: {totalDollarPayouts["6_of_7"]}</div>
        <div>5 of 7: {totalDollarPayouts["5_of_7"]}</div>
        <div>4 of 7: {totalDollarPayouts["4_of_7"]}</div>
        <div>3 of 7 + bonus: {totalDollarPayouts["3_of_7_plus_bonus"]}</div>
        <div>3 of 7: {totalDollarPayouts["3_of_7"]}</div>
      </div>
    );
  }
}