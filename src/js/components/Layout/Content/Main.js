import React from 'react';
import Sim from './Main/Sim';
import MostFrequent from './Main/MostFrequent';

export default class Main extends React.Component {

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

  getMostFrequentNumbers(array) {
    var mostOftenDrawn = [];
    var unsorted = array.slice();
    var sorted = array.slice().sort(function(a, b){return a-b});
    var lastSeven = sorted.slice(Math.max(sorted.length - 7, 0)).reverse();

    for (var i = 0; i < lastSeven.length; i++) {
      var lastIndex = unsorted.lastIndexOf(lastSeven[i]);
      mostOftenDrawn.push(lastIndex + 1);
      unsorted[lastIndex] = -Infinity;
    }

    mostOftenDrawn.sort(function(a, b){return a-b});;

    return mostOftenDrawn;
  }

  render() {

    var timesDrawn = this.calculateTimesDrawn();
    var mostFrequentNumbers = this.getMostFrequentNumbers(timesDrawn.slice());

    return (
      <div className="col-xs-12 col-lg-9">
        <div className="row">
          <Sim />
          <div className="col-xs-12 col-md-6">
            <div className="row">
              <MostFrequent mostFrequentNumbers={mostFrequentNumbers} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}