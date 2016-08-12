import React from 'react';
import MostFrequentIntro from './MostFrequent/MostFrequentIntro';
import MostFrequentNumbers from './MostFrequent/MostFrequentNumbers';

require('../../../../../sass/mostfrequent.scss');

export default class MostFrequent extends React.Component {

  render() {
    return (
      <div className="col-xs-12 col-sm-6 col-md-12">
        <div className="most-frequent-container">
          <div className="row">
            <MostFrequentIntro />
            <MostFrequentNumbers data={this.props.data} />
          </div>
        </div>
      </div>
    );
  }
}
