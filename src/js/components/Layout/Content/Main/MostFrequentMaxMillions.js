import React from 'react';
import MostFrequentMaxMillionsIntro from './MostFrequentMaxMillions/MostFrequentMaxMillionsIntro';
import MostFrequentMaxMillionsNumbers from './MostFrequentMaxMillions/MostFrequentMaxMillionsNumbers';

require('../../../../../sass/mostfrequentmaxmillions.scss');

export default class MostFrequentMaxMillions extends React.Component {

  render() {
    return (
      <div className="col-xs-12 col-sm-6 col-md-12">
        <div className="most-frequent-max-millions-container">
          <div className="row">
            <MostFrequentMaxMillionsIntro />
            <MostFrequentMaxMillionsNumbers data={this.props.data} />
          </div>
        </div>
      </div>
    );
  }
}
