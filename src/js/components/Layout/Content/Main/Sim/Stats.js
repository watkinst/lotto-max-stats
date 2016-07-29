import React from 'react';

export default class Stats extends React.Component {
  
  render() {
    return (
      <div className="col-xs-12">
        <h4>Total Draws: {this.props.draws}</h4>        
        <h4>7 of 7: {this.props.matches[9]}</h4>
        <h4>6 of 7 + bonus: {this.props.matches[8]}</h4>
        <h4>6 of 7: {this.props.matches[7]}</h4>
        <h4>5 of 7: {this.props.matches[6]}</h4>
        <h4>4 of 7: {this.props.matches[5]}</h4>
        <h4>3 of 7 + bonus: {this.props.matches[4]}</h4>
        <h4>3 of 7: {this.props.matches[3]}</h4>
        <h4>2 of 7: {this.props.matches[2]}</h4>
        <h4>1 of 7: {this.props.matches[1]}</h4>
        <h4>0 of 7: {this.props.matches[0]}</h4>        
      </div>
    );
  }
}