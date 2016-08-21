import React from 'react';
import TotalPercentagePayoutIntro from './TotalPercentagePayout/TotalPercentagePayoutIntro';
import TotalPercentagePayoutStats from './TotalPercentagePayout/TotalPercentagePayoutStats';

require('../../../../../../sass/totalpercentagepayout.scss');

export default class TotalPercentagePayout extends React.Component {

  render() {
    return (
      <div className="col-xs-12 col-sm-6">
        <div className="total-percentage-payout-container">
          <div className="row">
            <TotalPercentagePayoutIntro />
            <TotalPercentagePayoutStats
              getTotalPercentagePayouts={this.props.getTotalPercentagePayouts} />
          </div>
        </div>
      </div>
    );
  }
}
