import React from 'react';

require('../../../../../../sass/mostfrequentnumbers.scss');

export default class MostFrequentNumbers extends React.Component {
  
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

    var timesDrawn = this.props.calculateTimesDrawn();
    var mostFrequentNumbers = this.getMostFrequentNumbers(timesDrawn.slice());

    return (
      <div className="col-xs-12 most-frequent-numbers">
        <button className="btn btn-default btn-most-frequent disabled">{mostFrequentNumbers[0]}</button>
        <button className="btn btn-default btn-most-frequent disabled">{mostFrequentNumbers[1]}</button>
        <button className="btn btn-default btn-most-frequent disabled">{mostFrequentNumbers[2]}</button>
        <button className="btn btn-default btn-most-frequent disabled">{mostFrequentNumbers[3]}</button>
        <button className="btn btn-default btn-most-frequent disabled">{mostFrequentNumbers[4]}</button>
        <button className="btn btn-default btn-most-frequent disabled">{mostFrequentNumbers[5]}</button>
        <button className="btn btn-default btn-most-frequent disabled">{mostFrequentNumbers[6]}</button>
      </div>
    );
  }
}