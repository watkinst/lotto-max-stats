import React from 'react';
import AveragePrizeCountIntro from './AveragePrizeCount/AveragePrizeCountIntro';
import AveragePrizeCountStats from './AveragePrizeCount/AveragePrizeCountStats';

require('../../../../../../sass/averageprizecount.scss');

export default class AveragePrizeCount extends React.Component {

  render() {
    return (
      <div className="col-xs-12 col-sm-6">
        <div className="average-prize-count-container">
          <div className="row">
            <AveragePrizeCountIntro />
            <AveragePrizeCountStats
              getAveragePrizeCounts={this.props.getAveragePrizeCounts}
              getNumberWithCommas={this.props.getNumberWithCommas} />
          </div>
        </div>
      </div>
    );
  }
}
