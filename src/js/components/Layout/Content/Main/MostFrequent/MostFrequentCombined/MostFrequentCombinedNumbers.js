import React from 'react';

require('../../../../../../../sass/mostfrequentcombinednumbers.scss');

export default class MostFrequentCombinedNumbers extends React.Component {
  
  render() {

    var timesDrawn = this.props.calculateTimesDrawn(2);
    var mostFrequentNumbers = this.props.getMostFrequentNumbers(timesDrawn);
    var mostFrequentBonusNumber = this.props.getMostFrequentBonusNumber();

    return (
      <div className="col-xs-12 most-frequent-combined-numbers">
        <button className="btn btn-default btn-most-frequent-combined disabled">{mostFrequentNumbers[0]}</button>
        <button className="btn btn-default btn-most-frequent-combined disabled">{mostFrequentNumbers[1]}</button>
        <button className="btn btn-default btn-most-frequent-combined disabled">{mostFrequentNumbers[2]}</button>
        <button className="btn btn-default btn-most-frequent-combined disabled">{mostFrequentNumbers[3]}</button>
        <button className="btn btn-default btn-most-frequent-combined disabled">{mostFrequentNumbers[4]}</button>
        <button className="btn btn-default btn-most-frequent-combined disabled">{mostFrequentNumbers[5]}</button>
        <button className="btn btn-default btn-most-frequent-combined disabled">{mostFrequentNumbers[6]}</button>
        <button className="btn btn-success btn-most-frequent-combined disabled">{mostFrequentBonusNumber}</button>
      </div>
    );
  }
}