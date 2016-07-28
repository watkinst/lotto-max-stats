import React from 'react';

export default class Stats extends React.Component {
  
  render() {
    return (
      <div className="col-xs-12 col-sm-6 col-lg-4">        
        <h5>7 of 7: {this.props.matches[9]}</h5>
        <h5>6 of 7 + bonus: {this.props.matches[8]}</h5>
        <h5>6 of 7: {this.props.matches[7]}</h5>
        <h5>5 of 7: {this.props.matches[6]}</h5>
        <h5>4 of 7: {this.props.matches[5]}</h5>
        <h5>3 of 7 + bonus: {this.props.matches[4]}</h5>
        <h5>3 of 7: {this.props.matches[3]}</h5>
        <h5>2 of 7: {this.props.matches[2]}</h5>
        <h5>1 of 7: {this.props.matches[1]}</h5>
        <h5>0 of 7: {this.props.matches[0]}</h5>        
      </div>
    );
  }
}