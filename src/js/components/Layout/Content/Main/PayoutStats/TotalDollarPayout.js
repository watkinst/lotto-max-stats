import React from 'react';
import TotalDollarPayoutIntro from './TotalDollarPayout/TotalDollarPayoutIntro';
import TotalDollarPayoutStats from './TotalDollarPayout/TotalDollarPayoutStats';

require('../../../../../../sass/totaldollarpayout.scss');

export default class TotalDollarPayout extends React.Component {

  render() {
    return (
      <div className="col-xs-12 col-sm-6">
        <div className="total-dollar-payout-container">
          <div className="row">
            <TotalDollarPayoutIntro />
            <TotalDollarPayoutStats
              getTotalDollarPayouts={this.props.getTotalDollarPayouts} />
          </div>
        </div>
      </div>
    );
  }
}
