import React from 'react';
import TotalPrizeCountIntro from './TotalPrizeCount/TotalPrizeCountIntro';
import TotalPrizeCountStats from './TotalPrizeCount/TotalPrizeCountStats';

require('../../../../../../sass/totalprizecount.scss');

export default class TotalPrizeCount extends React.Component {

  render() {
    return (
      <div className="col-xs-12 col-sm-6">
        <div className="total-prize-count-container">
          <div className="row">
            <TotalPrizeCountIntro />
            <TotalPrizeCountStats
              getTotalPrizeCounts={this.props.getTotalPrizeCounts}
              getNumberWithCommas={this.props.getNumberWithCommas} />
          </div>
        </div>
      </div>
    );
  }
}
