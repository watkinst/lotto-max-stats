import React from 'react';

require('../../../../../../sass/stats.scss');

export default class Stats extends React.Component {
  
  render() {
    return (
      <div className="col-xs-12">
        <div className="stats">
          <div className="row">
            <div className="col-xs-12 col-sm-6">
              <span className="label label-default"># of Draws: {this.props.draws}</span>
              <span className="label label-default">7 / 7: {this.props.matches[9]}</span>
              <span className="label label-default">6 / 7 + bonus: {this.props.matches[8]}</span>
              <span className="label label-default">6 / 7: {this.props.matches[7]}</span>
              <span className="label label-default">5 / 7: {this.props.matches[6]}</span>
              <span className="label label-default">4 / 7: {this.props.matches[5]}</span>
            </div>            
            <div className="col-xs-12 col-sm-6">
              <span className="label label-default">3 / 7 + bonus: {this.props.matches[4]}</span>
              <span className="label label-default">3 / 7: {this.props.matches[3]}</span>
              <span className="label label-default">2 / 7: {this.props.matches[2]}</span>
              <span className="label label-default">1 / 7: {this.props.matches[1]}</span>
              <span className="label label-default">0 / 7: {this.props.matches[0]}</span>
            </div>            
          </div>
        </div>
      </div>
    );
  }
}