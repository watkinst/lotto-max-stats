import React from 'react';
import TotalDrawsIntro from './TotalDraws/TotalDrawsIntro';
import TotalDrawsNumbers from './TotalDraws/TotalDrawsNumbers';

require('../../../../../sass/totaldraws.scss');

export default class TotalDraws extends React.Component {

  getNumberOfDraws() {
    var draws = this.props.data.draws;
    return draws.length;
  }

  render() {
    return (
      <div className="col-xs-12 col-sm-4 col-lg-12">
        <div className="total-draws-container">
          <div className="row">
            <TotalDrawsIntro />
            <TotalDrawsNumbers getNumberOfDraws={this.getNumberOfDraws.bind(this)} />
          </div>
        </div>
      </div>
    );
  }
}