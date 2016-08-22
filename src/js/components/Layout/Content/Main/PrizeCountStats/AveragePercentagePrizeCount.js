import React from 'react';
import AveragePercentagePrizeCountIntro from './AveragePercentagePrizeCount/AveragePercentagePrizeCountIntro';
import AveragePercentagePrizeCountStats from './AveragePercentagePrizeCount/AveragePercentagePrizeCountStats';

require('../../../../../../sass/averagepercentageprizecount.scss');

export default class AveragePercentagePrizeCount extends React.Component {

  render() {
    return (
      <div className="col-xs-12 col-sm-6">
        <div className="average-percentage-prize-count-container">
          <div className="row">
            <AveragePercentagePrizeCountIntro />
            <AveragePercentagePrizeCountStats
              getAveragePercentagePrizeCounts={this.props.getAveragePercentagePrizeCounts} />
          </div>
        </div>
      </div>
    );
  }
}
