import React from 'react';

require('../../../../../../sass/frequencyintro.scss');

export default class FrequencyIntro extends React.Component {
  render() {
    return (
      <div className="col-xs-12 frequency-intro">
        <h2>Frequency Statistics</h2>
        <p>Here are the seven most frequently drawn Lotto Max numbers, excluding the bonus number.</p>
      </div>
    );
  }
}