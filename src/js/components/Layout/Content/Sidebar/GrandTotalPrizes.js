import React from 'react';
import GrandTotalPrizesIntro from './GrandTotalPrizes/GrandTotalPrizesIntro';
import GrandTotalPrizesNumbers from './GrandTotalPrizes/GrandTotalPrizesNumbers';

require('../../../../../sass/grandtotalprizes.scss');

export default class GrandTotalPrizes extends React.Component {

  getTotalPrizeCounts() {
    var draws = this.props.data.draws;
    var totalPrizeCounts = {};

    for (var i = 0; i < draws.length; i++) {
      $.each(draws[i].lotto_max.match, (key, value) => {
        var numberOfPrizes = value.number_of_prizes;
        if (numberOfPrizes > 0) {
          if (!(key in totalPrizeCounts)) {
            totalPrizeCounts[key] = numberOfPrizes;
          } else {
            totalPrizeCounts[key] += numberOfPrizes;
          }
        }
      });
    }

    $.each(totalPrizeCounts, (key, value) => {
      totalPrizeCounts[key] = value.toFixed(0);
    });

    return totalPrizeCounts;
  }

  getGrandTotalOfTotalPrizeCounts() {
    var grandTotalOfTotalPrizeCounts = 0;
    var totalPrizeCounts = this.getTotalPrizeCounts();

    $.each(totalPrizeCounts, (key, value) => {
      grandTotalOfTotalPrizeCounts += Number(value);
    });

    return grandTotalOfTotalPrizeCounts;
  }

  getNumberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  render() {
    return (
      <div className="col-xs-12 col-sm-4 col-lg-12">
        <div className="grand-total-prizes-container">
          <div className="row">
            <GrandTotalPrizesIntro />
            <GrandTotalPrizesNumbers getGrandTotalOfTotalPrizeCounts={this.getGrandTotalOfTotalPrizeCounts.bind(this)}
                                     getNumberWithCommas={this.getNumberWithCommas.bind(this)} />
          </div>
        </div>
      </div>
    );
  }
}