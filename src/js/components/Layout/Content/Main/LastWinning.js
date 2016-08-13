import React from 'react';
import LastWinningIntro from './LastWinning/LastWinningIntro';
import LastWinningNumbers from './LastWinning/LastWinningNumbers';

require('../../../../../sass/lastwinning.scss');

export default class LastWinning extends React.Component {

  getLastDraw() {
    var draws = this.props.data.draws;    
    return draws[draws.length - 1];
  }

  render() {
    return (
      <div className="col-xs-12">
        <div className="last-winning-container">
          <div className="row">
            <LastWinningIntro data={this.props.data}
                              getLastDraw={this.getLastDraw.bind(this)} />
            <LastWinningNumbers data={this.props.data}
                                getLastDraw={this.getLastDraw.bind(this)} />
          </div>
        </div>
      </div>
    );
  }
}
