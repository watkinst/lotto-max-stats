import React from 'react';

require('../../../../../../../sass/averagedollarpayoutstats.scss');

export default class AverageDollarPayoutStats extends React.Component {
  
  render() {

    var averageDollarPayouts = this.props.getAverageDollarPayouts();

    return (
      <div className="col-xs-12 average-dollar-payout-stats">
        <div>7 of 7: {averageDollarPayouts["7_of_7"]}</div>
        <div>6 of 7 + bonus: {averageDollarPayouts["6_of_7_plus_bonus"]}</div>
        <div>6 of 7: {averageDollarPayouts["6_of_7"]}</div>
        <div>5 of 7: {averageDollarPayouts["5_of_7"]}</div>
        <div>4 of 7: {averageDollarPayouts["4_of_7"]}</div>
        <div>3 of 7 + bonus: {averageDollarPayouts["3_of_7_plus_bonus"]}</div>
        <div>3 of 7: {averageDollarPayouts["3_of_7"]}</div>
      </div>
    );
  }
}