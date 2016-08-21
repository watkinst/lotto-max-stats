import React from 'react';

require('../../../../../../../sass/totalpercentagepayoutstats.scss');

export default class TotalPercentagePayoutStats extends React.Component {
  
  render() {

    var totalPercentagePayouts = this.props.getTotalPercentagePayouts();

    return (
      <div className="col-xs-12 total-percentage-payout-stats">
        <div>7 of 7: {totalPercentagePayouts["7_of_7"]}%</div>
        <div>6 of 7 + bonus: {totalPercentagePayouts["6_of_7_plus_bonus"]}%</div>
        <div>6 of 7: {totalPercentagePayouts["6_of_7"]}%</div>
        <div>5 of 7: {totalPercentagePayouts["5_of_7"]}%</div>
        <div>4 of 7: {totalPercentagePayouts["4_of_7"]}%</div>
        <div>3 of 7 + bonus: {totalPercentagePayouts["3_of_7_plus_bonus"]}%</div>
        <div>3 of 7: {totalPercentagePayouts["3_of_7"]}%</div>
      </div>
    );
  }
}