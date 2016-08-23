import React from 'react';

require('../../../../../../sass/grandtotalprizesnumbers.scss');

export default class GrandTotalPrizesNumbers extends React.Component {
  
  render() {

    var unformattedGrandTotal = this.props.getGrandTotalOfTotalPrizeCounts();
    var formattedGrandTotal = this.props.getNumberWithCommas(unformattedGrandTotal);

    return (
      <div className="col-xs-12 grand-total-prizes-numbers">
        <button className="btn btn-default btn-grand-total-prizes-numbers disabled">{formattedGrandTotal}</button>        
      </div>
    );
  }
}