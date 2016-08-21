import React from 'react';

require('../../../../../../../sass/averagepercentagepayoutstats.scss');

export default class AveragePercentagePayoutStats extends React.Component {
  
  render() {

    var averagePercentagePayouts = this.props.getAveragePercentagePayouts();

    return (
      <div className="col-xs-12 average-percentage-payout-stats">
        <div>7 of 7: {averagePercentagePayouts["7_of_7"]}%</div>
        <div>6 of 7 + bonus: {averagePercentagePayouts["6_of_7_plus_bonus"]}%</div>
        <div>6 of 7: {averagePercentagePayouts["6_of_7"]}%</div>
        <div>5 of 7: {averagePercentagePayouts["5_of_7"]}%</div>
        <div>4 of 7: {averagePercentagePayouts["4_of_7"]}%</div>
        <div>3 of 7 + bonus: {averagePercentagePayouts["3_of_7_plus_bonus"]}%</div>
        <div>3 of 7: {averagePercentagePayouts["3_of_7"]}%</div>
      </div>
    );
  }
}