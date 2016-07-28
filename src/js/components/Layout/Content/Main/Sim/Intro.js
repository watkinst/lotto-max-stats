import React from 'react';

require('../../../../../../sass/intro.scss');

export default class Intro extends React.Component {
  render() {
    return (
      <div className="col-xs-12 sim-intro">
        <h2>Lotto Max Simulator</h2>
        <p>Think your numbers can win Lotto Max? Choose them here and click the start button to find out!</p>
      </div>
    );
  }
}