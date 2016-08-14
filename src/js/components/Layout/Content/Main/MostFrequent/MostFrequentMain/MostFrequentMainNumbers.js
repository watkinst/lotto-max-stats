import React from 'react';

require('../../../../../../../sass/mostfrequentmainnumbers.scss');

export default class MostFrequentMainNumbers extends React.Component {
  
  render() {

    var timesDrawn = this.props.calculateTimesDrawn(0);
    console.log('from main');
    console.log(timesDrawn);
    var mostFrequentNumbers = this.props.getMostFrequentNumbers(timesDrawn);
    var mostFrequentBonusNumber = this.props.getMostFrequentBonusNumber();

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