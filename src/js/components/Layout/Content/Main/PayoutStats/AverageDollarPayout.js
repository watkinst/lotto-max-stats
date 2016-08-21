import React from 'react';
import AverageDollarPayoutIntro from './AverageDollarPayout/AverageDollarPayoutIntro';
import AverageDollarPayoutStats from './AverageDollarPayout/AverageDollarPayoutStats';

require('../../../../../../sass/averagedollarpayout.scss');

export default class AverageDollarPayout extends React.Component {

  render() {
    return (
      <div className="col-xs-12 col-sm-6">
        <div className="average-dollar-payout-container">
          <div className="row">
            <AverageDollarPayoutIntro />
            <AverageDollarPayoutStats
              getAverageDollarPayouts={this.props.getAverageDollarPayouts} />
          </div>
        </div>
      </div>
    );
  }
}
