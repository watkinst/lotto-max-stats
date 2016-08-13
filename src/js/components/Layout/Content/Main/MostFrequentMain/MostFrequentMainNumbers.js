import React from 'react';

require('../../../../../../sass/mostfrequentmainnumbers.scss');

export default class MostFrequentMainNumbers extends React.Component {
  
  calculateTimesDrawn() {
    var timesDrawn = [];

    for (var i = 0; i < 49; i++) {
      timesDrawn.push(0);
    }
    
    var draws = this.props.data.draws;

    for (var i = 0; i < draws.length; i++) {
      for (var j = 0; j < draws[i].lotto_max.winning_numbers.length; j++) {
        timesDrawn[draws[i].lotto_max.winning_numbers[j]-1]++;
      }
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

  render() {

    var timesDrawn = this.calculateTimesDrawn();
    var mostFrequentNumbers = this.getMostFrequentNumbers(timesDrawn);
    var mostFrequentBonusNumber = this.getMostFrequentBonusNumber();

    return (
      <div className="col-xs-12 most-frequent-main-numbers">
        <button className="btn btn-default btn-most-frequent-main disabled">{mostFrequentNumbers[0]}</button>
        <button className="btn btn-default btn-most-frequent-main disabled">{mostFrequentNumbers[1]}</button>
        <button className="btn btn-default btn-most-frequent-main disabled">{mostFrequentNumbers[2]}</button>
        <button className="btn btn-default btn-most-frequent-main disabled">{mostFrequentNumbers[3]}</button>
        <button className="btn btn-default btn-most-frequent-main disabled">{mostFrequentNumbers[4]}</button>
        <button className="btn btn-default btn-most-frequent-main disabled">{mostFrequentNumbers[5]}</button>
        <button className="btn btn-default btn-most-frequent-main disabled">{mostFrequentNumbers[6]}</button>
        <button className="btn btn-success btn-most-frequent-main disabled">{mostFrequentBonusNumber}</button>
      </div>
    );
  }
}