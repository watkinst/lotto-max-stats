import React from 'react';
import FrequencyIntro from './Frequency/FrequencyIntro';

require('../../../../../sass/frequency.scss');

export default class Frequency extends React.Component {

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

  getMostOftenDrawn(array) {
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

    // array.slice creates a shallow copy (pass by copy, not reference)
    var mostOftenDrawn = this.getMostOftenDrawn(timesDrawn.slice());

    console.log(timesDrawn);
    console.log(mostOftenDrawn);

    return (
      <div className="col-xs-12 col-md-6">
        <div className="frequency-container">
          <div className="row">
            <FrequencyIntro />
          </div>
        </div>
      </div>
    );
  }
}
