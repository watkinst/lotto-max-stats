import React from 'react';

require('../../../../../../sass/grandtotalpayoutintro.scss');

export default class GrandTotalPayoutIntro extends React.Component {

  render() {
    return (
      <div className="col-xs-12 grand-total-payout-intro">
        <h2 className="title">Total Lotto Max Payout</h2>
        <p>Here is the grand total of Lotto Max payouts so far.</p>
      </div>
    );
  }
}