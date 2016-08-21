import React from 'react';
import AverageDollarPayout from './PayoutStats/AverageDollarPayout';
import TotalDollarPayout from './PayoutStats/TotalDollarPayout';
import AveragePercentagePayout from './PayoutStats/AveragePercentagePayout';
import TotalPercentagePayout from './PayoutStats/TotalPercentagePayout';

export default class PayoutStats extends React.Component {

  getAverageDollarPayouts() {
    var draws = this.props.data.draws;
    var numberOfPayingDrawsPerMatchLevel = {};    
    var averageDollarPayouts = {};
    var totalDollarPayouts = this.getTotalDollarPayouts();

    for (var i = 0; i < draws.length; i++) {
      $.each(draws[i].lotto_max.match, (key, value) => {
        var numberOfPrizes = value.number_of_prizes;
        if (numberOfPrizes > 0) {
          if (!(key in numberOfPayingDrawsPerMatchLevel)) {
            numberOfPayingDrawsPerMatchLevel[key] = 1;
          } else {
            numberOfPayingDrawsPerMatchLevel[key]++;
          }
        }
      });
    }

    $.each(totalDollarPayouts, (key, value) => {
      var numberOfDraws = numberOfPayingDrawsPerMatchLevel[key];
      averageDollarPayouts[key] = (value / numberOfDraws).toFixed(2);
    });

    return averageDollarPayouts;
  }

  getAveragePercentagePayouts() {
    var averagePercentagePayouts = {};
    var grandTotalAverageDollarPayouts = this.getGrandTotalOfAverageDollarPayouts();
    var averageDollarPayouts = this.getAverageDollarPayouts();

    $.each(averageDollarPayouts, (key, value) => {
      averagePercentagePayouts[key] = ((averageDollarPayouts[key] / grandTotalAverageDollarPayouts) * 100).toFixed(2);
    });

    return averagePercentagePayouts;
  }

  getGrandTotalOfAverageDollarPayouts() {
    var grandTotalOfAverageDollarPayouts = 0;
    var averageDollarPayouts = this.getAverageDollarPayouts();

    $.each(averageDollarPayouts, (key, value) => {
      grandTotalOfAverageDollarPayouts += Number(value);
    });

    return grandTotalOfAverageDollarPayouts;
  }

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

  getTotalPercentagePayouts() {
    var totalPercentagePayouts = {};
    var grandTotalTotalDollarPayouts = this.getGrandTotalOfTotalDollarPayouts();
    var totalDollarPayouts = this.getTotalDollarPayouts();

    $.each(totalDollarPayouts, (key, value) => {
      totalPercentagePayouts[key] = ((totalDollarPayouts[key] / grandTotalTotalDollarPayouts) * 100).toFixed(2);
    });

    return totalPercentagePayouts;
  }

  getGrandTotalOfTotalDollarPayouts() {
    var grandTotalOfTotalDollarPayouts = 0;
    var totalDollarPayouts = this.getTotalDollarPayouts();

    $.each(totalDollarPayouts, (key, value) => {
      grandTotalOfTotalDollarPayouts += Number(value);
    });

    return grandTotalOfTotalDollarPayouts;
  }

  getNumberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  render() {
    return (
      <div>
        <div className="col-xs-12">
          <div className="row">
            <AverageDollarPayout
              getAverageDollarPayouts={this.getAverageDollarPayouts.bind(this)}
              getNumberWithCommas={this.getNumberWithCommas.bind(this)} />
            <AveragePercentagePayout
              getAveragePercentagePayouts={this.getAveragePercentagePayouts.bind(this)} />
          </div>
        </div>
        <div className="col-xs-12">
          <div className="row">
            <TotalDollarPayout
              getTotalDollarPayouts={this.getTotalDollarPayouts.bind(this)}
              getNumberWithCommas={this.getNumberWithCommas.bind(this)} />
            <TotalPercentagePayout
              getTotalPercentagePayouts={this.getTotalPercentagePayouts.bind(this)} />
          </div>
        </div>
      </div>
    );
  }
}
