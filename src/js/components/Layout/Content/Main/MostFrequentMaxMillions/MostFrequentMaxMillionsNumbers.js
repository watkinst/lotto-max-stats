import React from 'react';

require('../../../../../../sass/mostfrequentmaxmillionsnumbers.scss');

export default class MostFrequentMaxMillionsNumbers extends React.Component {
  
  calculateTimesDrawn() {
    var timesDrawn = [];

    for (var i = 0; i < 49; i++) {
      timesDrawn.push(0);
    }
    
    var draws = this.props.data.draws;

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

    return timesDrawn;
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

    return (
      <div className="col-xs-12 most-frequent-max-millions-numbers">
        <button className="btn btn-default btn-most-frequent-max-millions disabled">{mostFrequentNumbers[0]}</button>
        <button className="btn btn-default btn-most-frequent-max-millions disabled">{mostFrequentNumbers[1]}</button>
        <button className="btn btn-default btn-most-frequent-max-millions disabled">{mostFrequentNumbers[2]}</button>
        <button className="btn btn-default btn-most-frequent-max-millions disabled">{mostFrequentNumbers[3]}</button>
        <button className="btn btn-default btn-most-frequent-max-millions disabled">{mostFrequentNumbers[4]}</button>
        <button className="btn btn-default btn-most-frequent-max-millions disabled">{mostFrequentNumbers[5]}</button>
        <button className="btn btn-default btn-most-frequent-max-millions disabled">{mostFrequentNumbers[6]}</button>
        <button className="btn btn-success btn-most-frequent-max-millions disabled">n/a</button>
      </div>
    );
  }
}