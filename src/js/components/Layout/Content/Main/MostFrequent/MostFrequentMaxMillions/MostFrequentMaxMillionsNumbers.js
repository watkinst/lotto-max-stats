import React from 'react';

require('../../../../../../../sass/mostfrequentmaxmillionsnumbers.scss');

export default class MostFrequentMaxMillionsNumbers extends React.Component {
  
  render() {

    var timesDrawn = this.props.calculateTimesDrawn(1);
    var mostFrequentNumbers = this.props.getMostFrequentNumbers(timesDrawn);

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