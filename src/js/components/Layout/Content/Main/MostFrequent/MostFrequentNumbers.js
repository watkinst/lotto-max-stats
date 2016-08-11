import React from 'react';

require('../../../../../../sass/mostfrequentnumbers.scss');

export default class MostFrequentNumbers extends React.Component {
  render() {
    return (
      <div className="col-xs-12 most-frequent-numbers">
        <button className="btn btn-default btn-most-frequent disabled">{this.props.mostFrequent[0]}</button>
        <button className="btn btn-default btn-most-frequent disabled">{this.props.mostFrequent[1]}</button>
        <button className="btn btn-default btn-most-frequent disabled">{this.props.mostFrequent[2]}</button>
        <button className="btn btn-default btn-most-frequent disabled">{this.props.mostFrequent[3]}</button>
        <button className="btn btn-default btn-most-frequent disabled">{this.props.mostFrequent[4]}</button>
        <button className="btn btn-default btn-most-frequent disabled">{this.props.mostFrequent[5]}</button>
        <button className="btn btn-default btn-most-frequent disabled">{this.props.mostFrequent[6]}</button>
      </div>
    );
  }
}