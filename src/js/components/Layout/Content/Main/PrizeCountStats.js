import React from 'react';
import AveragePrizeCount from './PrizeCountStats/AveragePrizeCount';
import TotalPrizeCount from './PrizeCountStats/TotalPrizeCount';
import AveragePercentagePrizeCount from './PrizeCountStats/AveragePercentagePrizeCount';
import TotalPercentagePrizeCount from './PrizeCountStats/TotalPercentagePrizeCount';

export default class PrizeCountStats extends React.Component {

  getAveragePrizeCounts() {
    var draws = this.props.data.draws;
    var numberOfPayingDrawsPerMatchLevel = {};    
    var averagePrizeCounts = {};
    var totalPrizeCounts = this.getTotalPrizeCounts();

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

    $.each(totalPrizeCounts, (key, value) => {
      var numberOfDraws = numberOfPayingDrawsPerMatchLevel[key];
      averagePrizeCounts[key] = (value / numberOfDraws).toFixed(0);
    });

    return averagePrizeCounts;
  }

  getAveragePercentagePrizeCounts() {
    var averagePercentagePrizeCounts = {};
    var grandTotalAveragePrizeCounts = this.getGrandTotalOfAveragePrizeCounts();
    var averagePrizeCounts = this.getAveragePrizeCounts();

    $.each(averagePrizeCounts, (key, value) => {
      averagePercentagePrizeCounts[key] = ((averagePrizeCounts[key] / grandTotalAveragePrizeCounts) * 100).toFixed(6);
    });

    return averagePercentagePrizeCounts;
  }

  getGrandTotalOfAveragePrizeCounts() {
    var grandTotalOfAveragePrizeCounts = 0;
    var averagePrizeCounts = this.getAveragePrizeCounts();

    $.each(averagePrizeCounts, (key, value) => {
      grandTotalOfAveragePrizeCounts += Number(value);
    });

    return grandTotalOfAveragePrizeCounts;
  }

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

  getTotalPercentagePrizeCounts() {
    var totalPercentagePrizeCounts = {};
    var grandTotalTotalPrizeCounts = this.getGrandTotalOfTotalPrizeCounts();
    var totalPrizeCounts = this.getTotalPrizeCounts();

    $.each(totalPrizeCounts, (key, value) => {
      totalPercentagePrizeCounts[key] = ((totalPrizeCounts[key] / grandTotalTotalPrizeCounts) * 100).toFixed(6);
    });

    return totalPercentagePrizeCounts;
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
      <div>
        <div className="col-xs-12">
          <div className="row">
            <AveragePrizeCount
              getAveragePrizeCounts={this.getAveragePrizeCounts.bind(this)}
              getNumberWithCommas={this.getNumberWithCommas.bind(this)} />
            <AveragePercentagePrizeCount
              getAveragePercentagePrizeCounts={this.getAveragePercentagePrizeCounts.bind(this)} />
          </div>
        </div>
        <div className="col-xs-12">
          <div className="row">
            <TotalPrizeCount
              getTotalPrizeCounts={this.getTotalPrizeCounts.bind(this)}
              getNumberWithCommas={this.getNumberWithCommas.bind(this)} />
            <TotalPercentagePrizeCount
              getTotalPercentagePrizeCounts={this.getTotalPercentagePrizeCounts.bind(this)} />
          </div>
        </div>
      </div>
    );
  }
}
