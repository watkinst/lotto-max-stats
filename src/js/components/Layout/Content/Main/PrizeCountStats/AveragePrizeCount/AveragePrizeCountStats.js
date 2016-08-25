import React from 'react';

require('../../../../../../../sass/averageprizecountstats.scss');

export default class AverageDollarPrizeCountStats extends React.Component {
  
  render() {

    var averagePrizeCounts = this.props.getAveragePrizeCounts();

    return (
      <div className="col-xs-12">
        <div className="average-prize-count-stats">
          <div className="row">
            <div className="col-xs-12 col-lg-6">
              <span className="btn btn-default disabled">7 of 7: {this.props.getNumberWithCommas(averagePrizeCounts["7_of_7"])}</span>
              <span className="btn btn-default disabled">6 of 7 + bonus: {this.props.getNumberWithCommas(averagePrizeCounts["6_of_7_plus_bonus"])}</span>
              <span className="btn btn-default disabled">6 of 7: {this.props.getNumberWithCommas(averagePrizeCounts["6_of_7"])}</span>
              <span className="btn btn-default disabled">5 of 7: {this.props.getNumberWithCommas(averagePrizeCounts["5_of_7"])}</span>
            </div>
            <div className="col-xs-12 col-lg-6">
              <span className="btn btn-default disabled">4 of 7: {this.props.getNumberWithCommas(averagePrizeCounts["4_of_7"])}</span>
              <span className="btn btn-default disabled">3 of 7 + bonus: {this.props.getNumberWithCommas(averagePrizeCounts["3_of_7_plus_bonus"])}</span>
              <span className="btn btn-default disabled">3 of 7: {this.props.getNumberWithCommas(averagePrizeCounts["3_of_7"])}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}