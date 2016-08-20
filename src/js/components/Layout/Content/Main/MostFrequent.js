import React from 'react';
import MostFrequentCombined from './MostFrequent/MostFrequentCombined';
import MostFrequentMain from './MostFrequent/MostFrequentMain';
import MostFrequentMaxMillions from './MostFrequent/MostFrequentMaxMillions';

export default class MostFrequent extends React.Component {

  calculateTimesDrawn(flag) {
    var draws = this.props.data.draws;
    var timesDrawn = this.initializeTimesDrawn();

    switch(flag) {
      case 0:
        this.includeLottoMaxDraws(draws, timesDrawn);
        break;
      case 1:
        this.includeMaxMillionsDraws(draws, timesDrawn);
        break;
      case 2:
        this.includeLottoMaxDraws(draws, timesDrawn);
        this.includeMaxMillionsDraws(draws, timesDrawn);
        break;
      default:
        //do nothing
    }

    return timesDrawn;
  }

  getMostFrequentBonusNumber() {
    var bonusNumbers = [];
    var mostFrequentBonusNumber = 0;
    var draws = this.props.data.draws;

    for (var i = 0; i < draws.length; i++) {
      bonusNumbers.push(draws[i].lotto_max.bonus_number);
    }

    var bonusNumberFrequency = bonusNumbers.reduce(function (acc, curr) {
      if (typeof acc[curr] == 'undefined') {
        acc[curr] = 1;
      } else {
        acc[curr] += 1;
      }

      return acc;
    }, {});

    var highestKey = 0;

    for (var key in bonusNumberFrequency) {
      if (key == 1) {
        mostFrequentBonusNumber = key;
        highestKey = key;
      } else {
        if (bonusNumberFrequency[key] > bonusNumberFrequency[highestKey]) {
          mostFrequentBonusNumber = key;
          highestKey = key;
        }
      }      
    }

    return mostFrequentBonusNumber;
  }

  getMostFrequentNumbers(array) {
    var mostFrequentNumbers = [];
    var unsorted = array.slice();
    var sorted = array.slice().sort(function(a, b){return a-b});
    var lastSeven = sorted.slice(Math.max(sorted.length - 7, 0)).reverse();

    for (var i = 0; i < lastSeven.length; i++) {
      var lastIndex = unsorted.lastIndexOf(lastSeven[i]);
      mostFrequentNumbers.push(lastIndex + 1);
      unsorted[lastIndex] = -Infinity;
    }

    mostFrequentNumbers.sort(function(a, b){return a-b});

    return mostFrequentNumbers;
  }

  includeLottoMaxDraws(draws, timesDrawn) {
    for (var i = 0; i < draws.length; i++) {
      for (var j = 0; j < draws[i].lotto_max.winning_numbers.length; j++) {
        timesDrawn[draws[i].lotto_max.winning_numbers[j]-1]++;
      }
    }
  }

  includeMaxMillionsDraws(draws, timesDrawn) {
    for (var i = 0; i < draws.length; i++) {
      var hasMaxMillions = (draws[i].maxmillions.winning_numbers !== null)
                            ? true
                            : false;
      if (hasMaxMillions) {
        var maxMillionsDraws = draws[i].maxmillions.winning_numbers;
        for (var j = 0; j < maxMillionsDraws.length; j++) {
          for (var k = 0; k < maxMillionsDraws[j].winning_number_set.length; k++) {
            timesDrawn[maxMillionsDraws[j].winning_number_set[k]-1]++;
          }
        }
      }
    }
  }

  initializeTimesDrawn() {
    var array = [];
    for (var i = 0; i < 49; i++) {
      array.push(0);
    }
    return array;
  }

  render() {
    return (
      <div>
        <MostFrequentMain calculateTimesDrawn={this.calculateTimesDrawn.bind(this)}
                          getMostFrequentNumbers={this.getMostFrequentNumbers.bind(this)}
                          getMostFrequentBonusNumber={this.getMostFrequentBonusNumber.bind(this)} />
        <MostFrequentMaxMillions calculateTimesDrawn={this.calculateTimesDrawn.bind(this)}
                                 getMostFrequentNumbers={this.getMostFrequentNumbers.bind(this)} />
        <MostFrequentCombined calculateTimesDrawn={this.calculateTimesDrawn.bind(this)}
                              getMostFrequentNumbers={this.getMostFrequentNumbers.bind(this)}
                              getMostFrequentBonusNumber={this.getMostFrequentBonusNumber.bind(this)} />
      </div>
    );
  }
}
