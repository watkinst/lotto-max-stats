import React from 'react';
import TotalPercentagePrizeCountIntro from './TotalPercentagePrizeCount/TotalPercentagePrizeCountIntro';
import TotalPercentagePrizeCountStats from './TotalPercentagePrizeCount/TotalPercentagePrizeCountStats';

require('../../../../../../sass/totalpercentageprizecount.scss');

export default class TotalPercentagePrizeCount extends React.Component {

  render() {
    return (
      <div className="col-xs-12 col-sm-6">
        <div className="total-percentage-prize-count-container">
          <div className="row">
            <TotalPercentagePrizeCountIntro />
            <TotalPercentagePrizeCountStats
              getTotalPercentagePrizeCounts={this.props.getTotalPercentagePrizeCounts} />
          </div>
        </div>
      </div>
    );
  }
}
