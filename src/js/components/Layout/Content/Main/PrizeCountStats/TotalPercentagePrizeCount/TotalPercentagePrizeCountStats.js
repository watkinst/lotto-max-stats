import React from 'react';

require('../../../../../../../sass/totalpercentageprizecountstats.scss');

export default class TotalPercentagePrizeCountStats extends React.Component {
  
  render() {

    var totalPercentagePrizeCounts = this.props.getTotalPercentagePrizeCounts();

    return (
      <div className="col-xs-12">
        <div className="total-percentage-prize-count-stats">
          <div className="row">
            <div className="col-xs-12 col-lg-6">
              <span className="btn btn-primary disabled">7 of 7: {totalPercentagePrizeCounts["7_of_7"]}%</span>
              <span className="btn btn-primary disabled">6 of 7 + bonus: {totalPercentagePrizeCounts["6_of_7_plus_bonus"]}%</span>
              <span className="btn btn-primary disabled">6 of 7: {totalPercentagePrizeCounts["6_of_7"]}%</span>
              <span className="btn btn-primary disabled">5 of 7: {totalPercentagePrizeCounts["5_of_7"]}%</span>
            </div>
            <div className="col-xs-12 col-lg-6">
              <span className="btn btn-primary disabled">4 of 7: {totalPercentagePrizeCounts["4_of_7"]}%</span>
              <span className="btn btn-primary disabled">3 of 7 + bonus: {totalPercentagePrizeCounts["3_of_7_plus_bonus"]}%</span>
              <span className="btn btn-primary disabled">3 of 7: {totalPercentagePrizeCounts["3_of_7"]}%</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}