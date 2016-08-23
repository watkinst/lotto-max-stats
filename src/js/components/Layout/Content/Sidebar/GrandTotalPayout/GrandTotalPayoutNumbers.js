import React from 'react';

require('../../../../../../sass/grandtotalpayoutnumbers.scss');

export default class GrandTotalPayoutNumbers extends React.Component {
  
  render() {

    var unformattedGrandTotal = this.props.getGrandTotalOfTotalDollarPayouts();
    var formattedGrandTotal = this.props.getNumberWithCommas(unformattedGrandTotal);

    return (
      <div className="col-xs-12 grand-total-payout-numbers">
        <button className="btn btn-default btn-grand-total-payout-numbers disabled">${formattedGrandTotal}</button>        
      </div>
    );
  }
}