import React from 'react';
import AveragePercentagePayoutIntro from './AveragePercentagePayout/AveragePercentagePayoutIntro';
import AveragePercentagePayoutStats from './AveragePercentagePayout/AveragePercentagePayoutStats';

require('../../../../../../sass/averagepercentagepayout.scss');

export default class AveragePercentagePayout extends React.Component {

  render() {
    return (
      <div className="col-xs-12 col-sm-6">
        <div className="average-percentage-payout-container">
          <div className="row">
            <AveragePercentagePayoutIntro />
            <AveragePercentagePayoutStats
              getAveragePercentagePayouts={this.props.getAveragePercentagePayouts} />
          </div>
        </div>
      </div>
    );
  }
}
