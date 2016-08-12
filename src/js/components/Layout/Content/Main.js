import React from 'react';
import Sim from './Main/Sim';
import LastWinning from './Main/LastWinning';
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

  render() {
    return (
      <div className="col-xs-12 col-lg-9">
        <div className="row">
          <Sim />
          <div className="col-xs-12 col-md-6">
            <div className="row">
              <LastWinning data={this.props.data} />
              <MostFrequent calculateTimesDrawn={this.calculateTimesDrawn.bind(this)} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}