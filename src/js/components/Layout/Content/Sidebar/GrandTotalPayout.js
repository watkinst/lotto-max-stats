import React from 'react';
import GrandTotalPayoutIntro from './GrandTotalPayout/GrandTotalPayoutIntro';
import GrandTotalPayoutNumbers from './GrandTotalPayout/GrandTotalPayoutNumbers';

require('../../../../../sass/grandtotalpayout.scss');

export default class GrandTotalPayout extends React.Component {

  getTotalDollarPayouts() {
    var draws = this.props.data.draws;
    var totalDollarPayouts = {};

    for (var i = 0; i < draws.length; i++) {
      $.each(draws[i].lotto_max.match, (key, value) => {
        var numberOfPrizes = value.number_of_prizes;
        if (numberOfPrizes > 0) {
          var prizeAmount = value.prize_amount;
          if (!(key in totalDollarPayouts)) {
            totalDollarPayouts[key] = prizeAmount * numberOfPrizes;
          } else {
            totalDollarPayouts[key] += prizeAmount * numberOfPrizes;
          }
        }
      });
    }

    $.each(totalDollarPayouts, (key, value) => {
      totalDollarPayouts[key] = value.toFixed(2);
    });

    return totalDollarPayouts;
  }

  getGrandTotalOfTotalDollarPayouts() {
    var grandTotalOfTotalDollarPayouts = 0;
    var totalDollarPayouts = this.getTotalDollarPayouts();

    $.each(totalDollarPayouts, (key, value) => {
      grandTotalOfTotalDollarPayouts += Number(value);
    });

    return grandTotalOfTotalDollarPayouts.toFixed(2);
  }

  getNumberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  render() {
    return (
      <div className="col-xs-12 col-sm-4 col-lg-12">
        <div className="grand-total-payout-container">
          <div className="row">
            <GrandTotalPayoutIntro />
            <GrandTotalPayoutNumbers getGrandTotalOfTotalDollarPayouts={this.getGrandTotalOfTotalDollarPayouts.bind(this)}
                                     getNumberWithCommas={this.getNumberWithCommas.bind(this)} />
          </div>
        </div>
      </div>
    );
  }
}