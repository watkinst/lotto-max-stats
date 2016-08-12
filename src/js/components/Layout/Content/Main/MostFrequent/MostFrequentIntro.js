import React from 'react';

require('../../../../../../sass/mostfrequentintro.scss');

export default class MostFrequentIntro extends React.Component {
  render() {
    return (
      <div className="col-xs-12 most-frequent-intro">
        <h2 className="title">Most Frequent Numbers</h2>
        <p>Here are the most frequently drawn Lotto Max numbers (bonus in green).</p>
      </div>
    );
  }
}